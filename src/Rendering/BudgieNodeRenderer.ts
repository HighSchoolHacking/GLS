import { BlankNode } from "../Tokenization/Nodes/BlankNode";
import { CommandNode } from "../Tokenization/Nodes/CommandNode";
import { IBudgieNode } from "../Tokenization/Nodes/IBudgieNode";
import { TextNode } from "../Tokenization/Nodes/TextNode";
import { Command } from "./Commands/Command";
import { CommandsBag } from "./Commands/CommandsBag";
import { Import } from "./Languages/Imports/Import";
import { LineResults } from "./LineResults";
import { ParametersValidator } from "./ParametersValidator";

/**
 * Renders Budgie nodes into line results.
 */
export class BudgieNodeRenderer {
    /**
     * Budgie commands indexed by name.
     */
    private commandsBag: CommandsBag;

    /**
     * Validates whether input parameters match command requirements.
     */
    private parametersValidator: ParametersValidator;

    /**
     * Initializes a new instance of the BudgieNodeRenderer class.
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
     * @param node   Parsed node from a line of raw Budgie syntax.
     * @returns Equivalent line results for the node.
     */
    public renderNode(node: IBudgieNode): LineResults {
        if (node instanceof BlankNode) {
            return LineResults.newSingleLine("");
        }

        if (node instanceof TextNode) {
            return LineResults.newSingleLine(node.text);
        }

        if (node instanceof CommandNode) {
            return this.renderCommandNode(node);
        }

        throw new Error(`Unknown node type: ${node.toString()}`);
    }

    /**
     * Renders a command node into line results.
     *
     * @param node   Parsed command node from raw Budgie syntax.
     * @returns Equivalent line results for the node.
     */
    private renderCommandNode(node: CommandNode): LineResults {
        const command: Command = this.commandsBag.getCommand(node.command);

        this.parametersValidator.validate(node, command.getMetadata().parameters);

        const imports: Import[] = [];
        const parameters = [node.command];

        for (const arg of node.args) {
            const subResults = this.renderNode(arg);
            imports.push(...subResults.addedImports);

            for (const subResult of subResults.commandResults) {
                parameters.push(subResult.text);
            }
        }

        return command.render(parameters).withImports(imports);
    }
}
