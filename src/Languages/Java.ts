import { CaseStyle } from "./Casing/CaseStyle";
import { CLikeLanguage } from "./CLikeLanguage";
import { Import } from "./Imports/Import";
import { ImportRelativity } from "./Imports/ImportRelativity";
import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties";
import { ClassProperties } from "./Properties/ClassProperties";
import { CommentProperties } from "./Properties/CommentProperties";
import { ConditionalProperties } from "./Properties/ConditionalProperties";
import { DictionaryProperties } from "./Properties/DictionaryProperties";
import { EnumProperties } from "./Properties/EnumProperties";
import { ExceptionProperties } from "./Properties/ExceptionProperties";
import { FileProperties } from "./Properties/FileProperties";
import { FunctionProperties } from "./Properties/FunctionProperties";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ImportProperties } from "./Properties/ImportProperties";
import { InterfaceProperties } from "./Properties/InterfaceProperties";
import { LambdaProperties } from "./Properties/LambdaProperties";
import { ListProperties } from "./Properties/ListProperties";
import { LoopProperties } from "./Properties/LoopProperties";
import { MainProperties } from "./Properties/MainProperties";
import { MathProperties } from "./Properties/MathProperties";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties";
import { NewInstantiationSyntaxKind, NewProperties } from "./Properties/NewProperties";
import { NumberProperties } from "./Properties/NumberProperties";
import { ParameterProperties } from "./Properties/ParameterProperties";
import { PrintingProperties } from "./Properties/PrintingProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StringProperties } from "./Properties/StringProperties";
import { VariableProperties } from "./Properties/VariableProperties";

/**
 * A summary of information for the Java language.
 */
export class Java extends CLikeLanguage {
    /**
     * Generates metadata on arrays.
     *
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArrayProperties(arrays: ArrayProperties): void {
        arrays.className = "Array";
        arrays.initializeAsNew = true;
        arrays.initializeByType = true;
        arrays.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on booleans.
     *
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanProperties(booleans: BooleanProperties): void {
        booleans.className = "boolean";
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
     * Generates metadata on classes.
     *
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);

        classes.aliases = {
            boolean: "boolean",
            dictionary: "HashMap",
            list: "ArrayList",
            number: "double"
        };

        classes.declareExtendsLeft = " extends ";
        classes.declareImplementsLeft = " implements ";
        classes.declareStartRight = " {";
        classes.generics.used = true;

        classes.members.functions.private = "private ";
        classes.members.functions.privateCase = CaseStyle.CamelCase;
        classes.members.functions.protected = "protected ";
        classes.members.functions.protectedCase = CaseStyle.CamelCase;
        classes.members.functions.public = "public ";
        classes.members.functions.publicCase = CaseStyle.CamelCase;

        classes.statics.functions.private = "private ";
        classes.statics.functions.privateCase = CaseStyle.CamelCase;
        classes.statics.functions.protected = "protected ";
        classes.statics.functions.protectedCase = CaseStyle.CamelCase;
        classes.statics.functions.public = "public ";
        classes.statics.functions.publicCase = CaseStyle.CamelCase;

        classes.statics.variables.private = "private ";
        classes.statics.variables.privateCase = CaseStyle.CamelCase;
        classes.statics.variables.protected = "protected ";
        classes.statics.variables.protectedCase = CaseStyle.CamelCase;
        classes.statics.variables.public = "public ";
        classes.statics.variables.publicCase = CaseStyle.CamelCase;

        classes.superConstructor = "super";
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
            note: "remarks",
            parameter: "param",
            returns: "returns",
            summary: "",
            todo: "todo"
        };
        comments.docTagsWithParameters = {
            parameter: "",
            summary: "\0",
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
        dictionaries.className = "HashMap";
        dictionaries.containsKey = new NativeCallProperties(
            "containsKey",
            NativeCallScope.Member,
            NativeCallType.Function);
        dictionaries.keys = new NativeCallProperties(
            "keySet",
            NativeCallScope.Member,
            NativeCallType.Function);
        dictionaries.initializeAsNew = true;
        dictionaries.initializeEnd = "}}";
        dictionaries.initializePairComma = "";
        dictionaries.initializeStart = "() {{";
        dictionaries.initializePairLeft = "put(";
        dictionaries.initializePairMiddle = ", ";
        dictionaries.initializePairRight = ");";
        dictionaries.requiredImports = [
            new Import(
                ["java", "util"],
                ["HashMap"],
                ImportRelativity.Absolute)
        ];
        dictionaries.typeLeft = "<";
        dictionaries.typeMiddle = ", ";
        dictionaries.typeRight = ">";
    }

    /**
     * Generates metadata on enums.
     *
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);

        enums.declareStartRight = " {";
        enums.declareValueLeft = "(";
        enums.declareValueRight = ")";
        enums.declareLastRight = "";
        enums.isObject = false;
    }

    /**
     * Generates metadata on exceptions.
     *
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        super.generateExceptionProperties(exceptions);

        exceptions.className = "Exception";
    }

    /**
     * Generates metadata on file contents.
     *
     * @param files   The property container for metadata on file contents.
     */
    protected generateFileProperties(files: FileProperties): void {
        files.endLines = [];
        files.indentation = 0;
        files.startCase = CaseStyle.PackageLowerCase;
        files.startLines = [
            "package {1};",
            "",
        ];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

        functions.case = CaseStyle.CamelCase;

        functions.defineStartLeft = " ";
        functions.defineStartRight = " {";

        functions.requiresExceptions = true;
        functions.functionThrows = " throws ";
    }

    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.name = "Java";
        general.extension = ".java";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.PackageLowerCase;
        imports.explicit = true;
        imports.explicitLines = true;
        imports.leftAbsolute = "import ";
        imports.leftLocal = "import ";
        imports.middle = ".";
        imports.right = ";";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateInterfaceProperties(interfaces: InterfaceProperties): void {
        interfaces.declareStartLeft = "interface ";
        interfaces.declareStartRight = " {";
        interfaces.declareExtendsLeft = " extends ";
        interfaces.declareExtendsRight = ", ";
        interfaces.declareEnd = "}";
        interfaces.declareMethodLeft = "public ";
        interfaces.declareMethodMiddle = "(";
        interfaces.declareMethodRight = ")";
        interfaces.declareImplementsExplicit = true;
        interfaces.methodTypeAfter = false;
        interfaces.supported = true;
    }

