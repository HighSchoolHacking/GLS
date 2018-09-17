/**
 * Metadata on a language's class constructor syntax.
 */
export class ClassConstructorSyntax {
    /**
     * The keyword used for constructors, if not the class name.
     */
    public keyword: string;

    /**
     * Decorator for private constructors.
     */
    public private: string;

    /**
     * Decorator for protected constructors.
     */
    public protected: string;

    /**
     * Decorator for public constructors.
     */
    public public: string;

    /**
     * Whether constructors take in the class instance as a first parameter.
     */
    public takeThis: boolean;

    /**
     * Whether constructors are named with a keyword, rather than the class name.
     */
    public useKeyword: boolean;
}
