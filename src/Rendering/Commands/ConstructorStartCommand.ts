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
import { addLineEnder } from "./Utilities";

/**
 * Starts a constructor.
 */
export class ConstructorStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ConstructorStart)
        .withDescription("Starts a constructor")
        .withIndentation([1])
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the constructor.", true),
            new SingleParameter("className", "The name of the class.", true),
            new RepeatingParameters("Function parameters", [
                new SingleParameter("parameterName", "A named parameter for the constructor.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true),
            ]),
            new KeywordParameter([KeywordNames.Base], "Keyword to call a base class constructor.", false),
            new SingleParameter("parentClassName", "Name of the parent class.", false),
            new RepeatingParameters("Function parameters", [new SingleParameter("parameter", "Argument for the base constructor.", true)]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ConstructorStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const imports: Import[] = [];
        const privacy: string = parameters[1];
        const className: string = parameters[2];
        const baseIndex: number = parameters.indexOf(KeywordNames.Base);

        // public
        let declaration = this.getPublicity(privacy);

        if (this.language.syntax.classes.constructors.useKeyword) {
            // public constructor
            declaration += this.language.syntax.classes.constructors.keyword;
        } else {
            // public MyClass
            declaration += className;
        }

        // public MyClass(
        declaration += "(";

        let endOfParameters = baseIndex;
        if (endOfParameters === -1) {
            endOfParameters = parameters.length;
        }

        if (this.language.syntax.classes.constructors.takeThis) {
            // public MyClass(self
            declaration += this.language.syntax.classes.this;

            if (endOfParameters > 3) {
                // public MyClass(self,
                declaration += ", ";
            }
        }

        for (let i = 3; i < endOfParameters; i += 2) {
            // public MyClass(self, a
            const parameterLine = this.generateParameterVariable(parameters, i);
            declaration += parameterLine.commandResults[0].text;
            imports.push(...parameterLine.addedImports);

            // public MyClass(self, a, b, c
            if (i !== endOfParameters - 2) {
                declaration += ", ";
            }
        }

        // public MyClass(self, a, b, c)
        const output = [new CommandResult(declaration + ")", 0)];
        let addSemicolon = false;

        // Case: no super
        if (baseIndex === -1) {
            // public MyClass(self, a, b, c) {
            addLineEnder(output, this.language.syntax.functions.defineStartRight, 1);
        }
        // Case: super with the ": base(...)" shorthand
        else if (this.language.syntax.classes.constructors.baseShorthand) {
            // public MyClass(self, a, b, c)
            //     : base(
            let nextLine = "\n    : " + this.language.syntax.classes.constructors.baseConstructor + "(";

            // public MyClass(self, a, b, c)
            //     : base(a
            for (let i = baseIndex + 1; i < parameters.length; i += 1) {
                nextLine += parameters[i];

                // public MyClass(self, a, b, c)
                //     : base(a, b, c
                if (i !== parameters.length - 1) {
                    nextLine += ", ";
                }
            }

            // public MyClass(self, a, b, c)
            //     : base(a, b, c)
            nextLine += ")";
            addLineEnder(output, nextLine, 1);

            // public MyClass(self, a, b, c)
            //     : base(a, b, c)
            // {
            output[output.length - 1].indentation -= 1;
            addLineEnder(output, "\n{", 1);
        }
        // Case: super as the first line in the constructor
        else {
            addSemicolon = true;

            let startLine = this.language.syntax.functions.defineStartRight + "\n";
            startLine += this.language.syntax.classes.constructors.baseConstructor + "(";

            // public MyClass(self, a, b, c) {
            //     super(
            addLineEnder(output, startLine, 0);
            output[output.length - 2].indentation += 1;

            let nextLine: string = "";

            // public MyClass(self, a, b, c) {
            //     super(a
            for (let i = baseIndex + 1; i < parameters.length; i += 1) {
                nextLine += parameters[i];

                // public MyClass(self, a, b, c) {
                //     super(a, b, c
                if (i !== parameters.length - 1) {
                    nextLine += ", ";
                }
            }

            // public MyClass(self, a, b, c) {
            //     super(a, b, c)
            addLineEnder(output, nextLine + ")", 0);
        }

        return new LineResults(output).withAddSemicolon(addSemicolon).withImports(imports);
    }

    /**
     * Determines the name prefix for a constructor.
     *
     * @param publicity   Publicity of the constructor.
     * @returns Name prefix for the publicity.
     */
    private getPublicity(publicity: string): string {
        if (publicity === KeywordNames.Private) {
            return this.language.syntax.classes.constructors.private;
        }

        if (publicity === KeywordNames.Protected) {
            return this.language.syntax.classes.constructors.protected;
        }

        return this.language.syntax.classes.constructors.public;
    }

    /**
     * Generates a line result for a parameter.
     *
     * @param parameters   An ordered sequence of [parameterName, parameterType, ...].
     * @param i   An index in the parameters of a parameterName.
     * @remarks This assumes that if a language doesn't declare variables, it doesn't declare types.
     */
    private generateParameterVariable(parameters: string[], i: number): LineResults {
        if (!this.language.syntax.variables.declarationRequired) {
            return LineResults.newSingleLine(parameters[i]);
        }

        const parameterName: string = parameters[i];
        const parameterTypeLine = this.context.convertParsed([CommandNames.Type, parameters[i + 1]]);
        const parameterType = parameterTypeLine.commandResults[0].text;

        return this.context.convertParsed([CommandNames.VariableInline, parameterName, parameterType]);
    }
}
