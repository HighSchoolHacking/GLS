import { LineResults } from "../Commands/LineResults";
import { GlsParser } from "./GlsParser";
import { ImportsPrinter } from "./Imports/ImportsPrinter";
import { ImportsStore } from "./Imports/ImportsStore";

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
    private parser: GlsParser;

    /**
     * Initializes a new instance of the LineResultsGenerator class.
     *
     * @param importsPrinter   Renders imports to output line results.
     * @param parser   Parses raw GLS syntax into line results.
     */
    public constructor(importsPrinter: ImportsPrinter, parser: GlsParser) {
        this.importsPrinter = importsPrinter;
        this.parser = parser;
    }

    /**
     * Generates line results from raw GLS.
     *
     * @param glsLines   Raw lines of GLS syntax being converted.
     * @return Clusters of code returned from parsing raw GLS.
     */
    public generateLineResults(glsLines: string[]): LineResults[] {
        const allLineResults: LineResults[] = [];
        const importsStore: ImportsStore = new ImportsStore();

        for (let i = 0; i < glsLines.length; i += 1) {
            const glsLine = glsLines[i];
            if (glsLine.trim() === "") {
                allLineResults.push(LineResults.newSingleLine("", false));
                continue;
            }

            const lineResults: LineResults = this.parser.parseCommand(glsLine, i);

            allLineResults.push(lineResults);
            importsStore.addImports(lineResults.addedImports);
        }

        if (importsStore.hasAnyImports()) {
            allLineResults.unshift(LineResults.newSingleLine("", false));

            for (const addedImport of importsStore.getAllImportStores()) {
                allLineResults.unshift(this.importsPrinter.render(addedImport));
            }
        }

        return allLineResults;
    }
}
