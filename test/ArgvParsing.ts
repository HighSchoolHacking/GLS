export interface ITestArguments {
    inclusions: ReadonlySet<string> | undefined;
    languages: ReadonlySet<string> | undefined;
}

/**
 * Parsers test names from argv.
 *
 * @param argv   Arguments from process.argv.
 * @returns Test names from argv preceded by "--command", if any.
 */
export const parseTestArguments = (argv: string[]): ITestArguments => {
    const inclusions = new Set<string>();
    const languages = new Set<string>();

    for (const arg of argv) {
        if (arg.substring(0, "--include=".length) === "--include=") {
            inclusions.add(arg.substring("--include=".length));
        } else if (arg.substring(0, "--language=".length) === "--language=") {
            languages.add(arg.substring("--language=".length));
        }
    }

    return {
        inclusions: inclusions.size === 0 ? undefined : inclusions,
        languages: languages.size === 0 ? undefined : languages,
    };
};
