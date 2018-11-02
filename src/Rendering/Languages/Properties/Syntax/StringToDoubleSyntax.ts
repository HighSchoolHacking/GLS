import { StringToDoubleStartConversionType } from "../../../Commands/IfStringToDoubleStartCommand";
import { Import } from "../../Imports/Import";

/**
 * Metadata on a language's string-to-double conversion syntax.
 */
export class StringToDoubleSyntax {
    /**
     * How the language attempts to convert a strings to doubles.
     */
    public conversionType: StringToDoubleStartConversionType;

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
     * Any imports required to convert strings to doubles.
     */
    public requiredImports: Import[];

    /**
     * How each variable is checked for validity.
     */
    public validationBlockComparison: string;

    /**
     * Text before validating double variables.
     */
    public validationBlockLeft: string;

    /**
     * Text between each double variable validation.
     */
    public validationBlockMiddle: string;

    /**
     * Text after valiating double variables.
     */
    public validationBlockRight: string;
}