    /**
     * Generates metadata on lambdas.
     *
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        super.generateLambdaProperties(lambdas);

        lambdas.functionMiddle = ") -> ";
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on lists.
     */
    protected generateListProperties(lists: ListProperties): void {
        lists.className = "ArrayList";

        lists.addList = new NativeCallProperties(
            "addAll",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.length = new NativeCallProperties(
            "size",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.pop = new NativeCallProperties(
            "remove",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.pop.addArgument("{0}.size() - 1");

        lists.popFront = new NativeCallProperties(
            "remove",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.popFront.addArgument("0");

        lists.push = new NativeCallProperties(
            "add",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.sort = new NativeCallProperties(
            "sort",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.requiredImports = [
            new Import(
                ["java", "util"],
                ["ArrayList"],
                ImportRelativity.Absolute)
        ];
    }

    /**
     * Generates metadata on loops.
     *
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopProperties(loops: LoopProperties): void {
        super.generateLoopProperties(loops);

        loops.foreach = "for";
        loops.forEachGetKeys = ".keySet()";
        loops.forEachGetPairs = ".entrySet()";
        loops.forEachMiddle = " : ";
        loops.forEachPairsAsPair = true;
        loops.forEachPairsPairClass = "Map.Entry";
        loops.forEachPairsRetrieveKey = ".getKey()";
        loops.forEachPairsRetrieveValue = ".getValue()";
        loops.forEachRight = "";

        loops.forEachStartLeft = "for";
        loops.forEachStartItteration = " (";
        loops.forEachStartSeparator = " : ";
        loops.forEachStartRight = ") {";
    }

    /**
     * Generates metadata on main execution areas.
     *
     * @param math   A property container for metadata on main execution areas.
     */
    protected generateMainProperties(main: MainProperties): void {
        main.contextEndLines = [
            "}"
        ];
        main.contextIndentation = 1;
        main.contextStartLines = [
            "class Program {"
        ];
        main.mainEndLines = [
            "}"
        ];
        main.mainIndentation = 1;
        main.mainStartLines = [
            "public static void main(String[] args) {"
        ];
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
        math.max = new NativeCallProperties(
            "Math.max",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.min = new NativeCallProperties(
            "Math.min",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.requiredImports = [];
        math.mathName = "Math";
    }

    /**
     * Generates metadata on new object instantiation.
     *
     * @param newProp   A property container for metadata on new object instantiation.
     */
    protected generateNewProperties(newProp: NewProperties): void {
        newProp.instantiationKind = NewInstantiationSyntaxKind.Prefix;
        newProp.keyword = "new";
    }

    /**
     * Generates metadata on numbers.
     *
     * @param numbers   A property container for metadata on numbers.
     */
    protected generateNumberProperties(numbers: NumberProperties): void {
        numbers.className = "double";
    }

    /**
     * Generates metadata on parameters
     *
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterProperties(parameters: ParameterProperties): void {
        parameters.restDeclarationAfter = false;
        parameters.restDeclarationType = true;
        parameters.restKeywordLeft = "";
        parameters.restKeywordMiddle = "... ";
        parameters.restKeywordRight = "";
    }

    /**
     * Generates metadata on printing.
     *
     * @param parameters    A property container for metadata on printing.
     */
    protected generatePrintingProperties(printing: PrintingProperties): void {
        printing.end = ")";
        printing.requiredImports = [];
        printing.start = "System.out.println(";
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatProperties(formatting: StringFormatProperties): void {
        formatting.formatLeft = "String.format(\"";
        formatting.formatMiddle = "\", ";
        formatting.formatAbbreviated = "\"";
        formatting.formatRight = ")";
        formatting.formatInputLeft = "%";
        formatting.formatInputRight = "";
        formatting.inputTypes = true;
        formatting.useInterpolation = false;

        formatting.typeCodes = {
            float: "$f",
            int: "$d",
            string: "$s",
        };
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

        strings.className = "string";
        strings.index = new NativeCallProperties(
            "indexOf",
            NativeCallScope.Member,
            NativeCallType.Function);
        strings.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            infinity: "double.POSITIVE_INFINITY"
        };
        variables.castLeft = "(";
        variables.castRight = ")";
        variables.declaration = "";
        variables.explicitTypes = true;
        variables.null = "null";
        variables.isNotNullLeft = "";
        variables.isNotNullMiddle = " != ";
        variables.isNullLeft = "";
        variables.isNullMiddle = " == ";
        variables.nullRight = "null";
    }
}
