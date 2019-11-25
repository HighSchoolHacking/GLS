import { CaseStyle } from "./Casing/CaseStyle";
import { Import } from "./Imports/Import";
import { ImportRelativity } from "./Imports/ImportRelativity";
import { Language } from "./Language";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ProjectProperties } from "./Properties/ProjectProperties";
import { ArrayNewSizedSyntax } from "./Properties/Syntax/ArrayNewSizedSyntax";
import { ArraySyntax } from "./Properties/Syntax/ArraySyntax";
import { BooleanSyntax } from "./Properties/Syntax/BooleanSyntax";
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
import { ExportSyntax } from "./Properties/Syntax/ExportSyntax";
import { FileSyntax } from "./Properties/Syntax/FileSyntax";
import { FunctionSyntax } from "./Properties/Syntax/FunctionSyntax";
import { ImportSyntax } from "./Properties/Syntax/ImportSyntax";
import { InterfaceSyntax } from "./Properties/Syntax/InterfaceSyntax";
import { LambdaSyntax } from "./Properties/Syntax/LambdaSyntax";
import { LambdaTypeInlineSyntax } from "./Properties/Syntax/LambdaTypeInlineSyntax";
import { ListNewItemsSyntax } from "./Properties/Syntax/ListNewItemsSyntax";
import { ListNewSizedSyntax } from "./Properties/Syntax/ListNewSizedSyntax";
import { ListSliceSupport, ListSliceSyntax } from "./Properties/Syntax/ListSliceSyntax";
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
import { ReturnTypePosition } from "./Properties/Syntax/ReturnTypePosition";

/**
 * A summary of information for the PowerShell language.
 */
