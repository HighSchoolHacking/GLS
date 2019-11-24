import { Import } from "../../Imports/Import";

/**
 * Metadata on a language's enum syntax.
 */
export class EnumSyntax {
    /**
     * Suffix after a member and value declaration.
     */
    public declareCommaRight: string;

    /**
     * Line to declare an exported enum, with {0} for the enum's name.
     */
    public declareExternal: string;

    /**
     * Line to declare an internal (non-exported) enum, with {0} for the enum's name.
     */
    public declareInternal: string;

    /**
     * End line of an enum declaration.
     */
    public declareLastRight: string;

    /**
     * Start of a line declaring a member.
     */
    public declareMemberStart: string;

    /**
     * Start of a line declaring an enum member's value.
     */
    public declareValueLeft: string;

    /**
     * End of a line declaring an enum member's value.
     */
    public declareValueRight: string;

    /**
     * Whether members should explicitly declare their values.
     */
    public declareValues: boolean;

    /**
     * Whether enums act as a regular object.
     */
    public isObject: boolean;

    /**
     * Imports required to declare enums.
     */
    public requiredImports: Import[];

    /**
     * Start of a line retrieving an enum value.
     */
    public valueLeft: string;

    /**
     * Middle of a line retrieving enum value.
     */
    public valueMiddle: string;

    /**
     * End of a line retrieving enum value.
     */
    public valueRight: string;
}
