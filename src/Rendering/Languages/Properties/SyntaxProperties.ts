import { ArraySyntax } from "./Syntax/ArraySyntax";
import { BooleanSyntax } from "./Syntax/BooleanSyntax";
import { ClassSyntax } from "./Syntax/ClassSyntax";
import { CommentSyntax } from "./Syntax/CommentSyntax";
import { ConditionalSyntax } from "./Syntax/ConditionalSyntax";
import { DictionarySyntax } from "./Syntax/DictionarySyntax";
import { EnumSyntax } from "./Syntax/EnumSyntax";
import { ExceptionSyntax } from "./Syntax/ExceptionSyntax";
import { FileSyntax } from "./Syntax/FileSyntax";
import { FunctionSyntax } from "./Syntax/FunctionSyntax";
import { ImportSyntax } from "./Syntax/ImportSyntax";
import { InterfaceSyntax } from "./Syntax/InterfaceSyntax";
import { LambdaSyntax } from "./Syntax/LambdaSyntax";
import { ListSyntax } from "./Syntax/ListSyntax";
import { LoopSyntax } from "./Syntax/LoopSyntax";
import { MainSyntax } from "./Syntax/MainSyntax";
import { MathSyntax } from "./Syntax/MathSyntax";
import { NewSyntax } from "./Syntax/NewSyntax";
import { OperatorSyntax } from "./Syntax/OperatorSyntax";
import { ParameterSyntax } from "./Syntax/ParameterSyntax";
import { PrintingSyntax } from "./Syntax/PrintingSyntax";
import { SetSyntax } from "./Syntax/SetSyntax";
import { StandaloneFunctionSyntax } from "./Syntax/StandaloneFunctionSyntax";
import { StringSyntax } from "./Syntax/StringSyntax";
import { StyleSyntax } from "./Syntax/StyleSyntax";
import { UnsupportedSyntax } from "./Syntax/UnsupportedSyntax";
import { VariableSyntax } from "./Syntax/VariableSyntax";

/**
 * Metadata on a language's syntax.
 */
export class SyntaxProperties {
    /**
     * Metadata on arrays.
     */
    public arrays: ArraySyntax;

    /**
     * Metadata on booleans.
     */
    public booleans: BooleanSyntax;

    /**
     * Metadata on classes.
     */
    public classes: ClassSyntax;

    /**
     * Metadata on comments.
     */
    public comments: CommentSyntax;

    /**
     * Metadata on conditionals.
     */
    public conditionals: ConditionalSyntax;

    /**
     * Metadata on dictionaries.
     */
    public dictionaries: DictionarySyntax;

    /**
     * Metadata on enums.
     */
    public enums: EnumSyntax;

    /**
     * Metadata on exceptions.
     */
    public exceptions: ExceptionSyntax;

    /**
     * Metadata on file contents.
     */
    public files: FileSyntax;

    /**
     * Metadata on functions.
     */
    public functions: FunctionSyntax;

    /**
     * Metadata on imports.
     */
    public imports: ImportSyntax;

    /**
     * Metadata on interfaces.
     */
    public interfaces: InterfaceSyntax;

    /**
     * Metadata on lambdas.
     */
    public lambdas: LambdaSyntax;

    /**
     * Metadata on lists.
     */
    public lists: ListSyntax;

    /**
     * Metadata on loops.
     */
    public loops: LoopSyntax;

    /**
     * Metadata on main execution areas.
     */
    public main: MainSyntax;

    /**
     * Metadata on math.
     */
    public math: MathSyntax;

    /**
     * Metadata on new object instantiations.
     */
    public newProp: NewSyntax;

    /**
     * Metadata on operators.
     */
    public operators: OperatorSyntax;

    /**
     * Metadata on parameters.
     */
    public parameters: ParameterSyntax;

    /**
     * Metadata on printing.
     */
    public printing: PrintingSyntax;

    /**
     * Metadata on sets.
     */
    public sets: SetSyntax;

    /**
     * Metadata on sets.
     */
    public standaloneFunctions: StandaloneFunctionSyntax;

    /**
     * Metadata on strings.
     */
    public strings: StringSyntax;

    /**
     * Metadata on style.
     */
    public style: StyleSyntax;

    /**
     * Metadata on unsupported complaints.
     */
    public unsupported: UnsupportedSyntax;

    /**
     * Metadata on variables.
     */
    public variables: VariableSyntax;

    /**
     * Initializes a new instance of the LanguageSyntax class.
     */
    public constructor() {
        this.arrays = new ArraySyntax();
        this.booleans = new BooleanSyntax();
        this.classes = new ClassSyntax();
        this.comments = new CommentSyntax();
        this.conditionals = new ConditionalSyntax();
        this.dictionaries = new DictionarySyntax();
        this.enums = new EnumSyntax();
        this.exceptions = new ExceptionSyntax();
        this.files = new FileSyntax();
        this.functions = new FunctionSyntax();
        this.imports = new ImportSyntax();
        this.interfaces = new InterfaceSyntax();
        this.lambdas = new LambdaSyntax();
        this.lists = new ListSyntax();
        this.loops = new LoopSyntax();
        this.main = new MainSyntax();
        this.math = new MathSyntax();
        this.newProp = new NewSyntax();
        this.operators = new OperatorSyntax();
        this.parameters = new ParameterSyntax();
        this.printing = new PrintingSyntax();
        this.sets = new SetSyntax();
        this.standaloneFunctions = new StandaloneFunctionSyntax();
        this.strings = new StringSyntax();
        this.style = new StyleSyntax();
        this.unsupported = new UnsupportedSyntax();
        this.variables = new VariableSyntax();
    }
}
