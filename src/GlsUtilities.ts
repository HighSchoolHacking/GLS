/**
 * Near-native utilities that should eventually be added to language support.
 */
export class GlsUtilities {
    /**
     * Equivalent to the proposed string.replaceAll.
     *
     * @remarks Once replaceAll is ratified in TC39, we'll be able to use it.
     * @see https://github.com/general-language-syntax/GLS/issues/448
     * @see https://github.com/tc39/proposal-string-replace-all
     */
    public static stringReplaceAll(haystack: string, needle: string, replacement: string): string {
        let startIndex = 0;

        while (true) {
            const indexOf = haystack.indexOf(needle, startIndex);
            if (indexOf === -1) {
                return haystack;
            }

            haystack = haystack.substring(0, indexOf) + replacement + haystack.substring(indexOf + needle.length);
            startIndex = indexOf + replacement.length;
        }
    }
}
