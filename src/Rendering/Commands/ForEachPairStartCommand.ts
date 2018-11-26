import { Import } from "../Languages/Imports/Import";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * Starts a foreach loop over a container's pairs.
 */
export class ForEachPairStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ForEachPairStart)
        .withDescription("Starts a foreach loop over a container's pairs")
        .withIndentation([1])
        .withParameters([
            new SingleParameter("container", "A container to iterate over.", true),
            new SingleParameter("pairName", "The name of the pair variable", true),
            new SingleParameter("keyName", "The name of the key variable.", true),
            new SingleParameter("keyType", "The type of the key variable.", true),
            new SingleParameter("valueName", "The name of the value variable.", true),
            new SingleParameter("valueType", "The type of the value variable.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ForEachPairStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.syntax.loops.forEachAsMethod) {
            return this.renderForEachAsMethod(parameters);
        }

        return this.renderForEachAsLoop(parameters);
    }

    /**
     * Renders a traditional foreach loop.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
     */
    public renderForEachAsLoop(parameters: string[]): LineResults {
        const imports: Import[] = [];
        let line: string = this.language.syntax.loops.foreach;
        let output: CommandResult[];

        line += this.language.syntax.conditionals.startLeft;

        // This assumes that all languages that require declared variables (like C#) use
        // KeyValuePair<T, U> while languages that don't (like Python) use key, value
        if (this.language.syntax.variables.declarationRequired) {
            let typeName: string;
            let iteratorName: string;

            if (this.language.syntax.loops.forEachPairsAsKeys) {
                iteratorName = parameters[3];
            } else {
                iteratorName = parameters[2];
            }

            if (this.language.syntax.loops.forEachPairsAsPair) {
                typeName = this.language.syntax.loops.forEachPairsPairClass;
                typeName += "<" + this.addTypeNameType(parameters[4], imports);
                typeName += ", " + this.addTypeNameType(parameters[6], imports) + ">";
            } else {
                typeName = parameters[4];
            }

            line += this.language.syntax.variables.declaration;

            if (this.language.syntax.loops.forEachPairsTypedPair) {
                const typedLine = this.context.convertParsed([CommandNames.VariableInline, iteratorName, typeName]);
                line += typedLine.commandResults[0].text;
                imports.push(...typedLine.addedImports);
            } else {
                line += iteratorName;
            }
        } else {
            line += parameters[3];

            if (this.language.syntax.loops.forEachPairsAsPair) {
                line += ", " + parameters[5];
            }
        }

        line += this.language.syntax.loops.forEachMiddle;
        line += parameters[1];
        line += this.language.syntax.loops.forEachGetPairs;
        line += this.language.syntax.loops.forEachRight;

        output = [new CommandResult(line, 0)];
        addLineEnder(output, this.language.syntax.conditionals.startRight, 1);

        if (this.language.syntax.loops.forEachPairsAsPair && this.language.syntax.variables.declarationRequired) {
            this.addPairKeyLookup(parameters, imports, output);
            this.addPairValueLookup(parameters, imports, output);
        } else if (this.language.syntax.loops.forEachPairsAsKeys) {
            this.addKeyedValueLookup(parameters, imports, output);
        }

        return new LineResults(output).withImports(imports);
    }

    private addTypeNameType(rawType: string, imports: Import[]): string {
        const typeNameLine = this.context.convertParsed([CommandNames.Type, rawType]);

        imports.push(...typeNameLine.addedImports);

        return typeNameLine.commandResults[0].text;
    }

    /**
     * Renders a Ruby-style method iteration.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
     */
    public renderForEachAsMethod(parameters: string[]): LineResults {
        let output: string = parameters[1];
        output += this.language.syntax.loops.forEachGetPairs;
        output += parameters[3];
        output += ", ";
        output += parameters[5];
        output += this.language.syntax.loops.forEachRight;

        return new LineResults([new CommandResult(output, 1)]);
    }

    /**
     * Adds the retrieval of a container's value from a key.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param imports   Collection array for added imports.
     * @param output Line(s) of code in the language.
     * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
     */
    private addKeyedValueLookup(parameters: string[], imports: Import[], output: CommandResult[]): void {
        const valueNameLine = this.context.convertParsed([CommandNames.Type, parameters[5]]);
        const valueName: string = valueNameLine.commandResults[0].text;
        const valueType: string = parameters[6];
        const valueLookup: string = this.context.convertParsed([CommandNames.DictionaryGet, parameters[1], parameters[3]]).commandResults[0]
            .text;
        let valueVariable: string = this.context.convertParsed([CommandNames.Variable, valueName, valueType, valueLookup]).commandResults[0]
            .text;

        valueVariable += this.language.syntax.style.semicolon;

        imports.push(...valueNameLine.addedImports);
        output.push(new CommandResult(valueVariable, 0));
    }

    /**
     * Adds the retrieval of a pair's key.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param imports   Collection array for added imports.
     * @param output Line(s) of code in the language.
     * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
     */
    private addPairKeyLookup(parameters: string[], imports: Import[], output: CommandResult[]): void {
        const keyNameLine = this.context.convertParsed([CommandNames.Type, parameters[3]]);
        const keyName = keyNameLine.commandResults[0].text;
        const keyType: string = parameters[4];
        const keyLookup: string = parameters[2] + this.language.syntax.loops.forEachPairsRetrieveKey;
        let keyVariable: string = this.context.convertParsed([CommandNames.Variable, keyName, keyType, keyLookup]).commandResults[0].text;

        keyVariable += this.language.syntax.style.semicolon;

        imports.push(...keyNameLine.addedImports);
        output.push(new CommandResult(keyVariable, 0));
    }

    /**
     * Adds the retrieval of a pair's key and value.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @param imports   Collection array for added imports.
     * @param output Line(s) of code in the language.
     * @remarks Usage: (container, pairName, keyName, keyType, valueName, valueType).
     */
    private addPairValueLookup(parameters: string[], imports: Import[], output: CommandResult[]): void {
        const valueNameLine = this.context.convertParsed([CommandNames.Type, parameters[5]]);
        const valueName: string = valueNameLine.commandResults[0].text;
        const valueType: string = parameters[6];
        const valueLookup: string = parameters[2] + this.language.syntax.loops.forEachPairsRetrieveValue;
        let valueVariable: string = this.context.convertParsed([CommandNames.Variable, valueName, valueType, valueLookup]).commandResults[0]
            .text;

        valueVariable += this.language.syntax.style.semicolon;

        imports.push(...valueNameLine.addedImports);
        output.push(new CommandResult(valueVariable, 0));
    }
}
