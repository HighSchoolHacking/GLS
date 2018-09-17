import { StringToFloatStartConversionType } from "../Commands/IfStringToFloatStartCommand";
import { CaseStyle } from "./Casing/CaseStyle";
import { Import } from "./Imports/Import";
import { ImportRelativity } from "./Imports/ImportRelativity";
import { Language } from "./Language";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ProjectProperties } from "./Properties/ProjectProperties";
import { ArraySyntax } from "./Properties/Syntax/ArraySyntax";
import { BooleanSyntax } from "./Properties/Syntax/BooleanSyntax";
import { ClassExportSyntax } from "./Properties/Syntax/ClassExportSyntax";
import { ClassGenericSyntax } from "./Properties/Syntax/ClassGenericSyntax";
import { ClassMemberFunctionSyntax } from "./Properties/Syntax/ClassMemberFunctionSyntax";
import { ClassMemberVariableSyntax } from "./Properties/Syntax/ClassMemberVariableSyntax";
import { ClassStaticFunctionSyntax } from "./Properties/Syntax/ClassStaticFunctionSyntax";
import { ClassStaticVariableSyntax } from "./Properties/Syntax/ClassStaticVariableSyntax";
import { ClassSyntax } from "./Properties/Syntax/ClassSyntax";
import { CommentSyntax } from "./Properties/Syntax/CommentSyntax";
import { ConditionalSyntax } from "./Properties/Syntax/ConditionalSyntax";
import { DictionarySyntax } from "./Properties/Syntax/DictionarySyntax";
import { EnumSyntax } from "./Properties/Syntax/EnumSyntax";
import { ExceptionSyntax } from "./Properties/Syntax/ExceptionSyntax";
import { FileSyntax } from "./Properties/Syntax/FileSyntax";
import { FunctionSyntax } from "./Properties/Syntax/FunctionSyntax";
import { ImportSyntax } from "./Properties/Syntax/ImportSyntax";
import { InterfaceSyntax } from "./Properties/Syntax/InterfaceSyntax";
import { LambdaSyntax } from "./Properties/Syntax/LambdaSyntax";
import { ListSyntax } from "./Properties/Syntax/ListSyntax";
import { LoopSyntax } from "./Properties/Syntax/LoopSyntax";
import { MainSyntax } from "./Properties/Syntax/MainSyntax";
import { MathSyntax } from "./Properties/Syntax/MathSyntax";
import { NativeCallScope, NativeCallSyntax, NativeCallType } from "./Properties/Syntax/NativeCallSyntax";
import { NewInstantiationSyntaxKind, NewSyntax } from "./Properties/Syntax/NewSyntax";
import { OperatorSyntax } from "./Properties/Syntax/OperatorSyntax";
import { ParameterSyntax } from "./Properties/Syntax/ParameterSyntax";
import { PrintingSyntax } from "./Properties/Syntax/PrintingSyntax";
import { SetSyntax } from "./Properties/Syntax/SetSyntax";
import { StandaloneFunctionSyntax } from "./Properties/Syntax/StandaloneFunctionSyntax";
import { StringFormatSyntax } from "./Properties/Syntax/StringFormatSyntax";
import { StringSubstringSupport, StringSubstringSyntax } from "./Properties/Syntax/StringSubstringSyntax";
import { StringSyntax } from "./Properties/Syntax/StringSyntax";
import { StringToFloatSyntax } from "./Properties/Syntax/StringToFloatSyntax";
import { StyleSyntax } from "./Properties/Syntax/StyleSyntax";
import { UnsupportedSyntax } from "./Properties/Syntax/UnsupportedSyntax";
import { VariableSyntax } from "./Properties/Syntax/VariableSyntax";

/**
 * A summary of information for the Python language.
 */
