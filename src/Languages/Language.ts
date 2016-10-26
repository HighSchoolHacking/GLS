import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
import { ClassProperties } from "./Properties/ClassProperties";
import { ClassGenericProperties } from "./Properties/ClassGenericProperties";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties";
import { CommentProperties } from "./Properties/CommentProperties";
import { ConditionalProperties } from "./Properties/ConditionalProperties";
import { DictionaryProperties } from "./Properties/DictionaryProperties";
import { EnumProperties } from "./Properties/EnumProperties";
import { ExceptionProperties } from "./Properties/ExceptionProperties";
import { FunctionProperties } from "./Properties/FunctionProperties";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ImportProperties } from "./Properties/ImportProperties";
import { InterfaceProperties } from "./Properties/InterfaceProperties";
import { LambdaProperties } from "./Properties/LambdaProperties";
import { LanguageProperties } from "./Properties/LanguageProperties";
import { ListProperties } from "./Properties/ListProperties";
import { LoopProperties } from "./Properties/LoopProperties";
import { MathProperties } from "./Properties/MathProperties";
import { NumberProperties } from "./Properties/NumberProperties";
import { OperatorProperties } from "./Properties/OperatorProperties";
import { OutputProperties } from "./Properties/OutputProperties";
import { ParameterProperties } from "./Properties/ParameterProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StyleProperties } from "./Properties/StyleProperties";
import { VariableProperties } from "./Properties/VariableProperties";

/**
 * A summary of information for a single language.
 */
export abstract class Language {
    /**
     * Metadata about the language syntax.
     */
    public properties: LanguageProperties;

    /**
     * Initializes a new instance of the Language class.
     */
    constructor() {
        this.properties = new LanguageProperties();
        this.generateArrayProperties(this.properties.arrays);
        this.generateBooleanProperties(this.properties.booleans);
        this.generateClassProperties(this.properties.classes);
        this.generateClassGenericProperties(this.properties.classes.generics);
        this.generateClassMemberVariableProperties(this.properties.classes.members.variables);
        this.generateCommentProperties(this.properties.comments);
        this.generateConditionalProperties(this.properties.conditionals);
        this.generateDictionaryProperties(this.properties.dictionaries);
        this.generateEnumProperties(this.properties.enums);
        this.generateExceptionProperties(this.properties.exceptions);
        this.generateFunctionProperties(this.properties.functions);
        this.generateGeneralProperties(this.properties.general);
        this.generateImportProperties(this.properties.imports);
        this.generateInterfaceProperties(this.properties.interfaces);
        this.generateLambdaProperties(this.properties.lambdas);
        this.generateListProperties(this.properties.lists);
        this.generateLoopProperties(this.properties.loops);
        this.generateMathProperties(this.properties.math);
        this.generateNumberProperties(this.properties.numbers);
        this.generateOperatorProperties(this.properties.operators);
        this.generateOutputProperties(this.properties.output);
        this.generateParameterProperties(this.properties.parameters);
        this.generateStringProperties(this.properties.strings);
        this.generateStringFormatProperties(this.properties.strings.formatting);
        this.generateStyleProperties(this.properties.style);
        this.generateVariableProperties(this.properties.variables);

        this.properties.operators.generateAliases();
    }

    /**
     * Generates metadata on arrays.
     * 
     * @param arrays   A property container for metadata on arrays.
     */
    protected abstract generateArrayProperties(arrays: ArrayProperties): void;

    /**
     * Generates metadata on booleans.
     * 
     * @param booleans   A property container for metadata on booleans.
     */
    protected abstract generateBooleanProperties(booleans: BooleanProperties): void;

    /**
     * Generates metadata on classes.
     * 
     * @param classes   A property container for metadata on classes.
     */
    protected abstract generateClassProperties(classes: ClassProperties): void;

    /**
     * Generates metadata on class generics.
     * 
     * @param members   A property container for metadata on class generics.
     */
    protected abstract generateClassGenericProperties(generics: ClassGenericProperties): void;

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected abstract generateClassMemberVariableProperties(members: ClassMemberVariableProperties): void;

    /**
     * Generates metadata on comments.
     * 
     * @param comments   A property container for metadata on comments.
     */
    protected abstract generateCommentProperties(comments: CommentProperties): void;

    /**
     * Generates metadata on conditionals.
     * 
     * @param conditionals   A property container for metadata on conditionals.
     */
    protected abstract generateConditionalProperties(conditionals: ConditionalProperties): void;

    /**
     * Generates metadata on dictionaries.
     * 
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected abstract generateDictionaryProperties(dictionaries: DictionaryProperties): void;

    /**
     * Generates metadata on enums.
     * 
     * @param enums   A property container for metadata on enums.
     */
    protected abstract generateEnumProperties(enums: EnumProperties): void;

    /**
     * Generates metadata on exceptions.
     * 
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected abstract generateExceptionProperties(exceptions: ExceptionProperties): void;

    /**
     * Generates metadata on functions.
     * 
     * @param functions   A property container for metadata on functions.
     */
    protected abstract generateFunctionProperties(functions: FunctionProperties): void;

    /**
     * Fills out metadata on general properties.
     */
    protected abstract generateGeneralProperties(general: GeneralProperties): void;

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected abstract generateImportProperties(lambdas: ImportProperties): void;

    /**
     * Generates metadata on interfaces.
     * 
     * @param interfaces   A property container for metadata on interfaces.
     */
    protected abstract generateInterfaceProperties(lambdas: InterfaceProperties): void;

    /**
     * Generates metadata on lambdas.
     * 
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected abstract generateLambdaProperties(lambdas: LambdaProperties): void;

    /**
     * Fills out metadata on lists.
     */
    protected abstract generateListProperties(lists: ListProperties): void;

    /**
     * Generates metadata on loops.
     * 
     * @param loops   A property container for metadata on loops.
     */
    protected abstract generateLoopProperties(loops: LoopProperties): void;

    /**
     * Generates metadata on math.
     * 
     * @param math   A property container for metadata on math.
     */
    protected abstract generateMathProperties(math: MathProperties): void;

    /**
     * Generates metadata on numbers.
     * 
     * @param numbers   A property container for metadata on numbers.
     */
    protected abstract generateNumberProperties(numbers: NumberProperties): void;

    /**
     * Generates metadata on operators.
     * 
     * @param operators   A property container for metadata on operators.
     */
    protected abstract generateOperatorProperties(operators: OperatorProperties): void;

    /**
     * Generates metadata on output.
     * 
     * @param output   A property container for metadata on output.
     */
    protected abstract generateOutputProperties(operators: OutputProperties): void;

    /**
     * Generates metadata on parameters.
     * 
     * @param parameters    A property container for metadata on parameters.
     */
    protected abstract generateParameterProperties(parameters: ParameterProperties): void;
    /**
     * Generates metadata on strings.
     * 
     * @param strings   A property container for metadata on strings.
     */
    protected abstract generateStringProperties(strings: StringProperties): void;

    /**
     * Generates metadata on string formatting.
     * 
     * @param strings   A property container for metadata on string formatting.
     */
    protected abstract generateStringFormatProperties(formatting: StringFormatProperties): void;

    /**
     * Generates metadata on style.
     * 
     * @param style   A property container for metadata on style.
     */
    protected abstract generateStyleProperties(style: StyleProperties): void;

    /**
     * Generates metadata on variables.
     * 
     * @param variables   A property container for metadata on variables.
     */
    protected abstract generateVariableProperties(variables: VariableProperties): void;
}
