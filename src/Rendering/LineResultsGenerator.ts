import { IGlsNode } from "../Tokenization/Nodes/IGlsNode";
import { GlsNodeRenderer } from "./GlsNodeRenderer";
import { ImportsPrinter } from "./Imports/ImportsPrinter";
import { ImportsStore } from "./Imports/ImportsStore";
import { Import } from "./Languages/Imports/Import";
import { LineResults } from "./LineResults";

/**
 * Generates line results from raw GLS.
 */
export class LineResultsGenerator {
    /**
     * Renders imports to output line results.
     */
    private importsPrinter: ImportsPrinter;

    /**
     * Transform raw GLS syntax into line results.
     */
    private nodeRenderer: GlsNodeRenderer;

    /**
     * Initializes a new instance of the LineResultsGenerator class.
     *
     * @param importsPrinter   Renders imports to output line results.
     * @param nodeRenderer   Parses raw GLS syntax into line results.
     */
    public constructor(importsPrinter: ImportsPrinter, nodeRenderer: GlsNodeRenderer) {
        this.importsPrinter = importsPrinter;
        this.nodeRenderer = nodeRenderer;
    }

    /**
     * Generates line results from raw GLS.
     *
     * @param glsLines   Raw lines of GLS syntax being converted.
     * @return Clusters of code returned from parsing raw GLS.
     * @remarks This consists of two steps described inline.
     */
    public generateLineResults(nodes: IGlsNode[]): LineResults[] {
        const allLineResults: LineResults[] = [];
        const importsStore: ImportsStore = new ImportsStore();

        // 1. Add line results in order, recording any added imports they need.
        for (const node of nodes) {
            const lineResults: LineResults = this.nodeRenderer.renderNode(node);

            allLineResults.push(lineResults);
            importsStore.addImports(lineResults.addedImports);
        }

        // If we don't have any imports, step 2 is unnecessary.
        if (!importsStore.hasAnyImports()) {
            return allLineResults;
        }

        // If there isn't yet a blank line after imports, manually add one in for appearance.
        if (
            allLineResults.length !== 0 &&
            allLineResults[0].commandResults.length !== 0 &&
            allLineResults[0].commandResults[0].text !== ""
        ) {
            const newLine: LineResults = LineResults.newSingleLine("", false);
            allLineResults.unshift(newLine);
        }

        // 2. Add collected imports to the top of the file.
        const allImportStores: Import[] = importsStore.getAllImportStores();
        for (const addedImport of allImportStores) {
            const rendered: LineResults = this.importsPrinter.render(addedImport);
            allLineResults.unshift(rendered);
        }

        return allLineResults;
    }
}
