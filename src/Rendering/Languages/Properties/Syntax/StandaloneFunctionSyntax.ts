import { ClassConstructorSyntax } from "./ClassConstructorSyntax";
import { ClassExportSyntax } from "./ClassExportSyntax";
import { ClassGenericSyntax } from "./ClassGenericSyntax";
import { ClassMemberSyntax } from "./ClassMemberSyntax";
import { ClassStaticSyntax } from "./ClassStaticSyntax";
import { NativeCallSyntax } from "./NativeCallSyntax";

/**
 * Metadata on a language's standalone function syntax.
 */
export class StandaloneFunctionSyntax {
    /**
     * Whether static classes should be declared with the static keyword.
     */
    public includeStaticKeyword: boolean;

    /**
     * Whether standalone functions must be members of a static class.
     */
    public withinStaticClass: boolean;
}
