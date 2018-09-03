import { ClassConstructorProperties } from "./ClassConstructorProperties";
import { ClassExportProperties } from "./ClassExportProperties";
import { ClassGenericProperties } from "./ClassGenericProperties";
import { ClassMemberProperties } from "./ClassMemberProperties";
import { ClassStaticProperties } from "./ClassStaticProperties";
import { NativeCallProperties } from "./NativeCallProperties";

/**
 * Metadata on a language's standalone functions.
 */
export class StandaloneFunctionProperties {
    /**
     * Whether standalone functions must be members of a static class.
     */
    public withinStaticClass: boolean;
}
