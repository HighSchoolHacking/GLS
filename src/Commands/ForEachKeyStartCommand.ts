import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for the beginning of a foreach loop over a container's keys.
 */
export class ForEachKeyStartCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("container", "A container to iterate over.", true),
        new SingleParameter("keyName", "The name of the iteration key variable.", true),
        new SingleParameter("keyType", "The type of the iteration key variable.", true)
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ForEachKeyStartCommand.parameters;
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.loops.forEachAsMethod) {
            return this.renderForEachAsMethod(parameters);
        } else {
            return this.renderForEachAsLoop(parameters);
        }
    }

    /**
     * Renders a Ruby-style method iteration.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (container, keyName, keyType).
     */
    public renderForEachAsMethod(parameters: string[]): LineResults {
        let output: string = parameters[1];
        output += this.language.properties.loops.forEachGetKeys;
        output += parameters[2];
        output += this.language.properties.loops.forEachRight;

        return new LineResults([new CommandResult(output, 1)], false);
    }

    /**
     * Renders a traditional foreach loop.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     * @remarks Usage: (container, keyName, keyType).
     */
    public renderForEachAsLoop(parameters: string[]): LineResults {
        let line: string = this.language.properties.loops.foreach;
        let output: CommandResult[];

        line += this.language.properties.loops.forEachStartItteration;

        if (this.language.properties.loops.iterationTypeDeclarationRequired) {
            let variableInline = this.context.convertParsed(["variable inline", parameters[2], parameters[3]]);

            line += this.language.properties.variables.declaration;
            line += variableInline.commandResults[0].text;
        } else {
            line += this.language.properties.variables.declaration;
            line += parameters[2];
        }

        line += this.language.properties.loops.forEachMiddle;
        line += parameters[1];
        line += this.language.properties.loops.forEachGetKeys;
        line += this.language.properties.loops.forEachRight;

        output = [new CommandResult(line, 0)];
        this.addLineEnder(output, this.language.properties.conditionals.startRight, 1);

        return new LineResults(output, false);
    }
}
