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
import { InterfaceProperties } from "./Properties/InterfaceProperties";
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
        arrays.className = "Array";
        arrays.initializeAsNew = false;
        arrays.initializeViaStatic = true;
        arrays.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);
    }

    /**
     * Generates metadata on booleans.
     * 
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanProperties(booleans: BooleanProperties): void {
        booleans.className = "";
    }

    /**
     * Generates metadata on classes.
     * 
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);

        classes.aliases = {
            "dictionary": "object",
            "double": "number",
            "float": "number",
            "int": "number"
        };
        classes.constructorKeyword = "constructor";
        classes.constructorUsesKeyword = true;
        classes.declareExtendsLeft = " extends ";
        classes.declareImplementsLeft = " implements ";
        classes.declareStartRight = " {";
        classes.superConstructor = "super";
        classes.generics.used = false;
    }

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

        variables.protectedCase = CaseStyle.CamelCase;
        variables.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on comments.
     * 
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentProperties(comments: CommentProperties): void {
        super.generateCommentProperties(comments);

        comments.docEnd = " */";
        comments.docLineEnd = "";
        comments.docLineStart = " * ";
        comments.docTagAliases = {
            "note": "remarks",
            "parameter": "param",
            "returns": "returns",
            "summary": "",
            "todo": "todo"
        };
        comments.docTagsWithParameters = {
            "summary": "\0",
            "parameter": ""
        };
        comments.docTagEnd = " ";
        comments.docTagSpaceAfter = "  ";
        comments.docTagStart = "@";
        comments.docStart = "/**";
    }

    /**
     * Generates metadata on conditionals.
     * 
     * @param conditionals   A property container for metadata on conditionals.
     */
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
        super.generateConditionalProperties(conditionals);

        conditionals.continueLeft = "} ";
        conditionals.continueRight = " {";
        conditionals.startRight = ") {";
    }

    /**
     * Generates metadata on dictionaries.
     * 
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        dictionaries.className = "Object";
        dictionaries.containsKey = new NativeCallProperties(
            "hasOwnProperty",
            NativeCallScope.Member,
            NativeCallType.Function);
        dictionaries.keys = new NativeCallProperties(
            "Object.keys",
            NativeCallScope.Static,
            NativeCallType.Function);
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = ": ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "{";
    }

    /**
     * Generates metadata on enums.
     * 
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);

        enums.declareStartLeft = "let ";
        enums.declareStartRight = " = {";
        enums.declareValueLeft = ": ";
        enums.declareLastRight = "";
        enums.isObject = true;
    }

    /**
     * Generates metadata on exceptions.
     * 
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        super.generateExceptionProperties(exceptions);

        exceptions.className = "Error";

        exceptions.requiresExceptionType = false;
    }

    /**
     * Generates metadata on functions.
     * 
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);
        functions.defineStartLeft = "function ";
        functions.defineStartRight = " {";
        functions.explicitReturns = false;
    }

    /**
     * Generates general metadata.
     * 
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.extension = ".js";
        general.name = "JavaScript";
    }

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.FileSystem;
        imports.explicit = true;
        imports.itemsBeforePackage = true;
        imports.left = "import { ";
        imports.middle = " } from \"";
        imports.right = "\";";
    }

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected generateInterfaceProperties(interfaces: InterfaceProperties): void {
        interfaces.supported = false;
    }

    /**
     * Generates metadata on lambdas.
     * 
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        super.generateLambdaProperties(lambdas);
         lambdas.functionMiddle = ") => ";
    }

    /**
     * Generates metadata on lists.
     * 
     * @param lists   A property container for metadata on lists.
     */
    protected generateListProperties(lists: ListProperties): void {
        lists.asArray = true;
        lists.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);
        lists.pop = new NativeCallProperties(
            "pop",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.push = new NativeCallProperties(
            "push",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on loops.
     * 
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopProperties(loops: LoopProperties): void {
        super.generateLoopProperties(loops);

        loops.foreach = "for";
        loops.forEachGetKeys = "";
        loops.forEachGetPairs = "";
        loops.forEachMiddle = " in ";
        loops.forEachPairsAsKeys = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "for";
        loops.forEachStartItteration = " (";
        loops.forEachStartSeparator = " of ";
        loops.forEachStartRight = ") {";
    }

    /**
     * Generates metadata on math.
     * 
     * @param math   A property container for metadata on math.
     */
    protected generateMathProperties(math: MathProperties): void {
        math.absolute = new NativeCallProperties(
            "Math.abs",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.floor = new NativeCallProperties(
            "Math.floor",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.requiredImports = {};
        math.mathName = "Math";
    }

    /**
     * Generates metadata on numbers.
     * 
     * @param numbers   A property container for metadata on numbers.
     */
    protected generateNumberProperties(numbers: NumberProperties): void {
        numbers.className = "Number";
    }

    /**
     * Generates metadata on operators.
     * 
     * @param operators   A property container for metadata on operators.
     */
    protected generateOperatorProperties(operators: OperatorProperties): void {
        super.generateOperatorProperties(operators);

        operators.equalTo = "===";
        operators.notEqualTo = "!==";
    }

    /**
     * Generates metadata on output.
     * 
     * @param output   A property container for metadata on output.
     */
    protected generateOutputProperties(output: OutputProperties): void {
        output.print = "console.log";
    }

    /**
     * Generates metadata on parameters
     * 
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterProperties(parameters: ParameterProperties): void {
        parameters.restDeclarationAfter = false;
        parameters.restDeclarationType = false;
        parameters.restKeywordLeft = "...";
        parameters.restKeywordMiddle = "";
        parameters.restKeywordRight = "";
    }

    /**
     * Generates metadata on style.
     * 
     * @param style   The property container for metadata on style. 
     */
    protected generateStyleProperties(style: StyleProperties): void {
        super.generateStyleProperties(style);

        style.fileEndLines = ["})();"];
        style.fileIndentation = 1;
        style.fileStartLines = ["(() => {"];

        style.mainEndLines = ["})();"];
        style.mainIndentation = 1;
        style.mainStartLines = [
            "(() => {"
        ];

        style.printEnd = ")";
        style.printStart = "console.log(";
    }

    /**
     * Generates metadata on strings.
     * 
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

        strings.className = "String";
        strings.index = new NativeCallProperties(
            "indexOf",
            NativeCallScope.Member,
            NativeCallType.Function);
        strings.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);
    }

    /**
     * Generates metadata on string formatting.
     * 
     * @param strings   A property container for metadata on string formatting.
     */
    public generateStringFormatProperties(formatting: StringFormatProperties): void {
        formatting.formatLeft = "`";
        formatting.formatRight = "`";
        formatting.formatInputLeft = "${";
        formatting.formatInputRight = "}";
        formatting.inputTypes = false;
        formatting.useInterpolation = true;
    }

    /**
     * Generates metadata on variables.
     * 
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            "infinity": "Infinity"
        };
        variables.declaration = "let ";
        variables.explicitTypes = false;
        variables.null = "undefined";
        variables.typesAfterName = false;
        variables.isNullLeft = "typeof";
        variables.isNotNullLeft = "typeof";
        variables.isNotNullMiddle = "!=";
        variables.isNullMiddle = "==";
        variables.nullRight = "null";
    }
}
