import { CommandNode } from "../../../../Tokenization/Nodes/CommandNode";
import { IBudgieNode } from "../../../../Tokenization/Nodes/IBudgieNode";
import { TextNode } from "../../../../Tokenization/Nodes/TextNode";
import { IParameter } from "./Parameter";

/**
 * A parameter that's only satisfied by particular string literal(s).
 */
export class KeywordParameter implements IParameter {
    /**
     * A plain-text description of this parameter.
     */
    public description: string;

    /**
     * Allowed matching string literals.
     */
    public literals: Set<string>;

    /**
     * Whether this must be provided.
     */
    public required: boolean;

    /**
     * Initializes a new instance of the KeywordParameter class.
     *
     * @param literal   Allowed matching string literals.
     * @param description   A high-level definition of the parameter.
     * @param required   Whether this must be required.
     */
    public constructor(literals: string[], description: string, required: boolean) {
        this.description = description;
        this.literals = new Set(literals);
        this.required = required;
    }

    /**
     * @returns Whether this parameter is required.
     */
    public isRequired(): boolean {
        return this.required;
    }

    /**
     * Validates whether a command's args match this requirement.
     *
     * @param node   Command node with args from a source file.
     * @param inputPosition   Index of a starting input under test.
     * @param requirements   All parameter requirements.
     * @param requirementPosition   Index of the parameter requirement under test.
     * @returns A new input position following all valid inputs.
     */
    public validate(node: CommandNode, inputPosition: number, requirements: IParameter[], requirementPosition: number): number {
        const inputArg = node.args[inputPosition];
        if (!(inputArg instanceof TextNode)) {
            if (this.required) {
                throw new Error(`${node.command}: Parameter must be a text keyword.`);
            }

            return inputPosition;
        }

        if (this.literals.has(inputArg.text)) {
            return inputPosition + 1;
        }

        if (this.required) {
            throw new Error(`${node.command}: Missing required parameter: must be one of: '${Array.from(this.literals).join("', '")}'`);
        }

        return inputPosition;
    }
}
