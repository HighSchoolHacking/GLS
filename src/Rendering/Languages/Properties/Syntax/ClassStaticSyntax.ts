import { ClassStaticFunctionSyntax } from "./ClassStaticFunctionSyntax";
import { ClassStaticVariableSyntax } from "./ClassStaticVariableSyntax";

/**
 * Metadata on a language's class static variable and function syntax.
 */
export class ClassStaticSyntax {
    /**
     * Metadata on class member functions.
     */
    public functions: ClassStaticFunctionSyntax = new ClassStaticFunctionSyntax();

    /**
     * Whether the static label should come before its publicity type.
     */
    public labelBeforePublicity: boolean;

    /**
     * Metadata on class member variables.
     */
    public variables: ClassStaticVariableSyntax = new ClassStaticVariableSyntax();
}
