import { CaseStyle } from "./Casing/CaseStyle";
import { Import } from "./Imports/Import";
import { ImportRelativity } from "./Imports/ImportRelativity";
import { Language } from "./Language";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ProjectProperties } from "./Properties/ProjectProperties";
import { ArrayNewSizedSyntax } from "./Properties/Syntax/ArrayNewSizedSyntax";
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
import { LambdaTypeInlineSyntax } from "./Properties/Syntax/LambdaTypeInlineSyntax";
import { ListNewItemsSyntax } from "./Properties/Syntax/ListNewItemsSyntax";
import { ListNewSizedSyntax } from "./Properties/Syntax/ListNewSizedSyntax";
import { ListSortMembersSyntax, ListSortMemberType } from "./Properties/Syntax/ListSortMembersSyntax";
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
import { StringToNumberStartConversionType, StringToNumberSyntax } from "./Properties/Syntax/StringToNumberSyntax";
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
        general.directoryCase = CaseStyle.SnakeCase;
        general.extension = ".py";
        general.fileCase = CaseStyle.SnakeCase;
        general.name = "Python";
    }

    /**
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.mainFile = "main.py";
        projects.metadataFiles = {};
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
        arrays.newGenericCastRequired = false;
        arrays.requiredImports = [];
    }

    /**
     * Generates metadata on fixed size array creation.
     *
     * @param arrays   A property container for metadata on fixed size array creation.
     */
    protected generateArrayNewSizedSyntax(newSized: ArrayNewSizedSyntax): void {
        newSized.includeType = false;
        newSized.left = "[None] * ";
        newSized.right = "";
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
        exports.exportedLeft = "";
        exports.internal = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param members   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionSyntax(functions: ClassMemberFunctionSyntax): void {
        functions.includeThisReference = true;
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
            char: "string",
            dictionary: "dict",
            number: "double",
        };

        classes.constructors.baseConstructor = "super().__init__";
        classes.constructors.keyword = "def __init__";
        classes.constructors.takeThis = true;

        classes.declareEnd = "\0";
        classes.declareExtendsLeft = "(";
        classes.declareExtendsRight = ")";
        classes.declareStartLeft = "class ";
        classes.declareStartRight = ":";

        classes.instanceOf = new NativeCallSyntax("isinstance", NativeCallScope.Static, NativeCallType.Function);

        classes.statics.labelBeforePublicity = true;
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
        dictionaries.className = "dict";
        dictionaries.containsKey = new NativeCallSyntax(" in ", NativeCallScope.Operator, NativeCallType.FloatingLeft);
        dictionaries.getLeft = "[";
        dictionaries.getRight = "]";
        dictionaries.initializeAsLiteral = "{}";
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = ": ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "{";
        dictionaries.keys = new NativeCallSyntax("keys", NativeCallScope.Member, NativeCallType.Function);
        dictionaries.setLeft = "[";
        dictionaries.setMiddle = "] = ";
        dictionaries.setRight = "";
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
        exceptions.blockEnd = "";
        exceptions.catch = "except";
        exceptions.className = "Exception";
        exceptions.catchStartLink = " as ";
        exceptions.catchStartMiddle = " ";
        exceptions.catchStartRight = ":";
        exceptions.finally = "finally";
        exceptions.finallyStartRight = ":";
        exceptions.requiredImports = [];
        exceptions.requiresExceptionType = true;
        exceptions.throw = "raise";
        exceptions.throwMiddle = "(";
        exceptions.throwRight = ")";
        exceptions.try = "try";
        exceptions.tryStartRight = ":";
        exceptions.variablePrefix = "";
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
        imports.explicitAbsoluteFileName = true;
        imports.explicitItems = true;
        imports.leftAbsolute = "from ";
        imports.leftLocal = "from ";
        imports.middle = " import ";
        imports.right = "";
        imports.transformFileNames = true;
        imports.removeFirstPathComponent = true;
        imports.useLocalRelativeImports = false;
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
        lambdas.callLeft = "(";
        lambdas.callRight = ")";
        lambdas.functionLeft = "lambda ";
        lambdas.functionMiddle = ": ";
        lambdas.functionRight = "";
        lambdas.parameterTypeRequired = false;
        lambdas.returnTypeRequired = false;
    }

    /**
     * Generates metadata on inline lambda types.
     *
     * @param typeInline   A property container for metadata on inline lambda types.
     */
    protected generateLambdaTypeInlineSyntax(typeInline: LambdaTypeInlineSyntax): void {
        // Unused
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on loops.
     */
    protected generateListSyntax(lists: ListSyntax): void {
        lists.addList = new NativeCallSyntax("extend", NativeCallScope.Member, NativeCallType.Function);
        lists.asArray = true;
        lists.getLeft = "[";
        lists.getRight = "]";
        lists.length = new NativeCallSyntax("len", NativeCallScope.Static, NativeCallType.Function);
        lists.pop = new NativeCallSyntax("pop", NativeCallScope.Member, NativeCallType.Function);
        lists.popFront = new NativeCallSyntax("pop", NativeCallScope.Member, NativeCallType.Function);
        lists.popFront.withArguments(["0"]);
        lists.push = new NativeCallSyntax("append", NativeCallScope.Member, NativeCallType.Function);
        lists.setLeft = "[";
        lists.setMiddle = "] = ";
        lists.setRight = "";
        lists.sortNumbers = new NativeCallSyntax("sort", NativeCallScope.Member, NativeCallType.Function);
        lists.sortStrings = lists.sortNumbers;
    }

    /**
     * Fills out metadata on list creation with items.
     */
    protected generateListNewItemsSyntax(newItems: ListNewItemsSyntax): void {
        // Unused
    }

    /**
     * Generates metadata on fixed size list creation.
     *
     * @param arrays   A property container for metadata on fixed size list creation.
     */
    protected generateListNewSizedSyntax(newSized: ListNewSizedSyntax): void {
        newSized.includeType = false;
        newSized.left = "[None] * ";
        newSized.right = "";
    }

    /**
     * Fills out metadata on list sorting by keyed member numbers.
     */
    protected generateListSortMemberNumbersSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".sort(key = lambda ";
        sortMembers.lambdaMiddleLeft = ": ";
        sortMembers.lambdaRight = ")";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.ShorthandLambda;
    }

    /**
     * Fills out metadata on list sorting by keyed members.
     */
    protected generateListSortMemberStringsSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".sort(key = lambda ";
        sortMembers.lambdaMiddleLeft = ": ";
        sortMembers.lambdaMiddleRight = " < ";
        sortMembers.lambdaRight = ")";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.ShorthandLambda;
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
        loops.forEachGetPairs = ".items()";
        loops.forEachKeyEnd = "\0";
        loops.forEachPairEnd = "\0";
        loops.forEachPairsAsPair = true;
        loops.forEachRight = "";
        loops.forNumbersEnd = "\0";

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
        math.asInt = new NativeCallSyntax("floor", NativeCallScope.Static, NativeCallType.Function).withImports([
            new Import(["math"], ["floor"], ImportRelativity.Absolute),
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
        operators.not = "not ";
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
        sets.className = "set";
        sets.contains = new NativeCallSyntax(" in ", NativeCallScope.Operator, NativeCallType.FloatingLeft);
        sets.initializeAsNew = false;
        sets.initializeStart = "";
        sets.requiredImports = [];
        sets.startItemsLeft = "({";
        sets.startItemsRight = "})";
        sets.startNoItems = "()";
        sets.toArray = new NativeCallSyntax("list", NativeCallScope.Static, NativeCallType.Function);
        sets.toList = sets.toArray;
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
        formatting.includeIndexInFormatting = true;
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
        strings.caseLower = new NativeCallSyntax("lower", NativeCallScope.Member, NativeCallType.Function);
        strings.caseUpper = new NativeCallSyntax("upper", NativeCallScope.Member, NativeCallType.Function);
        strings.className = "string";
        strings.concatenate = " + ";
        strings.indexLeft = "[";
        strings.indexOf = new NativeCallSyntax("find", NativeCallScope.Member, NativeCallType.Function);
        strings.indexOfNotFound = "-1";
        strings.indexRight = "]";
        strings.length = new NativeCallSyntax("len", NativeCallScope.Static, NativeCallType.Function);
        strings.trim = new NativeCallSyntax("strip", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Generates metadata on string-to-double conversions.
     *
     * @param toDouble   A property container for metadata on string-to-double conversions.
     */
    protected generateStringToDoubleSyntax(toDouble: StringToNumberSyntax): void {
        toDouble.conversionType = StringToNumberStartConversionType.PredeclareConvertAndValidate;
        toDouble.initialVariableValues = "None";
        toDouble.initializeVariablesEnd = "\n\ntry:\n";
        toDouble.perVariableConversionStartLeft = "    ";
        toDouble.perVariableConversionStartMiddle = " = float(";
        toDouble.perVariableConversionStartRight = ")\n";
        toDouble.validationBlockComparison = "{1} is not None";
        toDouble.validationBlockLeft = "except:\n    pass\n\nif ";
        toDouble.validationBlockMiddle = " and ";
        toDouble.validationBlockRight = ":";
    }

    /**
     * Generates metadata on string-to-int conversions.
     *
     * @param toInt   A property container for metadata on string-to-int conversions.
     */
    protected generateStringToIntSyntax(toInt: StringToNumberSyntax): void {
        toInt.conversionType = StringToNumberStartConversionType.PredeclareConvertAndValidate;
        toInt.initialVariableValues = "None";
        toInt.initializeVariablesEnd = "\n\ntry:\n";
        toInt.perVariableConversionStartLeft = "    ";
        toInt.perVariableConversionStartMiddle = " = int(";
        toInt.perVariableConversionStartRight = ")\n";
        toInt.validationBlockComparison = "{1} is not None";
        toInt.validationBlockLeft = "except:\n    pass\n\nif ";
        toInt.validationBlockMiddle = " and ";
        toInt.validationBlockRight = ":";
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
