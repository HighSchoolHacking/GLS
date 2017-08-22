import { ClassMemberFunctionProperties } from "./ClassMemberFunctionProperties";
import { ClassMemberVariableProperties } from "./ClassMemberVariableProperties";

/**
 * Metadata on a language's class member variables.
 */
export class ClassMemberProperties {
    /**
     * Metadata on class member functions.
     */
    public functions: ClassMemberFunctionProperties = new ClassMemberFunctionProperties();

    /**
     * Metadata on class member variables.
     */
    public variables: ClassMemberVariableProperties = new ClassMemberVariableProperties();
}
