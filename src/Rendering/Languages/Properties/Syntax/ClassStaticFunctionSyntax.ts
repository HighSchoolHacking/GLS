import { CaseStyle } from "../../Casing/CaseStyle";

/**
 * Metadata on a language's class static function syntax.
 */
export class ClassStaticFunctionSyntax {
    /**
     * Label for static functions.
     */
    public label: string;

    /**
     * Decorator for private static functions.
     */
    public private: string;

    /**
     * Casing modifier for private static functions.
     */
    public privateCase: CaseStyle;

    /**
     * Prefix before private static function names.
     */
    public privatePrefix: string;

    /**
     * Decorator for protected static functions.
     */
    public protected: string;

    /**
     * Casing modifier for protected static functions.
     */
    public protectedCase: CaseStyle;

    /**
     * Prefix before protected static function names.
     */
    public protectedPrefix: string;

    /**
     * Decorator for public static functions.
     */
    public public: string;

    /**
     * Casing modifier for public static functions.
     */
    public publicCase: CaseStyle;

    /**
     * Prefix before public static function names.
     */
    public publicPrefix: string;
}
