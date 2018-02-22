import { IParameter } from "./Parameters/Parameter";

/**
 * Metadata on a command.
 */
export class CommandMetadata {
    /**
     * How this affects GLS source code indentation levels by default (no effect).
     */
    private static defaultIndentation: number[] = [];

    /**
     * Default required parameters for the command (none).
     */
    private static defaultParameters: IParameter[] = [];

    /**
     * Describes the command's purpose.
     */
    public description: string;

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
    public parameters: IParameter[];

    /**
     * Initializes a new instance of the Metadata class.
     *
     * @param name   Unique command name.
     */
    public constructor(name: string) {
        this.description = "";
        this.indentation = CommandMetadata.defaultIndentation;
        this.name = name;
        this.parameters = CommandMetadata.defaultParameters;
    }

    /**
     * Adds a description setting.
     *
     * @param description   Describes the command's purpose.
     * @returns this
     */
    public withDescription(description: string): CommandMetadata {
        this.description = description;
        return this;
    }

    /**
     * Adds an indentation setting.
     *
     * @param indentation   How this affects GLS source code indentation levels.
     * @returns this
     */
    public withIndentation(indentation: number[]): CommandMetadata {
        this.indentation = indentation;
        return this;
    }

    /**
     * Adds a parameters setting.
     *
     * @param parameters   Required parameters for the command.
     * @returns this
     */
    public withParameters(parameters: IParameter[]): CommandMetadata {
        this.parameters = parameters;
        return this;
    }
}
