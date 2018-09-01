import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { KeywordNames } from "./KeywordNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a static variable.
 */
export class StaticVariableDeclareCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.StaticVariableDeclare)
        .withDescription("Declares a static variable.")
        .withParameters([
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the static variable.", true),
            new SingleParameter("name", "The name of the static variable.", true),
            new SingleParameter("type", "The type of the variable.", true),
            new SingleParameter("value", "An initial value for the variable.", false),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return StaticVariableDeclareCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.classes.statics.variables.skipStaticVariables && parameters.length < 5) {
            return LineResults.newSingleLine("\0", false);
        }

        let output = "";
        const privacy: string = parameters[1];
        let variableName: string = parameters[2];
        const type: string = parameters[3];
        let casingStyle: CaseStyle;

        if (privacy === KeywordNames.Protected) {
            output += this.language.properties.classes.statics.variables.protected;
            output += this.language.properties.classes.statics.variables.protectedPrefix;
            casingStyle = this.language.properties.classes.statics.variables.protectedCase;
        } else if (privacy === KeywordNames.Private) {
            output += this.language.properties.classes.statics.variables.private;
            output += this.language.properties.classes.statics.variables.privatePrefix;
            casingStyle = this.language.properties.classes.statics.variables.privateCase;
        } else {
            output += this.language.properties.classes.statics.variables.public;
            output += this.language.properties.classes.statics.variables.publicPrefix;
            casingStyle = this.language.properties.classes.statics.variables.publicCase;
        }

        variableName = this.context.convertStringToCase(variableName, casingStyle);

        const inlineParameters = [CommandNames.VariableInline, variableName, type];
        if (parameters.length === 5) {
            inlineParameters.push(parameters[4]);
        }

        output += this.language.properties.classes.statics.variables.label;
        output += this.context.convertParsed(inlineParameters).commandResults[0].text;

        return LineResults.newSingleLine(output, true);
    }
}
