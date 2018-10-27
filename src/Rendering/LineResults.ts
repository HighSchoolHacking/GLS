import { CommandResult } from "./Commands/CommandResult";
import { Import } from "./Languages/Imports/Import";

/**
 * A cluster of code converted from a line of GLS syntax.
 */
export class LineResults {
    /**
     * Creates a new result containing the start or end of a block.
     *
     * @param text   The contents of the line.
     * @param indentation   How much the line changes indentation.
     * @returns A new block-changing line result.
     */
    public static newBlockLine(text: string, indentation: number): LineResults {
        return new LineResults([new CommandResult(text, indentation)]);
    }

    /**
     * Creates a new result containing a single line with a semicolon.
     *
     * @param text   The contents of the line.
     * @returns A new single line result.
     */
    public static newSingleLine(text: string): LineResults {
        return new LineResults([new CommandResult(text, 0)]);
    }

    /**
     * Any imports that must be in a file to use this.
     */
    public addedImports: Import[];

    /**
     * Whether this should have a semicolon appended.
     */
    public addSemicolon: boolean;

    /**
     * Text contents of the result.
     */
    public commandResults: CommandResult[];

    /**
     * Initializes a new instance of the LineResults class.
     *
     * @param commandResults   Lines of code converted from GLS syntax.
     * @param addsSemicolon   Whether this should end with a semicolon.
     */
    public constructor(commandResults: CommandResult[]) {
        this.commandResults = commandResults;
        this.addSemicolon = false;
        this.addedImports = [];
    }

    /**
     * Sets whether this should end with a semicolon.
     *
     * @param addSemicolon   Whether this should end with a semicolon.
     * @returns this
     */
    public withAddSemicolon(addSemicolon: boolean): LineResults {
        this.addSemicolon = addSemicolon;
        return this;
    }

    /**
     * Adds a series of imports to the results.
     *
     * @param imports   Requested package imports.
     * @returns this
     */
    public withImports(imports: Import[]): LineResults {
        this.addedImports.push(...imports);
        return this;
    }
}
