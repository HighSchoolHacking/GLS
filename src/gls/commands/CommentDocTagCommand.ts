import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for printing a documentation tag.
 */
export class CommentDocTagCommand extends Command {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("tag", "The name of the tag.", true),
        new SingleParameter("parameter", "An optional descriptor for the tag.", false),
        new RepeatingParameters("Comments regarding the tag", [])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return CommentDocTagCommand.parameters;
    }

    /**
     * A maximum length for tag lines.
     * 
     * @todo Calculate this using language style (#16).
     * @todo Factor in indentation from this.context (#17). 
     */
    private MaximumLineLength: number = 70;

    /**
     * Renders a command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (this.language.properties.comments.docAsXml) {
            return this.renderXmlDoc(parameters);
        } else {
            return this.renderJsDoc(parameters);
        }
    }

    /**
     * Renders a JSDoc-like command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderXmlDoc(parameters: string[]): LineResults {
        let lineStart: string = this.language.properties.comments.docLineStart;
        let tagRaw: string = parameters[1];
        let tag: string = this.parseTag(tagRaw);
        let commandResults: CommandResult[] = [];
        let contentsRaw: string;

        let starter: string = lineStart + "<" + tag;

        if (this.language.properties.comments.docTagsWithParameters.hasOwnProperty(tagRaw)) {
            starter += " " + this.parseTagParameter(tagRaw, parameters[2]) + "=\"";
            starter += parameters[2];
            starter += "\">";

            contentsRaw = parameters.slice(3).join(" ");
        } else {
            starter += ">";
            contentsRaw = parameters.slice(2).join(" ");
        }

        commandResults.push(new CommandResult(starter, 0));

        let contents: string[] = this.wrapTagContents(lineStart, contentsRaw);
        let contentsPadded: string[] = this.padContentsWithTag("", contents);

        for (let i: number = 0; i < contentsPadded.length; i += 1) {
            commandResults.push(new CommandResult(contentsPadded[i], 0));
        }

        let ender: string = this.language.properties.comments.docLineStart;
        ender += "</" + tag + ">";
        commandResults.push(new CommandResult(ender, 0));

        return new LineResults(commandResults, false);
    }

    /**
     * Renders a JSDoc-like command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    private renderJsDoc(parameters: string[]): LineResults {
        let tagRaw: string = parameters[1];
        let tagParsed: string = this.parseTag(tagRaw);
        let tag: string = tagParsed + this.language.properties.comments.docTagEnd;
        let contentsRaw: string;

        if (tagParsed === "\0") {
            tag = this.language.properties.comments.docTagStart;
        } else if (tagParsed !== "") {
            tag = this.language.properties.comments.docTagStart + tag;
        }

        if (this.language.properties.comments.docTagsWithParameters.hasOwnProperty(tagRaw)) {
            let parameterInfo = this.language.properties.comments.docTagsWithParameters[tagRaw];

            if (parameterInfo === "\0") {
                contentsRaw = parameters.slice(2).join(" ");
                tag = "";
            } else {
                contentsRaw = parameters.slice(3).join(" ");
                tag += parameters[2];
                tag += this.language.properties.comments.docTagEnd;
                tag += this.language.properties.comments.docTagSpaceAfter;
            }
        } else {
            contentsRaw = parameters.slice(2).join(" ");
        }

        if (tag === this.language.properties.comments.docTagEnd) {
            tag = "";
        }

        let contents: string[] = this.wrapTagContents(tag, contentsRaw);
        let contentsPadded: string[] = this.padContentsWithTag(tag, contents);
        let commandResults: CommandResult[] = [];

        for (let i: number = 0; i < contentsPadded.length; i += 1) {
            commandResults.push(new CommandResult(contentsPadded[i], 0));
        }

        return new LineResults(commandResults, false);
    }

    /**
     * Transforms a tag and information content into a wrapped set of
     * lines for documentation.
     * 
     * @param tag   A prefix for the lines.
     * @param contentsRaw   The raw information content.
     */
    private wrapTagContents(tag: string, contentsRaw: string): string[] {
        let maximumContentsLength: number = this.MaximumLineLength
            - tag.length
            - this.language.properties.comments.docLineEnd.length;

        if (!this.language.properties.comments.docAsXml) {
            maximumContentsLength -= this.language.properties.comments.docLineStart.length;
        }

        if (contentsRaw.length <= maximumContentsLength) {
            return [contentsRaw];
        }

        return this.splitTextToLength(contentsRaw, maximumContentsLength);
    }

    /**
     * Splits a bunch of words into lines of a maximum length.
     * 
     * @param text   Stringified words to be split.
     * @param length   A maximum length for lines.
     * @returns Lines of the original text.
     */
    private splitTextToLength(text: string, length: number) {
        let textSplit: string[] = text.split(" ");
        let lines: string[] = [];
        let line: string = "";

        for (let i: number = 0; i < textSplit.length; i += 1) {
            if (line.length + 1 + textSplit[i].length > length) {
                lines.push(line);
                line = textSplit[i];
            } else {
                if (line !== "") {
                    line += " ";
                }

                line += textSplit[i];
            }
        }

        lines.push(line);

        return lines;
    }

    /**
     * Pads comment lines with a starting tag on the first line and spaces
     * on subsequent lines.
     * 
     * @param tag   A starting tag to prefixthe first line.
     * @param contents   Comment lines to be padded.
     * @returns The contents, with the tag and padding in front.
     */
    private padContentsWithTag(tag: string, contents: string[]): string[] {
        let results: string[] = [];
        let starter: string = this.language.properties.comments.docLineStart;

        results.push(starter + tag + contents[0]);

        for (let i: number = 1; i < contents.length; i += 1) {
            results.push(starter + this.padLeft(contents[i], tag.length));
        }

        return results;
    }

    /**
     * Prefixes a String with some number of spaces. 
     * 
     * @param text   The text to pad.
     * @param spaces   How many spaces to pad it with.
     * @returns The text, padded with spaces.
     */
    private padLeft(text: string, spaces: number): string {
        let padder: string = "";

        for (let i = 0; i < spaces; i += 1) {
            padder += " ";
        }

        return padder + text;
    }

    /**
     * @param tagRaw   A user-given documentationtag.
     * @returns An alias for tag if it exists, or the tag otherwise.
     */
    private parseTag(tagRaw: string): string {
        if (this.language.properties.comments.docTagAliases.hasOwnProperty(tagRaw)) {
            return this.language.properties.comments.docTagAliases[tagRaw];
        }

        return tagRaw;
    }

    /**
     * @param tagRaw   A user-given documentation tag parameter.
     * @returns An alias for parameter if it exists, or the parameter otherwise.
     */
    private parseTagParameter(tag: string, parameter: string): string {
        if (this.language.properties.comments.docTagsWithParameters.hasOwnProperty(tag)) {
            return this.language.properties.comments.docTagsWithParameters[tag];
        }

        return parameter;
    }
}
