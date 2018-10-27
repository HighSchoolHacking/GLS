import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Starts a class declaration.
 */
export class ClassStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ClassStart)
        .withDescription("Starts a class declaration")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter([KeywordNames.Export], "Keyword to export this class publicly.", false),
            new KeywordParameter([KeywordNames.Abstract], "Keyword to extend from a parent class.", false),
            new SingleParameter("classDescriptor", "The class name and optional generics.", true),
            new KeywordParameter([KeywordNames.Extends], "Keyword to extend from a parent class.", false),
            new SingleParameter("parentClassDescriptor", "A parent class name and optional generics.", false),
            new KeywordParameter([KeywordNames.Implements], "Keyword to implement from parent interface(s).", false),
            new RepeatingParameters("Parent interfaces", [new SingleParameter("interfaceName", "Names of parent interfaces.", false)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ClassStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const imports: Import[] = [];
        const remainingParameters = parameters.slice(1);
        let line = "";

        line += this.getForExport(remainingParameters);
        line += this.getForAbstract(remainingParameters);
        line += this.language.syntax.classes.declareStartLeft;

        // Class name
        const classNameLine = this.context.convertParsed([CommandNames.Type, remainingParameters[0]]);
        line += classNameLine.commandResults[0].text;
        imports.push(...classNameLine.addedImports);
        remainingParameters.shift();

        // Extends clause(s)
        let forExtends: string = "";
        if (remainingParameters[0] === KeywordNames.Extends) {
            const extendsLine = this.context.convertParsed([CommandNames.Type, remainingParameters[1]]);
            forExtends += extendsLine.commandResults[0].text;
            imports.push(...extendsLine.addedImports);
            forExtends += this.language.syntax.classes.declareExtendsRight;

            remainingParameters.shift();
            remainingParameters.shift();
        }

        const forImplements: string = this.getForImplements(remainingParameters);

        if (forExtends !== "") {
            line += this.language.syntax.classes.declareExtendsLeft;
        }

        line += forExtends;

        if (
            this.language.syntax.interfaces.supported &&
            forImplements !== "" &&
            !this.language.syntax.interfaces.declareImplementsExplicit
        ) {
            if (forExtends === "") {
                line += this.language.syntax.interfaces.declareExtendsLeft;
            } else {
                line += this.language.syntax.interfaces.declareExtendsRight;
            }
        }

        line += forImplements;

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.syntax.classes.declareStartRight, 1);

        return new LineResults(lines).withImports(imports);
    }

    /**
     * Removes any parameters for exporting the class.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForExport(remainingParameters: string[]): string {
        if (remainingParameters[0] !== KeywordNames.Export) {
            return this.language.syntax.classes.exports.internal;
        }

        remainingParameters.shift();
        let exported = this.language.syntax.classes.exports.exportedLeft;

        if (this.language.syntax.classes.exports.exportedIncludesName) {
            if (remainingParameters[0] === KeywordNames.Abstract) {
                exported += remainingParameters[1];
            } else {
                exported += remainingParameters[0];
            }

            exported += this.language.syntax.classes.exports.exportedMiddle;
        }

        return exported;
    }

    /**
     * Removes any parameters for abstract typing.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForAbstract(remainingParameters: string[]): string {
        if (remainingParameters[0] !== KeywordNames.Abstract) {
            return "";
        }

        remainingParameters.shift();
        return this.language.syntax.classes.abstractDeclaration;
    }

    /**
     * Removes any parameters for implementing interfaces.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForImplements(remainingParameters: string[]): string {
        if (!this.language.syntax.interfaces.supported || remainingParameters[0] !== KeywordNames.Implements) {
            return "";
        }

        let section = "";

        if (this.language.syntax.interfaces.declareImplementsExplicit) {
            section += this.language.syntax.classes.declareImplementsLeft;
        }

        section += remainingParameters.slice(1).join(", ");

        return section;
    }
}
