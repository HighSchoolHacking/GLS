import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's class member variables.
 */
export class ClassMemberVariableProperties {
    /**
     * Decorator for public members.
     */
    public public: string;

    /**
     * Casing modifier for public member variables.
     */
    public publicCase: CaseStyle;

    /**
     * Prefix for public members.
     */
    public publicPrefix: string;

    /**
     * Decorator for protected members.
     */
    public protected: string;

    /**
     * Casing modifier for protected member variables.
     */
    public protectedCase: CaseStyle;

    /**
     * Prefix for protected members.
     */
    public protectedPrefix: string;

    /**
     * Decorator for private members.
     */
    public private: string;

    /**
     * Casing modifier for private member variables.
     */
    public privateCase: CaseStyle;

    /**
     * Prefix for private members.
     */
    public privatePrefix: string;

    /**
     * Whether member variables shouldn't be declared.
     */
    public skipMemberVariables: boolean;
}
