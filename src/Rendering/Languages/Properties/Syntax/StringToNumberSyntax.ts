import { Import } from "../../Imports/Import";

/**
 * How a language attempts to convert strings to doubles.
 */
export enum StringToNumberStartConversionType {
    /**
     * Convert strings into double variables and validate the results.
     */
    ConvertAndValidate = "ConvertAndValidate",

    /**
     * Declare double variables, convert strings into them, and validate the results.
     */
    PredeclareConvertAndValidate = "PredeclareConvertAndValidate",

    /**
     * Directly validate calls to double conversions inline.
     */
    ValidateDirectly = "ValidateDirectly",
}

/**
 * Metadata on a language's string-to-number conversion syntax.
 */
export class StringToNumberSyntax {
    /**
     * How the language attempts to convert a strings to a number type.
     */
    public conversionType: StringToNumberStartConversionType;

    /**
     * Initial value for each variable, if not "".
     */
    public initialVariableValues: string;

    /**
     * Text following variable initialization.
     */
    public initializeVariablesEnd: string;

    /**
     * Text for each variable's conversion attempt.
     */
    public perVariableConversion: string;

    /**
     * Text between multiple variables' conversion attempts.
     */
    public perVariableConversionBetween: string;

    /**
     * Any imports required to convert strings to a number type.
     */
    public requiredImports: Import[];

    /**
     * How each variable is checked for validity.
     */
    public validationBlockComparison: string;

    /**
     * Text before validating number variables.
     */
    public validationBlockLeft: string;

    /**
     * Text between each number variable validation.
     */
    public validationBlockMiddle: string;

    /**
     * Text after validating number variables.
     */
    public validationBlockRight: string;
}
