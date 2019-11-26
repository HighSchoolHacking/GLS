import { ICaseStyleConverter } from "../Casing/CaseStyleConverter";
import { NameSplitter } from "../Casing/NameSplitter";
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
     * Converts directory path components to a case.
     */
    private directoryCaseStyleConverter: ICaseStyleConverter;

    private namspaceCaseStyleConverter: ICaseStyleConverter;

    /**
     * Converts file names to a case.
     */
    private fileCaseStyleConverter: ICaseStyleConverter;

    /**
     * Language to output line results in.
     */
    private language: Language;

    /**
     * Splits name strings into words.
     */
    private nameSplitter: NameSplitter;

    /**
     * Initializes a new instance of the ImportsPrinter class.
     *
     * @param directoryCaseStyleConverter   Converts directory path components to a case.
     * @param fileCaseStyleConverter   Converts file names to a case.
     * @param language   Language to output line results in.
     * @param nameSplitter   Splits name strings into words.
     */
    public constructor(
        language: Language,
        directoryCaseStyleConverter: ICaseStyleConverter,
        fileCaseStyleConverter: ICaseStyleConverter,
        namspaceCaseStyleConverter: ICaseStyleConverter,
        nameSplitter: NameSplitter,
    ) {
        this.directoryCaseStyleConverter = directoryCaseStyleConverter;
        this.fileCaseStyleConverter = fileCaseStyleConverter;
        this.namspaceCaseStyleConverter = namspaceCaseStyleConverter;
        this.language = language;
        this.nameSplitter = nameSplitter;
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

        if (relativity === ImportRelativity.Namespace) {
            return this.language.syntax.imports.leftNamespace;
        }

        return this.language.syntax.imports.leftLocal;
    }

    /**
     * @param relativity   Relativity for an import.
     * @returns The right component of the import's rendered line equivalent.
     */
    private renderImportRight(relativity: ImportRelativity): string {
        if (relativity === ImportRelativity.Absolute) {
            return this.language.syntax.imports.rightAbsolute;
        }

        if (relativity === ImportRelativity.Namespace) {
            return this.language.syntax.imports.rightNamespace;
        }

        return this.language.syntax.imports.rightLocal;
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
            if (this.language.syntax.imports.explicitItems) {
                line += item;
                line += this.language.syntax.imports.middle;
            }

            line += this.renderPackagePath(addedImport);
        } else {
            line += this.renderPackagePath(addedImport);

            if (this.language.syntax.imports.explicitItems) {
                line += this.language.syntax.imports.middle;
                line += item;
            }
        }

        line += this.renderImportRight(addedImport.relativity);
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
        let packagePath = addedImport.packagePath;

        if (addedImport.relativity !== ImportRelativity.Absolute || this.language.syntax.imports.explicitAbsoluteFileName) {
            packagePath = this.individualizePackagePaths(packagePath);
        }

        let line = "";

        if (addedImport.relativity === ImportRelativity.Namespace) {
            line += this.namspaceCaseStyleConverter.convert(packagePath);
        } else {
            line += this.directoryCaseStyleConverter.convert(packagePath);
        }

        if (addedImport.relativity !== ImportRelativity.Absolute && this.language.syntax.imports.useLocalRelativePaths && line[0] !== ".") {
            line = "./" + line;
        }

        return line;
    }

    /**
     * Converts individual components in a directory path to the language's file casing.
     *
     * @param packagePath   Components in a package path.
     * @returns File case transformed equivalent of the package path.
     */
    private individualizePackagePaths(packagePath: string[]): string[] {
        const paths: string[] = [];

        for (const component of packagePath) {
            paths.push(this.fileCaseStyleConverter.convert(this.nameSplitter.split(component)));
        }

        return paths;
    }
}
