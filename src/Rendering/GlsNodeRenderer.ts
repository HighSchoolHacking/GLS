import { BlankNode } from "../Tokenization/Nodes/BlankNode";
import { CommandNode } from "../Tokenization/Nodes/CommandNode";
import { IGlsNode } from "../Tokenization/Nodes/IGlsNode";
import { TextNode } from "../Tokenization/Nodes/TextNode";
import { Command } from "./Commands/Command";
import { CommandsBag } from "./Commands/CommandsBag";
import { LineResults } from "./LineResults";
import { ParametersValidator } from "./ParametersValidator";

/**
 * Renders GLS nodes into line results.
 */
export class GlsNodeRenderer {
    /**
     * GLS commands indexed by name.
     */
    private commandsBag: CommandsBag;

    /**
     * Validates whether input parameters match command requirements.
     */
    private parametersValidator: ParametersValidator;

    /**
     * Initializes a new instance of the GlsNodeRenderer class.
     *
     * @param commandsBag   Holds commands indexed by name.
     */
    public constructor(commandsBag: CommandsBag) {
        this.commandsBag = commandsBag;
        this.parametersValidator = new ParametersValidator();
    }

    /**
     * Renders a parsed node into line results.
     *
     * @param node   Parsed node from a line of raw GLS syntax.
     * @returns Equivalent line results for the node.
     */
    public renderNode(node: IGlsNode): LineResults {
        if (node instanceof BlankNode) {
            return LineResults.newSingleLine("", false);
        }

        if (node instanceof TextNode) {
            return LineResults.newSingleLine(node.text, false);
        }

        if (node instanceof CommandNode) {
            return this.renderCommandNode(node);
        }

        throw new Error(`Unknown node type: ${node.toString()}`);
    }

    /**
     * Renders a command node into line results.
     *
     * @param node   Parsed command node from raw GLS syntax.
     * @returns Equivalent line results for the node.
     */
    private renderCommandNode(node: CommandNode): LineResults {
        const command: Command = this.commandsBag.getCommand(node.command);

        this.parametersValidator.validate(node, command.getMetadata().parameters);

        const parameters = [node.command];

        for (const arg of node.args) {
            if (typeof arg === "string") {
                parameters.push(arg);
            } else {
                const subResults = this.renderNode(arg).commandResults;
                for (const subResult of subResults) {
                    parameters.push(subResult.text);
                }
            }
        }

        return command.render(parameters);
    }
}
