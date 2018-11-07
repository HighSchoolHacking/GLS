export interface ITestArguments {
    /**
     * Whether to overwrite baselines with generated contents instead of asserting equality.
     */
    accept: boolean;

    inclusions: ReadonlySet<string> | undefined;
    languages: ReadonlySet<string> | undefined;
}

/**
 * Parsers test arguments from argv.
 *
 * @param argv   Arguments from process.argv.
 * @returns Test arguments from argv.
 */
export const parseTestArguments = (argv: string[]): ITestArguments => {
    const inclusions = new Set<string>();
    const languages = new Set<string>();
    let accept = false;

    for (const arg of argv) {
        if (arg === "--accept") {
            accept = true;
            continue;
        }

        if (arg.substring(0, "--include=".length) === "--include=") {
            inclusions.add(arg.substring("--include=".length));
            continue;
        }

        if (arg.substring(0, "--language=".length) === "--language=") {
            languages.add(arg.substring("--language=".length));
        }
    }

    return {
        accept,
        inclusions: inclusions.size === 0 ? undefined : inclusions,
        languages: languages.size === 0 ? undefined : languages,
    };
};