export class PowerShell extends Language {
    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.directoryCase = CaseStyle.DirectoryUpperCase;
        general.extension = ".ps1";
        general.fileCase = CaseStyle.PascalCase;
        general.name = "PowerShell";
    }

    /**
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.mainFile = "Main.ps1";
        projects.metadataFiles = {};
        projects.nameFormat = CaseStyle.PackageUpperCase;
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
        arrays.className = "Array";
        arrays.initializeLeft = "@(";
        arrays.initializeRight = ")";
        arrays.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
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
        booleans.className = "boolean";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param functions   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionSyntax(functions: ClassMemberFunctionSyntax): void {
        functions.privatePrefix = "";
        functions.protectedPrefix = "";
        functions.publicPrefix = "";

        functions.abstractDeclaration = "abstract ";
        functions.declarationPrefix = "";
        functions.includeThisReference = false;
        functions.returnTypeLeft = "[";
        functions.returnTypePosition = ReturnTypePosition.BeforeName;
        functions.returnTypeRight = "] ";
        functions.private = "";
        functions.privateCase = CaseStyle.CamelCase;
        functions.protected = "";
        functions.protectedCase = CaseStyle.CamelCase;
        functions.public = "";
        functions.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on class member variables.
     *
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableSyntax(variables: ClassMemberVariableSyntax): void {
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "";
        variables.protectedPrefix = "";
        variables.publicPrefix = "";

        variables.private = "$";
        variables.protected = "$";
        variables.protectedCase = CaseStyle.PascalCase;
        variables.public = "$";
        variables.publicCase = CaseStyle.PascalCase;
    }

    /**
     * Generates metadata on classes.
     *
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassSyntax(classes: ClassSyntax): void {
        classes.declareEnd = "}";
        classes.declareExtendsRight = "";
        classes.declareStartLeft = "class ";
        classes.newStart = "new ";
        classes.statics.labelBeforePublicity = false;
        classes.this = "$this";

        classes.abstractDeclaration = "abstract ";
        classes.abstractsSupported = true;
        classes.aliases = {
            boolean: "bool",
            dictionary: "Dictionary",
            list: "List",
            number: "double",
        };

        classes.constructors.baseConstructor = "base";
        classes.constructors.baseShorthand = true;
        classes.constructors.private = "";
        classes.constructors.protected = "";
        classes.constructors.public = "";

        classes.declareExtendsLeft = " : ";
        classes.declareImplementsLeft = " : ";
        classes.declareStartRight = " {";

        classes.instanceOf = new NativeCallSyntax(" is ", NativeCallScope.Operator, NativeCallType.FloatingRight);

        classes.generics.used = true;
        classes.generics.left = "[";
        classes.generics.middle = ", ";
        classes.generics.right = "]";
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionSyntax(functions: ClassStaticFunctionSyntax): void {
        functions.label = "static ";
        functions.privatePrefix = "";
        functions.protectedPrefix = "";
        functions.publicPrefix = "";

        functions.private = "private ";
        functions.privateCase = CaseStyle.PascalCase;
        functions.protected = "protected ";
        functions.protectedCase = CaseStyle.PascalCase;
        functions.public = "public ";
        functions.publicCase = CaseStyle.PascalCase;
    }

    /**
     * Generates metadata on class static variables.
     *
     * @param members   A property container for metadata on class static variables.
     */
    protected generateClassStaticVariableSyntax(variables: ClassStaticVariableSyntax): void {
        variables.label = "static ";
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "";
        variables.protectedPrefix = "";
        variables.publicPrefix = "";

        variables.private = "private ";
        variables.privateCase = CaseStyle.CamelCase;
        variables.protected = "protected ";
        variables.protectedCase = CaseStyle.PascalCase;
        variables.public = "public ";
        variables.publicCase = CaseStyle.PascalCase;
    }

    /**
     * Generates metadata on comments.
     *
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentSyntax(comments: CommentSyntax): void {
        comments.blockEnd = "#>";
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = "<#";

        comments.docEnd = "#>";
        comments.docLineEnd = "";
        comments.docLineStart = "";
        comments.docStart = "<#";
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
        conditionals.elif = "elseif";
        conditionals.else = "else";
        conditionals.end = "}";
        conditionals.if = "if";
        conditionals.startLeft = " (";

        conditionals.continueLeft = "} ";
        conditionals.continueRight = " {";
        conditionals.startRight = ") {";
    }

    /**
     * Generates properties on dictionaries.
     *
     * @param dictionaries   The property container for metadata on dictionaries.
     */
    protected generateDictionarySyntax(dictionaries: DictionarySyntax): void {
        dictionaries.className = "dict";
        dictionaries.containsKey = new NativeCallSyntax("ContainsKey", NativeCallScope.Member, NativeCallType.Function);
        dictionaries.getLeft = "[";
        dictionaries.getRight = "]";
        dictionaries.initializeAsLiteral = "@{}";
        dictionaries.initializeEnd = "}";
        dictionaries.initializeNewStart = "@{";
        dictionaries.initializePairComma = "";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = " = ";
        dictionaries.initializePairRight = ";";
        dictionaries.initializeStart = "@{";
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
        enums.declareCommaRight = "";
        enums.declareLastRight = "";
        enums.declareExternal = "Enum {0} {";
        enums.declareInternal = "Enum {0} {";
        enums.declareValueLeft = " = ";
        enums.declareValueRight = "";
        enums.declareValues = true;
        enums.isObject = false;
        enums.requiredImports = [];
        enums.valueLeft = "([";
        enums.valueMiddle = "]::";
        enums.valueRight = ")";
    }

    /**
     * Generates metadata on exceptions.
     *
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionSyntax(exceptions: ExceptionSyntax): void {
        exceptions.blockEnd = "} ";
        exceptions.blockEnd = "}\n";
        exceptions.catch = "catch";
        exceptions.catchStartLink = " ";
        exceptions.catchStartMiddle = " (";
        exceptions.catchStartRight = ") {";
        exceptions.catchStartRight = ") {";
        exceptions.className = "Exception";
        exceptions.finally = "finally";
        exceptions.finallyStartRight = " {";
        exceptions.finallyStartRight = " {";
        exceptions.requiredImports = [];
        exceptions.requiresExceptionType = true;
        exceptions.throw = "throw new";
        exceptions.throwMiddle = "(";
        exceptions.throwRight = ")";
        exceptions.try = "try";
        exceptions.tryStartRight = " {";
        exceptions.tryStartRight = " {";
        exceptions.variablePrefix = "";
    }

    /**
     * Generates metadata on exported constructs.
     *
     * @param members   A property container for metadata on exported constructs.
     */
    protected generateExportSyntax(exports: ExportSyntax): void {
        exports.exportedLeft = "";
        exports.internal = "";
    }

    /**
     * Generates metadata on file contents.
     *
     * @param file   The property container for metadata on contents.
     */
    protected generateFileSyntax(files: FileSyntax): void {
        files.endLines = [];
        files.indentation = 0;
        files.startCase = CaseStyle.FileSystemUpperCase;
        files.startLines = [];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionSyntax(functions: FunctionSyntax): void {
        functions.callLeft = " ";
        functions.callMiddle = " ";
        functions.callRight = "";
        functions.case = CaseStyle.DashUpperCase;
        functions.defineEnd = "}";
        functions.defineStartLeft = "function ";
        functions.defineStartMiddle = "";
        functions.defineStartRight = " {";
        functions.explicitNewStaticGenericType = true;
        functions.requiresExceptions = false;
        functions.returnTypePosition = ReturnTypePosition.Hidden;
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportSyntax(imports: ImportSyntax): void {
        imports.case = CaseStyle.DirectoryUpperCase;
        imports.explicitAbsoluteFileName = false;
        imports.explicitItems = false;
        imports.leftAbsolute = '. "';
        imports.leftLocal = '. "./';
        imports.right = '.ps1"';
        imports.transformFileNames = true;
        imports.removeFirstPathComponent = false;
        imports.useLocalRelativeImports = true;
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
        lists.asArray = false;
        lists.className = "System.Collections.Generic.List";
        lists.getLeft = "[";
        lists.getRight = "]";
        lists.initializeEmpty = "";
        lists.initializeStart = "New-Object ";
        lists.insert = new NativeCallSyntax("Insert", NativeCallScope.Member, NativeCallType.Function);
        lists.length = new NativeCallSyntax("Length", NativeCallScope.Static, NativeCallType.Function);
        lists.pop = new NativeCallSyntax("Pop", NativeCallScope.Member, NativeCallType.Function);
        lists.popFront = new NativeCallSyntax("Pop", NativeCallScope.Member, NativeCallType.Function);
        lists.popFront.withArguments(["0"]);
        lists.push = new NativeCallSyntax("Add", NativeCallScope.Member, NativeCallType.Function);
        lists.requiredImports = [];
        lists.setLeft = "[";
        lists.setMiddle = "] = ";
        lists.setRight = "";
        lists.sortNumbers = new NativeCallSyntax("Sort", NativeCallScope.Member, NativeCallType.Function);
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
     * Fills out metadata on list slicing.
     */
    protected generateListSliceSyntax(slices: ListSliceSyntax): void {
        slices.before = "";
        slices.left = "[";
        slices.middle = ":";
        slices.right = "]";
        slices.support = ListSliceSupport.Index;
        slices.untilEndDefaultStart = "";
        slices.untilEndLeft = "[";
        slices.untilEndMiddle = ":";
        slices.untilEndRightFromIndex = "]";
        slices.untilEndRightFromStart = "]";
    }

    /**
     * Fills out metadata on list sorting by keyed member numbers.
     */
    protected generateListSortMemberNumbersSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = " = ";
        sortMembers.lambdaMiddleLeft = " | Sort-Object -Property ";
        sortMembers.lambdaRight = "";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.OnProperty;
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
        sortMembers.type = ListSortMemberType.OnProperty;
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
        loops.forEachEnd = "}";
        loops.forEachKeyEnd = "}";
        loops.forEachPairEnd = "}";
        loops.forNumbersEnd = "}";
        loops.whileStartLeft = "while";
        loops.whileStartMiddle = " (";
        loops.whileStartRight = ") {";

        loops.foreach = "foreach";
        loops.forEachGetKeys = ".Keys";
        loops.forEachGetPairs = "";
        loops.forEachMiddle = " in ";
        loops.forEachPairsAsPair = true;
        loops.forEachPairsPairClass = "KeyValuePair";
        loops.forEachPairsRetrieveKey = ".Key";
        loops.forEachPairsRetrieveValue = ".Value";
        loops.forEachPairsTypedPair = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "foreach";
        loops.forEachStartIteration = " (";
        loops.forEachStartSeparator = " in ";
        loops.forEachStartRight = ")\n{";

        loops.whileStartRight = ")\n{";
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
        main.mainStartLines = [];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathSyntax(math: MathSyntax): void {
        const requiredImports = [new Import(["System"], ["Math"], ImportRelativity.Absolute)];

        math.absolute = new NativeCallSyntax("Math.Abs", NativeCallScope.Static, NativeCallType.Function).withImports(requiredImports);
        math.asInt = new NativeCallSyntax("[convert]::ToInt32", NativeCallScope.Static, NativeCallType.Function);
        math.ceiling = new NativeCallSyntax("Math.Ceiling", NativeCallScope.Static, NativeCallType.Function).withImports(requiredImports);
        math.floor = new NativeCallSyntax("Math.Floor", NativeCallScope.Static, NativeCallType.Function).withImports(requiredImports);
        math.max = new NativeCallSyntax("Math.Max", NativeCallScope.Static, NativeCallType.Function).withImports(requiredImports);
        math.min = new NativeCallSyntax("Math.Min", NativeCallScope.Static, NativeCallType.Function).withImports(requiredImports);
        math.power = new NativeCallSyntax("Math.Pow", NativeCallScope.Static, NativeCallType.Function).withImports(requiredImports);

        math.mathName = "Math";
    }

    /**
     * Generates metadata on new object instantiation.
     *
     * @param newProp   A property container for metadata on new object instantiation.
     */
    protected generateNewSyntax(newProp: NewSyntax): void {
        newProp.instantiationKind = NewInstantiationSyntaxKind.MemberMethodCall;
        newProp.methodLeft = "[";
        newProp.methodMiddle = "]::new(";
        newProp.methodRight = ")";
    }

    /**
     * Generates metadata on operators.
     *
     * @param operators   The property container for metadata on operators.
     */
    protected generateOperatorSyntax(operators: OperatorSyntax): void {
        operators.and = "-and";
        operators.decreaseBy = "-=";
        operators.divide = "/";
        operators.divideBy = "/=";
        operators.equals = "=";
        operators.equalTo = "-eq";
        operators.greaterThan = "-gt";
        operators.greaterThanOrEqualTo = "-gte";
        operators.increaseBy = "+=";
        operators.lessThan = "-lt";
        operators.lessThanOrEqualTo = "-lte";
        operators.minus = "-";
        operators.mod = "%";
        operators.multiplyBy = "*=";
        operators.not = "-not ";
        operators.notEqualTo = "-neq";
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
        printing.end = "";
        printing.requiredImports = [];
        printing.start = "Write-Output ";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetSyntax(sets: SetSyntax): void {
        sets.add = new NativeCallSyntax("add", NativeCallScope.Member, NativeCallType.Function);
        sets.className = "System.Collections.Generic.HashSet";
        sets.contains = new NativeCallSyntax("Contains", NativeCallScope.Member, NativeCallType.Function);
        sets.initializeAsNew = true;
        sets.initializeStart = "New-Object ";
        sets.requiredImports = [];
        sets.startItemsLeft = "({";
        sets.startItemsRight = "})";
        sets.startNoItems = "";
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
        formatting.formatRight = '"';
        formatting.formatInputLeft = "$(";
        formatting.formatInputRight = ")";
        formatting.includeIndexInFormatting = false;
        formatting.inputTypes = false;
        formatting.useInterpolation = true;
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
        toDouble.initialVariableValues = "$null";
        toDouble.initializeVariablesEnd = "\nif (";
        toDouble.perVariableConversion = "[Double]::TryParse({0}, [ref] ${1}";
        toDouble.validationBlockComparison = ")";
        toDouble.validationBlockLeft = "";
        toDouble.validationBlockMiddle = " && ";
        toDouble.validationBlockRight = ") {";
    }

    /**
     * Generates metadata on string-to-double conversions.
     *
     * @param toInt   A property container for metadata on string-to-double conversions.
     */
    protected generateStringToIntSyntax(toInt: StringToNumberSyntax): void {
        toInt.conversionType = StringToNumberStartConversionType.PredeclareConvertAndValidate;
        toInt.initialVariableValues = "$null";
        toInt.initializeVariablesEnd = "\nif (";
        toInt.perVariableConversion = "[Int32]::TryParse({0}, [ref] ${1})";
        toInt.perVariableConversionBetween = " -and ";
        toInt.validationBlockComparison = "";
        toInt.validationBlockLeft = "";
        toInt.validationBlockMiddle = "";
        toInt.validationBlockRight = ") {";
    }

    /**
     * Generates metadata on style.
     *
     * @param style   The property container for metadata on style.
     */
    protected generateStyleSyntax(style: StyleSyntax): void {
        style.semicolon = ";";
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
            false: "$false",
            infinity: "[double]::PositiveInfinity",
            true: "$true",
        };
        variables.namePrefix = "$";
        variables.null = "None";
        variables.isNullLeft = "";
        variables.isNotNullLeft = "";
        variables.isNotNullMiddle = " is not ";
        variables.isNullMiddle = " is ";
        variables.nullRight = "None";
    }
}
