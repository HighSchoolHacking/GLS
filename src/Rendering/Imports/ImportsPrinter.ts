import { ICaseStyleConverter } from "../Casing/CaseStyleConverter";
import { CommandResult } from "../Commands/CommandResult";
import { Import } from "../Languages/Imports/Import";
import { ImportRelativity } from "../Languages/Imports/ImportRelativity";
import { Language } from "../Languages/Language";
import { LineResults } from "../LineResults";

/**
 * Renders imports to output line results.
 */
export class ImportsPrinter {
    /**
     * Converts series of words to a case.
     */
    private caseStyleConverter: ICaseStyleConverter;

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
    public constructor(language: Language, caseStyleConverter: ICaseStyleConverter) {
        this.caseStyleConverter = caseStyleConverter;
        this.language = language;
    }

    /**
     * Renders an import to line results.
     *
     * @param addedImport   Import to render.
     * @returns Line results for the rendered import.
     */
    public render(addedImport: Import): LineResults {
        let lines: CommandResult[];

        if (this.language.syntax.imports.explicitLines) {
            lines = this.renderMultipleLines(addedImport);
        } else {
            lines = [this.renderCombinedLine(addedImport)];
        }

        return new LineResults(lines);
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
     * @param relativity   Relativity for an import.
     * @returns The left component of the import's rendered line equivalent.
     */
    private renderImportLeft(relativity: ImportRelativity): string {
        if (relativity === ImportRelativity.Absolute) {
            return this.language.syntax.imports.leftAbsolute;
        }

        return this.language.syntax.imports.leftLocal;
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

        if (this.language.syntax.imports.itemsBeforePackage) {
            if (this.language.syntax.imports.explicit) {
                line += item;
                line += this.language.syntax.imports.middle;
            }

            line += this.renderPackagePath(addedImport);
        } else {
            line += this.renderPackagePath(addedImport);

            if (this.language.syntax.imports.explicit) {
                line += this.language.syntax.imports.middle;
                line += item;
            }
        }

        line += this.language.syntax.imports.right;
        return new CommandResult(line, 0);
    }

    /**
     * Renders an import for a language that splits item imports across lines.
     *
     * @param addedImport   Import to render.
     * @returns Line(s) of code in the language.
     */
    private renderMultipleLines(addedImport: Import): CommandResult[] {
        const results: CommandResult[] = [];

        for (const item of addedImport.items) {
            results.push(this.renderLine(addedImport, item));
        }

        return results;
    }

    /**
     * Renders an import's package path into a language equivalent.
     *
     * @param addedImport   Import to render.
     * @returns The import's rendered package path.
     */
    private renderPackagePath(addedImport: Import): string {
        let line = this.caseStyleConverter.convert(addedImport.packagePath);

        if (addedImport.relativity === ImportRelativity.Local && this.language.syntax.imports.useLocalRelativePaths && line[0] !== ".") {
            line = "./" + line;
        }

        return line;
    }
}
