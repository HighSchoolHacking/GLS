import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's class member functions.
 */
export class ClassMemberFunctionProperties {
    /**
     * Decorator for abstract function declarations.
     */
    public abstractDeclaration: string;

    /**
     * Decorator for private member functions.
     */
    public private: string;

    /**
     * Casing modifier for private member functions.
     */
    public privateCase: CaseStyle;

    /**
     * Prefix before private member function names.
     */
    public privatePrefix: string;

    /**
     * Decorator for protected member functions.
     */
    public protected: string;

    /**
     * Casing modifier for protected member functions.
     */
    public protectedCase: CaseStyle;

    /**
     * Prefix before protected member function names.
     */
    public protectedPrefix: string;

    /**
     * Decorator for public member functions.
     */
    public public: string;

    /**
     * Casing modifier for public member functions.
     */
    public publicCase: CaseStyle;

    /**
     * Prefix before public member function names.
     */
    public publicPrefix: string;
}
