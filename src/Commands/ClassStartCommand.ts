import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandResult } from "./CommandResult";
import { KeywordNames } from "./KeywordNames";
import { LineResults } from "./LineResults";
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
        .withDescription("Starts a class declaration.")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter([KeywordNames.Export], "Keyword to export this class publicly.", false),
            new KeywordParameter([KeywordNames.Abstract], "Keyword to extend from a parent class.", false),
            new SingleParameter("classDescriptor", "The class name and optional generics.", true),
            new KeywordParameter([KeywordNames.Extends], "Keyword to extend from a parent class.", false),
            new SingleParameter("parentClassDescriptor", "A parent class name and optional generics.", false),
            new KeywordParameter([KeywordNames.Implements], "Keyword to implement from parent interface(s).", false),
            new RepeatingParameters(
                "Parent interfaces",
                [
                    new SingleParameter("interfaceName", "Names of parent interfaces.", false)
                ])
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
        const remainingParameters = parameters.slice(1);
        let line = "";

        line += this.getForExport(remainingParameters);
        line += this.getForAbstract(remainingParameters);
        line += this.language.properties.classes.declareStartLeft;

        line += this.getForClassName(remainingParameters);

        const forExtends: string = this.getForExtends(remainingParameters);
        const forImplements: string = this.getForImplements(remainingParameters);

        if (forExtends !== "") {
            line += this.language.properties.classes.declareExtendsLeft;
        }

        line += forExtends;

        if (this.language.properties.interfaces.supported
            && forImplements !== ""
            && !this.language.properties.interfaces.declareImplementsExplicit) {
            if (forExtends === "") {
                line += this.language.properties.interfaces.declareExtendsLeft;
            } else {
                line += this.language.properties.interfaces.declareExtendsRight;
            }
        }

        line += forImplements;

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        this.addLineEnder(lines, this.language.properties.classes.declareStartRight, 1);

        return new LineResults(lines, false);
    }

    /**
     * Removes any parameters for exporting the class.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForExport(remainingParameters: string[]): string {
        if (remainingParameters[0] !== KeywordNames.Export) {
            return this.language.properties.classes.exports.internal;
        }

        remainingParameters.shift();
        return this.language.properties.classes.exports.exported;
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
        return this.language.properties.classes.abstractDeclaration;
    }

    /**
     * Removes any parameters for the class name.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForClassName(remainingParameters: string[]): string {
        const className = this.context.convertCommon(CommandNames.Type, remainingParameters[0]);

        remainingParameters.shift();

        return className;
    }

    /**
     * Removes any parameters for extending a class.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForExtends(remainingParameters: string[]): string {
        let section = "";
        if (remainingParameters[0] !== KeywordNames.Extends) {
            return section;
        }

        section += this.context.convertCommon(CommandNames.Type, remainingParameters[1]);
        section += this.language.properties.classes.declareExtendsRight;

        remainingParameters.shift();
        remainingParameters.shift();

        return section;
    }

    /**
     * Removes any parameters for implementing interfaces.
     *
     * @param remainingParameters   Remaining input parameters.
     * @returns Language output equivalent for the removed parameters.
     */
    private getForImplements(remainingParameters: string[]): string {
        if (!this.language.properties.interfaces.supported || remainingParameters[0] !== KeywordNames.Implements) {
            return "";
        }

        let section = "";

        if (this.language.properties.interfaces.declareImplementsExplicit) {
            section += this.language.properties.classes.declareImplementsLeft;
        }

        section += remainingParameters.slice(1).join(", ");

        return section;
    }
}
