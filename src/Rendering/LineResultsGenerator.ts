import { ImportsPrinter } from "./Imports/ImportsPrinter";
import { ImportsStore } from "./Imports/ImportsStore";
import { FileSyntax } from "./Languages/Properties/Syntax/FileSyntax";
import { LineResults } from "./LineResults";

/**
 * Generates line results from raw GLS.
 */
export class LineResultsGenerator {
    /**
     * Metadata on a language's file content syntax.
     */
    private fileSyntax: FileSyntax;

    /**
     * Renders imports to output line results.
     */
    private importsPrinter: ImportsPrinter;

    /**
     * Initializes a new instance of the LineResultsGenerator class.
     *
     * @param fileSyntax   Metadata on a language's file content syntax.
     * @param importsPrinter   Renders imports to output line results.
     */
    public constructor(fileSyntax: FileSyntax, importsPrinter: ImportsPrinter) {
        this.fileSyntax = fileSyntax;
        this.importsPrinter = importsPrinter;
    }

    /**
     * Generates line results from raw GLS.
     *
     * @param glsLines   Raw lines of GLS syntax being converted.
     * @param asFullFile   Whether a `file start` command indicated this is a full GLS file.
     * @return Clusters of code returned from parsing raw GLS.
     * @remarks This consists of two steps described inline.
     */
    public generateLineResults(allLineResults: LineResults[], importsStore: ImportsStore, asFullFile: boolean): LineResults[] {
        // 2. If any imports were added, insert them either before or after the file start.
        if (importsStore.hasAnyImports()) {
            // 2.1. Imports are inserted either at index 0 or just after file start command's lines.
            let importInsertionIndex: number;
            if (asFullFile && this.fileSyntax.importsAfterStartLines) {
                importInsertionIndex = 1;
            } else {
                importInsertionIndex = 0;
            }

            // 2.2. Add collected imports at the imports insertion point.
            const allImportStores = importsStore.getAllImportStores();
            for (let i = allImportStores.length - 1; i >= 0; i -= 1) {
                allLineResults.splice(importInsertionIndex, 0, this.importsPrinter.render(allImportStores[i]));
            }

            // 2.3. If there isn't yet a blank line after imports, manually add one in for appearance.
            const blankLineInsertionIndex = importInsertionIndex + allImportStores.length;
            if (
                allLineResults.length > blankLineInsertionIndex &&
                allLineResults[blankLineInsertionIndex].commandResults.length !== 0 &&
                allLineResults[blankLineInsertionIndex].commandResults[0].text !== ""
            ) {
                allLineResults.splice(blankLineInsertionIndex, 0, LineResults.newSingleLine(""));
            }
        }

        return allLineResults;
    }
}
