import { StringToFloatStartConversionType } from "../../Commands/IfStringToFloatStartCommand";
import { Import } from "../Imports/Import";

/**
 * Metadata on a language's string-to-float conversions.
 */
export class StringToFloatProperties {
    /**
     * How the language attempts to convert a strings to floats.
     */
    public conversionType: StringToFloatStartConversionType;

    /**
     * Initial value for each variable, if not "".
     */
    public initialVariableValues: string;

    /**
     * Text following variable initialization.
     */
    public initializeVariablesEnd: string;

    /**
     * Text before each variable is attempted to be converted.
     */
    public perVariableConversionStartLeft: string;

    /**
     * Text between variable conversion attempts.
     */
    public perVariableConversionStartMiddle: string;

    /**
     * Text after each variable is attempted to be converted.
     */
    public perVariableConversionStartRight: string;

    /**
     * Any imports required to convert strings to floats.
     */
    public requiredImports: Import[];

    /**
     * How each variable is checked for validity.
     */
    public validationBlockComparison: string;

    /**
     * Text before validating float variables.
     */
    public validationBlockLeft: string;

    /**
     * Text between each float variable validation.
     */
    public validationBlockMiddle: string;

    /**
     * Text after valiating float variables.
     */
    public validationBlockRight: string;
}
