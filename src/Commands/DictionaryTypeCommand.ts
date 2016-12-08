import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for declaring a dictionary type.
 */
export class DictionaryTypeCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("keyType", "The type of the keys.", true),
        new SingleParameter("valueType", "The type of the values", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return DictionaryTypeCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output: string = "";

        if (this.language.properties.dictionaries.initializeAsNew) {
            output += this.language.properties.dictionaries.className;
        }

        if (this.language.properties.variables.explicitTypes) {
            output += this.language.properties.dictionaries.typeLeft;
            output += this.context.convertCommon("type", parameters[1]);
            output += this.language.properties.dictionaries.typeMiddle;
            output += this.context.convertCommon("type", parameters[2]);
            output += this.language.properties.dictionaries.typeRight;
        }

        let results = LineResults.newSingleLine(output, false);

        if (this.language.properties.dictionaries.requiredImports) {
            results.addImports(this.language.properties.dictionaries.requiredImports);
        }

        return results;
    }
}
