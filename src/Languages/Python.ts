import { StringToFloatStartConversionType } from "../Commands/IfStringToFloatStartCommand";
import { CaseStyle } from "./Casing/CaseStyle";
import { Import } from "./Imports/Import";
import { ImportRelativity } from "./Imports/ImportRelativity";
import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
import { ClassExportProperties } from "./Properties/ClassExportProperties";
import { ClassMemberFunctionProperties } from "./Properties/ClassMemberFunctionProperties";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties";
import { ClassProperties } from "./Properties/ClassProperties";
import { ClassStaticFunctionProperties } from "./Properties/ClassStaticFunctionProperties";
import { ClassStaticVariableProperties } from "./Properties/ClassStaticVariableProperties";
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
import { MainProperties } from "./Properties/MainProperties";
import { MathProperties } from "./Properties/MathProperties";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties";
import { NewInstantiationSyntaxKind, NewProperties } from "./Properties/NewProperties";
import { NumberProperties } from "./Properties/NumberProperties";
import { ParameterProperties } from "./Properties/ParameterProperties";
import { PrintingProperties } from "./Properties/PrintingProperties";
import { SetProperties } from "./Properties/SetProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringSubstringProperties, StringSubstringSupport } from "./Properties/StringSubstringProperties";
import { StringToFloatProperties } from "./Properties/StringToFloatProperties";
import { VariableProperties } from "./Properties/VariableProperties";
import { PythonicLanguage } from "./PythonicLanguage";

/**
 * A summary of information for the Python language.
 */
export class Python extends PythonicLanguage {
    /**
     * Generates metadata on arrays.
     *
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArrayProperties(arrays: ArrayProperties): void {
        arrays.className = "list";
        arrays.length = new NativeCallProperties(
            "len",
            NativeCallScope.Static,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on booleans.
     *
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanProperties(booleans: BooleanProperties): void {
        booleans.className = "bool";
    }

    /**
     * Generates metadata on exported classes.
     *
     * @param members   A property container for metadata on exported classes.
     */
    protected generateClassExportProperties(exports: ClassExportProperties): void {
        exports.exported = "";
        exports.internal = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param members   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionProperties(functions: ClassMemberFunctionProperties): void {
        functions.private = "def ";
        functions.privateCase = CaseStyle.SnakeCase;
        functions.privatePrefix = "__";
        functions.protected = "def ";
        functions.protectedCase = CaseStyle.SnakeCase;
        functions.protectedPrefix = "_";
        functions.public = "def ";
        functions.publicCase = CaseStyle.SnakeCase;
        functions.publicPrefix = "";
    }

    /**
     * Generates metadata on class member variables.
     *
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

        variables.privateCase = CaseStyle.SnakeCase;
        variables.privatePrefix = "__";
        variables.protectedCase = CaseStyle.SnakeCase;
        variables.protectedPrefix = "_";
        variables.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on classes.
     *
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);

        classes.abstractDeclaration = "";
        classes.aliases = {
            dictionary: "dict",
            number: "float"
        };

        classes.constructors.keyword = "def __init__";
        classes.constructors.takeThis = true;

        classes.declareEnd = "\0";
        classes.declareExtendsLeft = "(";
        classes.declareExtendsRight = ")";
        classes.declareStartLeft = "class ";
        classes.declareStartRight = ":";

        classes.instanceOf = new NativeCallProperties(
            "isinstance",
            NativeCallScope.Static,
            NativeCallType.Function);

        classes.statics.labelBeforePublicity = true;

        classes.superConstructor = "super().__init__";
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionProperties(functions: ClassStaticFunctionProperties): void {
        functions.label = "@staticmethod\n";
        functions.private = "def ";
        functions.privateCase = CaseStyle.SnakeCase;
        functions.privatePrefix = "__";
        functions.protected = "def ";
        functions.protectedCase = CaseStyle.SnakeCase;
        functions.protectedPrefix = "_";
        functions.public = "def ";
        functions.publicCase = CaseStyle.SnakeCase;
        functions.publicPrefix = "";
    }

    /**
     * Generates metadata on class static variables.
     *
     * @param members   A property container for metadata on class static variables.
     */
    protected generateClassStaticVariableProperties(variables: ClassStaticVariableProperties): void {
        super.generateClassStaticVariableProperties(variables);

        variables.label = "";
        variables.privateCase = CaseStyle.SnakeCase;
        variables.privatePrefix = "__";
        variables.protectedCase = CaseStyle.SnakeCase;
        variables.protectedPrefix = "_";
        variables.publicCase = CaseStyle.CamelCase;
        variables.publicPrefix = "";
    }

    /**
     * Generates metadata on comments.
     *
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentProperties(comments: CommentProperties): void {
        comments.blockEnd = "\"\"\"";
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = "\"\"\"";

        comments.docEnd = "\"\"\"";
        comments.docLineEnd = "";
        comments.docLineStart = "";
        comments.docStart = "\"\"\"";
        comments.docTagAliases = {
            note: "remarks",
            parameter: "param",
            returns: "returns",
            summary: "",
            todo: "todo"
        };
        comments.docTagsWithParameters = {
            parameter: ""
        };
        comments.docTagEnd = " ";
        comments.docTagSpaceAfter = "  ";
        comments.docTagStart = ":";

        comments.lineLeft = "# ";
        comments.lineRight = "";
    }

    /**
     * Generates metadata on conditionals.
     *
     * @param conditionals   A property container for metadata on conditionals.
     */
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
        super.generateConditionalProperties(conditionals);

        conditionals.continueRight = ":";
        conditionals.elif = "elif";
        conditionals.startRight = ":";
    }

