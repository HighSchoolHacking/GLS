import { ClassMemberFunctionSyntax } from "./ClassMemberFunctionSyntax";
import { ClassMemberVariableSyntax } from "./ClassMemberVariableSyntax";

/**
 * Metadata on a language's class member variables and function syntax.
 */
export class ClassMemberSyntax {
    /**
     * Metadata on class member functions.
     */
    public functions: ClassMemberFunctionSyntax = new ClassMemberFunctionSyntax();

    /**
     * Metadata on class member variables.
     */
    public variables: ClassMemberVariableSyntax = new ClassMemberVariableSyntax();
}
