import { ArrayProperties } from "./ArrayProperties";
import { BooleanProperties } from "./BooleanProperties";
import { ClassProperties } from "./ClassProperties";
import { CommentProperties } from "./CommentProperties";
import { ConditionalProperties } from "./ConditionalProperties";
import { DictionaryProperties } from "./DictionaryProperties";
import { EnumProperties } from "./EnumProperties";
import { ExceptionProperties } from "./ExceptionProperties";
import { FunctionProperties } from "./FunctionProperties";
import { GeneralProperties } from "./GeneralProperties";
import { ImportProperties } from "./ImportProperties";
import { InterfaceProperties } from "./InterfaceProperties";
import { LambdaProperties } from "./LambdaProperties";
import { ListProperties } from "./ListProperties";
import { LoopProperties } from "./LoopProperties";
import { MathProperties } from "./MathProperties";
import { NumberProperties } from "./NumberProperties";
import { OutputProperties } from "./OutputProperties";
import { OperatorProperties } from "./OperatorProperties";
import { ParameterProperties } from "./ParameterProperties";
import { StringProperties } from "./StringProperties";
import { StyleProperties } from "./StyleProperties";
import { VariableProperties } from "./VariableProperties";

/**
 * Metadata on a language's syntax.
 */
export class LanguageProperties {
    /**
     * Metadata on arrays.
     */
    public arrays: ArrayProperties;

    /**
     * Metadata on booleans.
     */
    public booleans: BooleanProperties;

    /**
     * Metadata on classes.
     */
    public classes: ClassProperties;

    /**
     * Metadata on comments.
     */
    public comments: CommentProperties;

    /**
     * Metadata on conditionals.
     */
    public conditionals: ConditionalProperties;

    /**
     * Metadata on dictionaries.
     */
    public dictionaries: DictionaryProperties;

    /**
     * Metadata on enums.
     */
    public enums: EnumProperties;

    /**
     * Metadata on exceptions.
     */
    public exceptions: ExceptionProperties;

    /**
     * Metadata on functions.
     */
    public functions: FunctionProperties;

    /**
     * Metadata on general properties.
     */
    public general: GeneralProperties;

    /**
     * Metadata on imports.
     */
    public imports: ImportProperties;

    /**
     * Metadata on interfaces.
     */
    public interfaces: InterfaceProperties;

    /**
     * Metadata on lambdas.
     */
    public lambdas: LambdaProperties;

    /**
     * Metadata on lists.
     */
    public lists: ListProperties;

    /**
     * Metadata on loops.
     */
    public loops: LoopProperties;

    /**
     * Metadata on math.
     */
    public math: MathProperties;

    /**
     * Metadata on numbers.
     */
    public numbers: NumberProperties;

    /**
     * Metadata on operators.
     */
    public operators: OperatorProperties;

    /**
     * Metadata on output.
     */
    public output: OutputProperties;

    /**
     * Metadata on parameters.
     */
    public parameters: ParameterProperties;

    /**
     * Metadata on strings.
     */
    public strings: StringProperties;

    /**
     * Metadata on style.
     */
    public style: StyleProperties;

    /**
     * Metadata on variables.
     */
    public variables: VariableProperties;

    /**
     * Initializes a new instance of the LanguageProperties class.
     */
    constructor() {
        this.arrays = new ArrayProperties();
        this.booleans = new BooleanProperties();
        this.classes = new ClassProperties();
        this.comments = new CommentProperties();
        this.conditionals = new ConditionalProperties();
        this.dictionaries = new DictionaryProperties();
        this.enums = new EnumProperties();
        this.exceptions = new ExceptionProperties();
        this.functions = new FunctionProperties();
        this.general = new GeneralProperties();
        this.imports = new ImportProperties();
        this.interfaces = new InterfaceProperties();
        this.lambdas = new LambdaProperties();
        this.lists = new ListProperties();
        this.loops = new LoopProperties();
        this.math = new MathProperties();
        this.numbers = new NumberProperties();
        this.operators = new OperatorProperties();
        this.output = new OutputProperties();
        this.parameters = new ParameterProperties();
        this.strings = new StringProperties();
        this.style = new StyleProperties();
        this.variables = new VariableProperties();
    }
}
