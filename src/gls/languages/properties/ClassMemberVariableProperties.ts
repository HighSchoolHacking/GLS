import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's class member variables.
 */
export class ClassMemberVariableProperties {
    /**
     * Decorator for public members.
     */
    public: string;

    /**
     * Casing modifier for public member variables.
     */
    publicCase: CaseStyle;

    /**
     * Prefix for public members.
     */
    publicPrefix: string;

    /**
     * Decorator for protected members.
     */
    protected: string;

    /**
     * Casing modifier for protected member variables.
     */
    protectedCase: CaseStyle;

    /**
     * Prefix for protected members.
     */
    protectedPrefix: string;

    /**
     * Decorator for private members.
     */
    private: string;

    /**
     * Casing modifier for private member variables.
     */
    privateCase: CaseStyle;

    /**
     * Prefix for private members.
     */
    privatePrefix: string;

    /**
     * Whether member variables shouldn't be declared.
     */
    skipMemberVariables: boolean;
}
