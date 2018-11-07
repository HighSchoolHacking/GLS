import { CommandResult } from "./CommandResult";

/**
 * Adds a portion of raw syntax that may contain endlines.
 *
 * @param lines   In-progress line(s) of code in the rendering language.
 * @param extra   Raw syntax to add to the lines.
 * @param indentation   How much indentation the last line should be.
 */
export const addLineEnder = (lines: CommandResult[], extra: string, indentation: number): void => {
    let currentLine: CommandResult = lines[lines.length - 1];
    let endlineIndex: number = extra.indexOf("\n");

    if (endlineIndex === -1) {
        currentLine.text += extra;
        currentLine.indentation = indentation;
        return;
    }

    let currentIndex = 0;

    while (endlineIndex !== -1) {
        const component: string = extra.substring(currentIndex, endlineIndex);

        currentLine.text += component;
        currentIndex = endlineIndex;

        currentLine = new CommandResult("", 0);
        lines.push(currentLine);

        currentIndex += 1;
        endlineIndex = extra.indexOf("\n", currentIndex);
    }

    if (currentIndex !== -1) {
        currentLine.text = extra.substring(currentIndex);
    }

    lines[lines.length - 1].indentation = indentation;
};
