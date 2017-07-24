import { CommandResult } from "../Commands/CommandResult";
import { LineResults } from "../Commands/LineResults";
import { CaseStyle } from "../Languages/Casing/CaseStyle";
import { Language } from "../Languages/Language";
import { CaseStyleConverterBag } from "./Casing/CaseStyleConverterBag";
import { ConversionContext } from "./ConversionContext";
import { GlsParser } from "./GlsParser";
import { ImportsPrinter } from "./Imports/ImportsPrinter";
import { ImportsStore } from "./Imports/ImportsStore";

/**
 * A single conversion run from raw GLS syntax to a language.
 */
export class Conversion {
    /**
     * Renders imports to output line results.
     */
    private importsPrinter: ImportsPrinter;

    /**
     * Language being converted to.
     */
    private language: Language;

    /**
     * Converter to transform raw GLS syntax into language code.
     */
    private parser: GlsParser;

    /**
     * Initializes a new instance of the Conversion class.
     * 
     * @param language   Language being converted to.
     */
    public constructor(caseStyleConverterBag: CaseStyleConverterBag, language: Language, parser: GlsParser) {
        this.importsPrinter = new ImportsPrinter(
            language,
            caseStyleConverterBag.getConverter(language.properties.imports.case));

        this.language = language;
        this.parser = parser;
    }

    /**
     * Converts the stored lines of GLS syntax to language code.
     * 
     * @param glsLines   Raw lines of GLS syntax being converted.
     * @returns Converted lines of language code.
     */
    public convert(glsLines: string[]): string[] {
        let allLineResults = this.generateAllLineResults(glsLines);

        let output: string[] = [];
        let indentation: number = 0;

        for (let i: number = 0; i < allLineResults.length; i += 1) {
            let lineResults: LineResults = allLineResults[i];
            let commandResults: CommandResult[] = lineResults.commandResults;

            for (let j: number = 0; j < commandResults.length; j += 1) {
                let result: CommandResult = commandResults[j];

                if (result.indentation < 0) {
                    indentation += result.indentation;
                }

                if (result.text !== "\0") {
                    output.push(this.generateTabs(indentation) + result.text);
                }

                if (result.indentation > 0) {
                    indentation += result.indentation;
                }
            }

            if (lineResults.addSemicolon) {
                output[output.length - 1] += this.language.properties.style.semicolon;
            }
        }

        return output;
    }

    /**
     * Generates line results from raw GLS.
     * 
     * @param glsLines   Raw lines of GLS syntax being converted.
     * @return Clusters of code returned from parsing raw GLS.
     */
    private generateAllLineResults(glsLines: string[]): LineResults[] {
        let allLineResults: LineResults[] = [];
        let importsStore: ImportsStore = new ImportsStore();

        for (let i: number = 0; i < glsLines.length; i += 1) {
            if (glsLines[i].trim() === "") {
                allLineResults.push(LineResults.newSingleLine("", false));
                continue;
            }

            let lineResults: LineResults = this.parser.parseCommand(glsLines[i]);

            allLineResults.push(lineResults);
            importsStore.addImports(lineResults.addedImports);
        }

        if (importsStore.hasAnyImports()) {
            allLineResults.unshift(LineResults.newSingleLine("", false));

            for (let addedImport of importsStore.getAllImportStores()) {
                allLineResults.unshift(this.importsPrinter.render(addedImport));
            }
        }

        return allLineResults;
    }

    /**
     * Generates spaces equivalent to 4-space code tabbing.
     * 
     * @param amount   How many tabs should be added.
     * @returns An all-spaces String of length = amount * 4.
     */
    private generateTabs(amount: number): string {
        let output: string = "";

        for (let i: number = 0; i < amount; i += 1) {
            output += "    ";
        }

        return output;
    }
}