    /**
     * Generates properties on dictionaries.
     *
     * @param dictionaries   The property container for metadata on dictionaries.
     */
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        super.generateDictionaryProperties(dictionaries);

        dictionaries.className = "dict";
        dictionaries.keys = new NativeCallProperties(
            "keys",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on enums.
     *
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);

        enums.declareStartRight = "(Enum):";
        enums.declareValueLeft = " = ";
        enums.valueMiddle = ".";
        enums.isObject = false;
    }

    /**
     * Generates metadata on exceptions.
     *
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        super.generateExceptionProperties(exceptions);

        exceptions.catch = "except";
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   The property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

        functions.defineStartRight = ":";
        functions.defineEnd = "\0";
    }

    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.extension = ".py";
        general.name = "Python";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.PythonImportCase;
        imports.explicit = true;
        imports.leftAbsolute = "from ";
        imports.leftLocal = "from .";
        imports.middle = " import ";
        imports.right = "";
        imports.useLocalRelativeImports = true;
        imports.useLocalRelativePaths = false;
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

        lambdas.functionLeft = "lambda ";
        lambdas.functionMiddle = ": ";
        lambdas.functionRight = "";
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on loops.
     */
    protected generateListProperties(lists: ListProperties): void {
        super.generateListProperties(lists);
        lists.length = new NativeCallProperties(
            "len",
            NativeCallScope.Static,
            NativeCallType.Function);
        lists.pop = new NativeCallProperties(
            "pop",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.popFront = new NativeCallProperties(
            "pop",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.popFront.withArguments([
            "0"
        ]);

        lists.push = new NativeCallProperties(
            "append",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.addList = new NativeCallProperties(
            "extend",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.sort = new NativeCallProperties(
            "sort",
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

        loops.forEachEnd = "\0";
        loops.forEachGetKeys = "";
        loops.forEachGetPairs = ".iteritems()";
        loops.forEachPairsAsPair = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "for";
        loops.forEachStartSeparator = " in ";
        loops.forEachStartRight = ":";

        loops.rangedForLoopsLeft = " in range(";
        loops.rangedForLoopsMiddle = ", ";
        loops.rangedForLoopsRight = ")";
    }

    /**
     * Generates metadata on main execution areas.
     *
     * @param math   A property container for metadata on main execution areas.
     */
    protected generateMainProperties(main: MainProperties): void {
        main.contextEndLines = [];
        main.contextIndentation = 0;
        main.contextStartLines = [];
        main.mainEndLines = [];
        main.mainIndentation = 1;
        main.mainStartLines = ["if __name__ == \"__main__\":"];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathProperties(math: MathProperties): void {
        math.absolute = new NativeCallProperties(
            "fabs",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports([new Import(["math"], ["fabs"], ImportRelativity.Absolute)]);
        math.ceiling = new NativeCallProperties(
            "ceil",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports([new Import(["math"], ["ceil"], ImportRelativity.Absolute)]);
        math.floor = new NativeCallProperties(
            "floor",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports([new Import(["math"], ["floor"], ImportRelativity.Absolute)]);
        math.max = new NativeCallProperties(
            "max",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.min = new NativeCallProperties(
            "min",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.mathName = "Math";
    }

    /**
     * Generates metadata on new object instantiation.
     *
     * @param newProp   A property container for metadata on new object instantiation.
     */
    protected generateNewProperties(newProp: NewProperties): void {
        newProp.instantiationKind = NewInstantiationSyntaxKind.MethodCall;
    }

    /**
     * Generates metadata on numbers.
     *
     * @param numbers   A property container for metadata on numbers.
     */
    protected generateNumberProperties(numbers: NumberProperties): void {
        numbers.className = "float";
    }

    /**
     * Generates metadata on parameters
     *
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterProperties(parameters: ParameterProperties): void {
        parameters.restDeclarationAfter = false;
        parameters.restDeclarationType = false;
        parameters.restKeywordLeft = "*";
        parameters.restKeywordMiddle = "";
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
        printing.start = "print(";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetProperties(sets: SetProperties): void {
        sets.add = new NativeCallProperties(
            "add",
            NativeCallScope.Member,
            NativeCallType.Function);

        sets.className = "Set";

        sets.contains = new NativeCallProperties(
            " in ",
            NativeCallScope.Operator,
            NativeCallType.FloatingLeft);

        sets.initializeAsNew = false;
        sets.initializeStart = "";

        sets.toArray = new NativeCallProperties(
            "list",
            NativeCallScope.Static,
            NativeCallType.Function);

        sets.toList = sets.toArray;

        sets.requiredImports = [];
        sets.startItemsLeft = "{";
        sets.startItemsRight = "}";
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatProperties(formatting: StringFormatProperties): void {
        formatting.formatLeft = "\"";
        formatting.formatMiddle = "\".format(";
        formatting.formatAbbreviated = "\".format(";
        formatting.formatRight = ")";
        formatting.formatInputLeft = "{";
        formatting.formatInputRight = "}";
        formatting.inputTypes = false;
        formatting.useInterpolation = false;
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringProperties(substrings: StringSubstringProperties): void {
        substrings.defaultEnd = ":";
        substrings.leftIndex = "[";
        substrings.leftLength = "[";
        substrings.middle = ":";
        substrings.right = "]";
        substrings.support = StringSubstringSupport.Index;
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

        strings.caseLower = new NativeCallProperties(
            "lower",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.caseUpper = new NativeCallProperties(
            "upper",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.className = "string";

        strings.index = new NativeCallProperties(
            "index",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.length = new NativeCallProperties(
            "len",
            NativeCallScope.Static,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on string-to-float conversions.
     *
     * @param toFloat   A property container for metadata on string-to-float conversions.
     */
    protected generateStringToFloatProperties(toFloat: StringToFloatProperties): void {
        toFloat.conversionType = StringToFloatStartConversionType.PredeclareConvertAndValidate;
        toFloat.initialVariableValues = "None";
        toFloat.initializeVariablesEnd = "\n\ntry:\n";
        toFloat.perVariableConversionStartLeft = "    ";
        toFloat.perVariableConversionStartMiddle = " = float(";
        toFloat.perVariableConversionStartRight = ")\n";
        toFloat.validationBlockComparison = "{1} is not None";
        toFloat.validationBlockLeft = "except:\n    pass\n\nif ";
        toFloat.validationBlockMiddle = " and ";
        toFloat.validationBlockRight = ":";
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            false: "False",
            infinity: "inf",
            true: "True"
        };
        variables.null = "None";
        variables.isNullLeft = "";
        variables.isNotNullLeft = "";
        variables.isNotNullMiddle = " is not ";
        variables.isNullMiddle = " is ";
        variables.nullRight = "None";
    }
}
