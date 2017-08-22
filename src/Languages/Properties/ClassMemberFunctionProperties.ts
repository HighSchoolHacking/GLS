import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's class member functions.
 */
export class ClassMemberFunctionProperties {
    /**
     * Decorator for public member functions.
     */
    public public: string;

    /**
     * Casing modifier for public member functions.
     */
    public publicCase: CaseStyle;

    /**
     * Decorator for protected member functions.
     */
    public protected: string;

    /**
     * Casing modifier for protected member functions.
     */
    public protectedCase: CaseStyle;

    /**
     * Decorator for private member functions.
     */
    public private: string;

    /**
     * Casing modifier for private member functions.
     */
    public privateCase: CaseStyle;
}
