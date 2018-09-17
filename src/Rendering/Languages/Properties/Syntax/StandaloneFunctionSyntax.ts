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
     * Whether standalone functions must be members of a static class.
     */
    public withinStaticClass: boolean;
}
