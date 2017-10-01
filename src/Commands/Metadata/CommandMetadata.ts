import { Parameter } from "./Parameters/Parameter";

/**
 * Metadata on a command.
 */
export class CommandMetadata {
    /**
     * How this affects GLS source code indentation levels.
     */
    public indentation: number[];

    /**
     * Unique command name.
     */
    public name: string;

    /**
     * Required parameters for the command.
     */
    public parameters: Parameter[];

    /**
     * Initializes a new instance of the Metadata class.
     *
     * @param name   Unique command name.
     * @param indentation   How this affects GLS source code indentation levels.
     * @param parameters   Required parameters for the command.
     */
    public constructor(name: string, indentation: number[], parameters: Parameter[]) {
        this.name = name;
        this.indentation = indentation;
        this.parameters = parameters;
    }
}
