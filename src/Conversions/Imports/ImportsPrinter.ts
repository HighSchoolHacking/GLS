import { CaseStyleConverter } from "../Casing/CaseStyleConverter";
import { CommandResult } from "../../Commands/CommandResult";
import { LineResults } from "../../Commands/LineResults";
import { Import } from "../../Languages/Imports/Import";
import { ImportRelativity } from "../../Languages/Imports/ImportRelativity";
import { Language } from "../../Languages/Language";

/**
 * Renders imports to output line results.
 */
export class ImportsPrinter {
    /**
     * Converts series of words to a case.
     */
    private caseStyleConverter: CaseStyleConverter;

    /**
     * Language to output line results in.
     */
    private language: Language;

    /**
     * Initializes a new instance of the ImportsPrinter class.
     *
     * @param caseStyleConverter   Converts series of words to a case.
     * @param language   Language to output line results in.
     */
    public constructor(language: Language, caseStyleConverter: CaseStyleConverter) {
        this.caseStyleConverter = caseStyleConverter;
        this.language = language;
    }

    /**
     * Renders an import to a output line results.
     * 
     * @param addedImport   Import to render.
     * @returns Line results for the rendered import.
     */
    public render(addedImport: Import): LineResults {
        let lines: CommandResult[];

        if (this.language.properties.imports.explicitLines) {
            lines = this.renderMultipleLines(addedImport);
        } else {
            lines = [this.renderCombinedLine(addedImport)];
        }

        return new LineResults(lines, false);
    }

    /**
     * Renders an import for a language that splits item imports across lines.
     * 
     * @param addedImport   Import to render.
     * @returns Line(s) of code in the language.
     */
    private renderMultipleLines(addedImport: Import): CommandResult[] {
        let results: CommandResult[] = [];

        for (let item of addedImport.items) {
            results.push(this.renderLine(addedImport, item));
        }

        return results;
    }

    /**
     * Renders an import for a language that puts multiple items in one import.
     * 
     * @param addedImport   Import to render.
     * @returns Line(s) of code in the language.
     */
    private renderCombinedLine(addedImport: Import): CommandResult {
        return this.renderLine(addedImport, addedImport.items.join(", "));
    }

    /**
     * Renders a single import line of some item(s) from a package.
     * 
     * @param addedImport   Import to render.
     * @param item   Item to import from the import path.
     * @returns A line of code in the language.
     */
    private renderLine(addedImport: Import, item: string): CommandResult {
        let line: string = this.renderImportLeft(addedImport.relativity);

        if (this.language.properties.imports.itemsBeforePackage) {
            if (this.language.properties.imports.explicit) {
                line += item;
                line += this.language.properties.imports.middle;
            }

            line += this.renderPackagePath(addedImport);
        } else {
            line += this.renderPackagePath(addedImport);

            if (this.language.properties.imports.explicit) {
                line += this.language.properties.imports.middle;
                line += item;
            }
        }

        line += this.language.properties.imports.right;
        return new CommandResult(line, 0);
    }

    /**
     * @param relativity   Relativity for an import.
     * @returns The left component of the import's rendered line equivalent.
     */
    private renderImportLeft(relativity: ImportRelativity): string {
        if (relativity === ImportRelativity.Absolute) {
            return this.language.properties.imports.leftAbsolute;
        }

        return this.language.properties.imports.leftLocal;
    }

    /**
     * Renders an import's package path into a language equivalent.
     *
     * @param addedImport   Import to render.
     * @returns The import's rendered package path.
     */
    private renderPackagePath(addedImport: Import): string {
        let line = this.caseStyleConverter.convert(addedImport.packagePath);

        if (addedImport.relativity === ImportRelativity.Local
            && this.language.properties.imports.useLocalRelativePaths
            && line[0] !== ".") {
            line = "./" + line;
        }

        return line;
    }
}
