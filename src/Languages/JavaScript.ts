import { CLikeLanguage } from "./CLikeLanguage";
import { CaseStyle } from "./Casing/CaseStyle";
import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
import { ClassProperties } from "./Properties/ClassProperties";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties";
import { CommentProperties } from "./Properties/CommentProperties";
import { ConditionalProperties } from "./Properties/ConditionalProperties";
import { DictionaryProperties } from "./Properties/DictionaryProperties";
import { EnumProperties } from "./Properties/EnumProperties";
import { ExceptionProperties } from "./Properties/ExceptionProperties";
import { FunctionProperties } from "./Properties/FunctionProperties";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ImportProperties } from "./Properties/ImportProperties";
import { LambdaProperties } from "./Properties/LambdaProperties";
import { ListProperties } from "./Properties/ListProperties";
import { LoopProperties } from "./Properties/LoopProperties";
import { MathProperties } from "./Properties/MathProperties";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties";
import { NumberProperties } from "./Properties/NumberProperties";
import { OperatorProperties } from "./Properties/OperatorProperties";
import { OutputProperties } from "./Properties/OutputProperties";
import { ParameterProperties } from "./Properties/ParameterProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StyleProperties } from "./Properties/StyleProperties";
import { VariableProperties } from "./Properties/VariableProperties";

/**
 * A summary of information for the JavaScript language.
 */
export class JavaScript extends CLikeLanguage {
    /**
     * Generates metadata on arrays.
     * 
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArrayProperties(arrays: ArrayProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on booleans.
     * 
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanProperties(booleans: BooleanProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on classes.
     * 
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);
        // Your code here
    }

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);
        // Your code here
    }

    /**
     * Generates metadata on comments.
     * 
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentProperties(comments: CommentProperties): void {
        super.generateCommentProperties(comments);
        // Your code here
    }

    /**
     * Generates metadata on conditionals.
     * 
     * @param conditionals   A property container for metadata on conditionals.
     */
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
        super.generateConditionalProperties(conditionals);
        // Your code here
    }

    /**
     * Generates metadata on dictionaries.
     * 
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on enums.
     * 
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);
        // Your code here
    }

    /**
     * Generates metadata on exceptions.
     * 
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        super.generateExceptionProperties(exceptions);
        // Your code here
    }

    /**
     * Generates metadata on functions.
     * 
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);
        // Your code here
    }

    /**
     * Generates general metadata.
     * 
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on lambdas.
     * 
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        super.generateLambdaProperties(lambdas);
        // Your code here
    }

    /**
     * Generates metadata on lists.
     * 
     * @param lists   A property container for metadata on lists.
     */
    protected generateListProperties(lists: ListProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on loops.
     * 
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopProperties(loops: LoopProperties): void {
        super.generateLoopProperties(loops);
        // Your code here
    }

    /**
     * Generates metadata on math.
     * 
     * @param math   A property container for metadata on math.
     */
    protected generateMathProperties(math: MathProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on numbers.
     * 
     * @param numbers   A property container for metadata on numbers.
     */
    protected generateNumberProperties(numbers: NumberProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on operators.
     * 
     * @param operators   A property container for metadata on operators.
     */
    protected generateOperatorProperties(operators: OperatorProperties): void {
        super.generateOperatorProperties(operators);
        // Your code here
    }

    /**
     * Generates metadata on output.
     * 
     * @param output   A property container for metadata on output.
     */
    protected generateOutputProperties(output: OutputProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on parameters
     * 
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterProperties(parameters: ParameterProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on style.
     * 
     * @param style   The property container for metadata on style. 
     */
    protected generateStyleProperties(style: StyleProperties): void {
        super.generateStyleProperties(style);
        // Your code here
    }

    /**
     * Generates metadata on strings.
     * 
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);
        // Your code here
    }

    /**
     * Generates metadata on string formatting.
     * 
     * @param strings   A property container for metadata on string formatting.
     */
    public generateStringFormatProperties(formatting: StringFormatProperties): void {
        // Your code here
    }

    /**
     * Generates metadata on variables.
     * 
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);
        // Your code here
    }
}
