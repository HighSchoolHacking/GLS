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
     */
    public generateLineResults(nodes: IGlsNode[]): LineResults[] {
        const allLineResults: LineResults[] = [];
        const importsStore: ImportsStore = new ImportsStore();

        for (const node of nodes) {
            const lineResults: LineResults = this.nodeRenderer.renderNode(node);

            allLineResults.push(lineResults);
            importsStore.addImports(lineResults.addedImports);
        }

        if (!importsStore.hasAnyImports()) {
            return allLineResults;
        }

        const newLine: LineResults = LineResults.newSingleLine("", false);
        allLineResults.unshift(newLine);

        const allImportStores: Import[] = importsStore.getAllImportStores();
        for (const addedImport of allImportStores) {
            const rendered: LineResults = this.importsPrinter.render(addedImport);
            allLineResults.unshift(rendered);
        }

        return allLineResults;
    }
}
