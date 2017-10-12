/**
 * Static names of known keywords.
 */
export class KeywordNames {
    /**
     * Name key for the "abstract" keyword.
     */
    public static Abstract = "abstract";

    /**
     * Name key for the "export" keyword.
     */
    public static Export = "export";

    /**
     * Name key for the "extends" keyword.
     */
    public static Extends = "extends";

    /**
     * Name key for the "implements" keyword.
     */
    public static Implements = "implements";

    /**
     * Name key for the "private" keyword.
     */
    public static Private = "private";

    /**
     * Name key for the "protected" keyword.
     */
    public static Protected = "protected";

    /**
     * Name key for the "public" keyword.
     */
    public static Public = "public";

    /**
     * Name keys for publicity keywords.
     */
    public static Privacies: string[] = [
        KeywordNames.Public,
        KeywordNames.Protected,
        KeywordNames.Private
    ];

    /**
     * Name keys for abstract-compatiblepublicity keywords.
     */
    public static AbstractPrivacies: string[] = [
        KeywordNames.Public,
        KeywordNames.Protected
    ];

    /**
     * Name key for the "throws" keyword.
     */
    public static Throws = "throws";
}