export class Python extends Language {
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
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.fileFormat = [`{name}`];
        projects.fileName = "requirements.txt";
        projects.nameFormat = CaseStyle.DashLowerCase;
    }

    /**
     * Generates metadata on class generics.
     *
     * @param generics   The property container for metadata on class generics.
     */
    protected generateClassGenericSyntax(generics: ClassGenericSyntax): void {
        // Unused
    }

    /**
     * Generates metadata on arrays.
     *
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArraySyntax(arrays: ArraySyntax): void {
        arrays.className = "list";
        arrays.length = new NativeCallSyntax("len", NativeCallScope.Static, NativeCallType.Function);
    }

    /**
     * Generates metadata on booleans.
     *
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanSyntax(booleans: BooleanSyntax): void {
        booleans.className = "bool";
    }

    /**
     * Generates metadata on exported classes.
     *
     * @param members   A property container for metadata on exported classes.
     */
    protected generateClassExportSyntax(exports: ClassExportSyntax): void {
        exports.exported = "";
        exports.internal = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param members   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionSyntax(functions: ClassMemberFunctionSyntax): void {
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
    protected generateClassMemberVariableSyntax(variables: ClassMemberVariableSyntax): void {
        variables.publicPrefix = "";
        variables.skipMemberVariables = true;

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
    protected generateClassSyntax(classes: ClassSyntax): void {
        classes.constructors.private = "";
        classes.constructors.protected = "";
        classes.constructors.public = "";
        classes.constructors.useKeyword = true;
        classes.newStart = "new ";
        classes.this = "self";

        classes.abstractDeclaration = "";
        classes.aliases = {
            dictionary: "dict",
            number: "float",
        };

        classes.constructors.keyword = "def __init__";
        classes.constructors.takeThis = true;

        classes.declareEnd = "\0";
        classes.declareExtendsLeft = "(";
        classes.declareExtendsRight = ")";
        classes.declareStartLeft = "class ";
        classes.declareStartRight = ":";

        classes.instanceOf = new NativeCallSyntax("isinstance", NativeCallScope.Static, NativeCallType.Function);

        classes.statics.labelBeforePublicity = true;

        classes.superConstructor = "super().__init__";
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionSyntax(functions: ClassStaticFunctionSyntax): void {
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
    protected generateClassStaticVariableSyntax(variables: ClassStaticVariableSyntax): void {
        variables.private = "";
        variables.protected = "";
        variables.public = "";
        variables.skipStaticVariables = true;

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
    protected generateCommentSyntax(comments: CommentSyntax): void {
        comments.blockEnd = '"""';
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = '"""';

        comments.docEnd = '"""';
        comments.docLineEnd = "";
        comments.docLineStart = "";
        comments.docStart = '"""';
        comments.docTagAliases = {
            note: "remarks",
            parameter: "param",
            returns: "returns",
            summary: "",
            todo: "todo",
        };
        comments.docTagsWithParameters = {
            parameter: "",
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
    protected generateConditionalSyntax(conditionals: ConditionalSyntax): void {
        conditionals.continueLeft = "";
        conditionals.else = "else";
        conditionals.end = "\0";
        conditionals.if = "if";
        conditionals.startLeft = " ";

        conditionals.continueRight = ":";
        conditionals.elif = "elif";
        conditionals.startRight = ":";
    }

    /**
     * Generates properties on dictionaries.
     *
     * @param dictionaries   The property container for metadata on dictionaries.
     */
    protected generateDictionarySyntax(dictionaries: DictionarySyntax): void {
        dictionaries.containsKey = new NativeCallSyntax(" in ", NativeCallScope.Operator, NativeCallType.FloatingLeft);
        dictionaries.initializeAsLiteral = "{}";
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = ": ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "{";

        dictionaries.className = "dict";
        dictionaries.keys = new NativeCallSyntax("keys", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Generates metadata on enums.
     *
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumSyntax(enums: EnumSyntax): void {
        enums.declareStartLeft = "class ";
        enums.declareValueRight = "";
        enums.declareCommaRight = "";
        enums.declareLastRight = "";
        enums.valueLeft = "";
        enums.valueRight = "";

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
    protected generateExceptionSyntax(exceptions: ExceptionSyntax): void {
        exceptions.finally = "finally";
        exceptions.throw = "raise";
        exceptions.try = "try";
        exceptions.variablePrefix = "";
        exceptions.blockEnd = "";
        exceptions.tryStartRight = ":";
        exceptions.finallyStartRight = ":";
        exceptions.catchStartMiddle = " ";
        exceptions.catchStartLink = " as ";
        exceptions.catchStartRight = ":";
        exceptions.throwExceptionMiddle = "(";
        exceptions.throwExceptionRight = ")";
        exceptions.requiresExceptionType = true;

        exceptions.catch = "except";
    }

    /**
     * Generates metadata on file contents.
     *
     * @param file   The property container for metadata on contents.
     */
    protected generateFileSyntax(files: FileSyntax): void {
        files.endLines = [];
        files.indentation = 0;
        files.startCase = CaseStyle.FileSystemLowerCase;
        files.startLines = [];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   The property container for metadata on functions.
     */
    protected generateFunctionSyntax(functions: FunctionSyntax): void {
        functions.case = CaseStyle.SnakeCase;
        functions.defineStartLeft = "def ";
        functions.defineStartRight = ":";
        functions.requiresExceptions = false;

        functions.defineStartRight = ":";
        functions.defineEnd = "\0";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportSyntax(imports: ImportSyntax): void {
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
     * Generates metadata on interfaces.
     *
     * @param interfaces   A property container for metadata on interfaces.
     */
    protected generateInterfaceSyntax(interfaces: InterfaceSyntax): void {
        interfaces.supported = false;
    }

    /**
     * Generates metadata on lambdas.
     *
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaSyntax(lambdas: LambdaSyntax): void {
        lambdas.parameterTypeRequired = false;
        lambdas.returnTypeRequired = false;

        lambdas.functionLeft = "lambda ";
        lambdas.functionMiddle = ": ";
        lambdas.functionRight = "";
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on loops.
     */
    protected generateListSyntax(lists: ListSyntax): void {
        lists.asArray = true;

        lists.length = new NativeCallSyntax("len", NativeCallScope.Static, NativeCallType.Function);
        lists.pop = new NativeCallSyntax("pop", NativeCallScope.Member, NativeCallType.Function);
        lists.popFront = new NativeCallSyntax("pop", NativeCallScope.Member, NativeCallType.Function);
        lists.popFront.withArguments(["0"]);

        lists.push = new NativeCallSyntax("append", NativeCallScope.Member, NativeCallType.Function);
        lists.addList = new NativeCallSyntax("extend", NativeCallScope.Member, NativeCallType.Function);
        lists.sort = new NativeCallSyntax("sort", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Generates metadata on loops.
     *
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopSyntax(loops: LoopSyntax): void {
        loops.break = "break";
        loops.continue = "continue";
        loops.for = "for";
        loops.foreach = "for";
        loops.forEachMiddle = " in ";
        loops.rangedForLoops = true;
        loops.forEachStartIteration = " ";
        loops.whileStartLeft = "while";
        loops.whileStartMiddle = " ";
        loops.whileStartRight = ":";

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
     * @param main   A property container for metadata on main execution areas.
     */
    protected generateMainSyntax(main: MainSyntax): void {
        main.contextEndLines = [];
        main.contextIndentation = 0;
        main.contextStartLines = [];
        main.group = "";
        main.mainEndLines = [];
        main.mainIndentation = 1;
        main.mainStartLines = ['if __name__ == "__main__":'];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathSyntax(math: MathSyntax): void {
        math.absolute = new NativeCallSyntax("fabs", NativeCallScope.Static, NativeCallType.Function).withImports([
            new Import(["math"], ["fabs"], ImportRelativity.Absolute),
        ]);
        math.ceiling = new NativeCallSyntax("ceil", NativeCallScope.Static, NativeCallType.Function).withImports([
            new Import(["math"], ["ceil"], ImportRelativity.Absolute),
        ]);
        math.floor = new NativeCallSyntax("floor", NativeCallScope.Static, NativeCallType.Function).withImports([
            new Import(["math"], ["floor"], ImportRelativity.Absolute),
        ]);
        math.max = new NativeCallSyntax("max", NativeCallScope.Static, NativeCallType.Function);
        math.min = new NativeCallSyntax("min", NativeCallScope.Static, NativeCallType.Function);
        math.power = new NativeCallSyntax("pow", NativeCallScope.Static, NativeCallType.Function).withImports([
            new Import(["math"], ["pow"], ImportRelativity.Absolute),
        ]);
        math.mathName = "Math";
    }

    /**
     * Generates metadata on new object instantiation.
     *
     * @param newProp   A property container for metadata on new object instantiation.
     */
    protected generateNewSyntax(newProp: NewSyntax): void {
        newProp.instantiationKind = NewInstantiationSyntaxKind.MethodCall;
    }

    /**
     * Generates metadata on operators.
     *
     * @param operators   The property container for metadata on operators.
     */
    protected generateOperatorSyntax(operators: OperatorSyntax): void {
        operators.and = "&&";
        operators.decreaseBy = "-=";
        operators.divide = "/";
        operators.divideBy = "/=";
        operators.equals = "=";
        operators.equalTo = "==";
        operators.greaterThan = ">";
        operators.greaterThanOrEqualTo = ">=";
        operators.increaseBy = "+=";
        operators.lessThan = "<";
        operators.lessThanOrEqualTo = "<=";
        operators.minus = "-";
        operators.mod = "%";
        operators.multiplyBy = "*=";
        operators.not = "!";
        operators.notEqualTo = "!=";
        operators.or = "||";
        operators.plus = "+";
        operators.times = "*";
    }

    /**
     * Generates metadata on parameters
     *
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterSyntax(parameters: ParameterSyntax): void {
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
    protected generatePrintingSyntax(printing: PrintingSyntax): void {
        printing.end = ")";
        printing.requiredImports = [];
        printing.start = "print(";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetSyntax(sets: SetSyntax): void {
        sets.add = new NativeCallSyntax("add", NativeCallScope.Member, NativeCallType.Function);

        sets.className = "Set";

        sets.contains = new NativeCallSyntax(" in ", NativeCallScope.Operator, NativeCallType.FloatingLeft);

        sets.initializeAsNew = false;
        sets.initializeStart = "";

        sets.toArray = new NativeCallSyntax("list", NativeCallScope.Static, NativeCallType.Function);

        sets.toList = sets.toArray;

        sets.requiredImports = [];
        sets.startItemsLeft = "{";
        sets.startItemsRight = "}";
    }

    /**
     * Generates metadata on standalone functions.
     *
     * @param parameters   A property container for metadata on standalone functions.
     */
    protected generateStandaloneFunctionSyntax(standaloneFunctions: StandaloneFunctionSyntax): void {
        standaloneFunctions.withinStaticClass = false;
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatSyntax(formatting: StringFormatSyntax): void {
        formatting.formatLeft = '"';
        formatting.formatMiddle = '".format(';
        formatting.formatAbbreviated = '".format(';
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
    protected generateStringSubstringSyntax(substrings: StringSubstringSyntax): void {
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
    protected generateStringSyntax(strings: StringSyntax): void {
        strings.concatenate = " + ";

        strings.caseLower = new NativeCallSyntax("lower", NativeCallScope.Member, NativeCallType.Function);

        strings.caseUpper = new NativeCallSyntax("upper", NativeCallScope.Member, NativeCallType.Function);

        strings.className = "string";

        strings.indexOf = new NativeCallSyntax("find", NativeCallScope.Member, NativeCallType.Function);

        strings.indexOfNotFound = "-1";

        strings.length = new NativeCallSyntax("len", NativeCallScope.Static, NativeCallType.Function);

        strings.trim = new NativeCallSyntax("strip", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Generates metadata on string-to-float conversions.
     *
     * @param toFloat   A property container for metadata on string-to-float conversions.
     */
    protected generateStringToFloatSyntax(toFloat: StringToFloatSyntax): void {
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
     * Generates metadata on style.
     *
     * @param style   The property container for metadata on style.
     */
    protected generateStyleSyntax(style: StyleSyntax): void {
        style.semicolon = "";
    }

    /**
     * Generates metadata on unsupported complaints.
     *
     * @param style   A property container for metadata on unsupported complaints.
     */
    protected generateUnsupportedSyntax(unsupported: UnsupportedSyntax): void {
        unsupported.complaintEnd = "'''";
        unsupported.complaintStart = "'''";
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableSyntax(variables: VariableSyntax): void {
        variables.declaration = "";

        variables.aliases = {
            false: "False",
            infinity: "inf",
            true: "True",
        };
        variables.null = "None";
        variables.isNullLeft = "";
        variables.isNotNullLeft = "";
        variables.isNotNullMiddle = " is not ";
        variables.isNullMiddle = " is ";
        variables.nullRight = "None";
    }
}
