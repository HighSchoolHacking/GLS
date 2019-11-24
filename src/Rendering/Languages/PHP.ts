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

/**
 * A summary of information for the PHP language.
 */
export class PHP extends Language {
    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.directoryCase = CaseStyle.SnakeCase;
        general.extension = ".php";
        general.fileCase = CaseStyle.SnakeCase;
        general.name = "PHP";
    }

    /**
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.mainFile = "index.php";
        projects.metadataFiles = {
            "composer.json": [
                `{`,
                `    "authors": [`,
                `        {`,
                `            "email": "{email}"`,
                `            "name": "{author}"`,
                `        }`,
                `    ],`,
                `    "description": "{description}",`,
                `    "homepage": "{homepage}",`,
                `    "license": "{license}",`,
                `    "name": "{name}",`,
                `}`,
            ],
        };
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
        arrays.className = "Array";
        arrays.length = new NativeCallSyntax("count", NativeCallScope.Static, NativeCallType.Function);
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
        newSized.left = "Array.new(";
        newSized.right = ")";
    }

    /**
     * Generates metadata on booleans.
     *
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanSyntax(booleans: BooleanSyntax): void {
        booleans.className = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param functions   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionSyntax(functions: ClassMemberFunctionSyntax): void {
        functions.access = "->";
        functions.privatePrefix = "";
        functions.protectedPrefix = "";
        functions.publicPrefix = "";

        functions.abstractDeclaration = "";
        functions.includeThisReference = false;
        functions.private = "function ";
        functions.privateCase = CaseStyle.CamelCase;
        functions.protected = "function ";
        functions.protectedCase = CaseStyle.CamelCase;
        functions.public = "function ";
        functions.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on class member variables.
     *
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableSyntax(variables: ClassMemberVariableSyntax): void {
        variables.access = "->";
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "$";
        variables.protectedPrefix = "$";
        variables.publicPrefix = "$";

        variables.private = "private ";
        variables.protected = "protected ";
        variables.protectedCase = CaseStyle.CamelCase;
        variables.public = "public ";
        variables.publicCase = CaseStyle.CamelCase;
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

        classes.abstractDeclaration = "";
        classes.aliases = {
            char: "string",
            double: "number",
            float: "number",
            int: "number",
        };

        classes.constructors.baseConstructor = "parent::";
        classes.constructors.private = "function ";
        classes.constructors.protected = "function ";
        classes.constructors.public = "function ";
        classes.constructors.keyword = "__construct";
        classes.constructors.useKeyword = true;

        classes.declareExtendsLeft = " extends ";
        classes.declareImplementsLeft = " implements ";
        classes.declareStartRight = " {";

        classes.instanceOf = new NativeCallSyntax(" instanceof ", NativeCallScope.Operator, NativeCallType.FloatingRight);

        classes.generics.used = false;
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionSyntax(functions: ClassStaticFunctionSyntax): void {
        functions.label = "self.";
        functions.private = "def ";
        functions.privateCase = CaseStyle.SnakeCase;
        functions.privatePrefix = "";
        functions.protected = "def ";
        functions.protectedCase = CaseStyle.SnakeCase;
        functions.protectedPrefix = "";
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

        variables.label = "@@";
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "";
        variables.protectedCase = CaseStyle.CamelCase;
        variables.protectedPrefix = "";
        variables.publicCase = CaseStyle.CamelCase;
        variables.publicPrefix = "";
    }

    /**
     * Generates metadata on comments.
     *
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentSyntax(comments: CommentSyntax): void {
        comments.blockEnd = "*/";
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = "/*";
        comments.lineLeft = "# ";
        comments.lineRight = "";

        comments.docEnd = " */";
        comments.docLineEnd = "";
        comments.docLineStart = " * ";
        comments.docTagAliases = {
            note: "remarks",
            parameter: "param",
            returns: "returns",
            summary: "",
            todo: "todo",
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
    protected generateConditionalSyntax(conditionals: ConditionalSyntax): void {
        conditionals.elif = "else if";
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
        dictionaries.className = "hash";
        dictionaries.containsKey = new NativeCallSyntax("array_key_exists", NativeCallScope.Static, NativeCallType.FunctionReverse);
        dictionaries.getLeft = "[";
        dictionaries.getRight = "]";
        dictionaries.initializeAsLiteral = "[]";
        dictionaries.initializeEnd = "]";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = " => ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "[";
        dictionaries.keys = new NativeCallSyntax("keys", NativeCallScope.Member, NativeCallType.Property);
        dictionaries.requiredImports = [];
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
        enums.declareCommaRight = ";";
        enums.declareLastRight = ";";
        enums.declareMemberStart = "const ";
        enums.declareExternal = "class {0} {";
        enums.declareInternal = "class {0} {";
        enums.declareValueLeft = " = ";
        enums.declareValueRight = "";
        enums.declareValues = true;
        enums.isObject = false;
        enums.requiredImports = [];
        enums.valueLeft = "";
        enums.valueMiddle = "::";
        enums.valueRight = "";
    }

    /**
     * Generates metadata on exceptions.
     *
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionSyntax(exceptions: ExceptionSyntax): void {
        exceptions.blockEnd = "} ";
        exceptions.catch = "catch";
        exceptions.catchStartLink = " ";
        exceptions.catchStartMiddle = " (Exception $";
        exceptions.catchStartRight = ") {";
        exceptions.className = "Error";
        exceptions.finally = "finally";
        exceptions.finallyStartRight = " {";
        exceptions.requiredImports = [];
        exceptions.requiresExceptionType = false;
        exceptions.throw = "throw new";
        exceptions.throwMiddle = "(";
        exceptions.throwRight = ")";
        exceptions.try = "try";
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
        files.importsAfterStartLines = true;
        files.indentation = 0;
        files.startCase = CaseStyle.FileSystemLowerCase;
        files.startLines = ["<?php"];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionSyntax(functions: FunctionSyntax): void {
        functions.case = CaseStyle.CamelCase;
        functions.defineEnd = "}";
        functions.defineStartLeft = "function ";
        functions.defineStartRight = " {";
        functions.explicitNewStaticGenericType = true;
        functions.explicitReturns = false;
        functions.requiresExceptions = false;
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportSyntax(imports: ImportSyntax): void {
        imports.case = CaseStyle.DirectoryLowerCase;
        imports.leftAbsolute = "require_once '";
        imports.leftLocal = "require_once __DIR__ . '/";
        imports.right = ".php';";
        imports.transformFileNames = true;
        imports.useLocalRelativeImports = true;
        imports.useLocalRelativePaths = true;
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
        lambdas.callLeft = ".call(";
        lambdas.callRight = ")";
        lambdas.functionLeft = "lambda { |";
        lambdas.functionMiddle = "| ";
        lambdas.functionRight = " }";
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
        lists.addList = new NativeCallSyntax("concat", NativeCallScope.Member, NativeCallType.Function);
        lists.asArray = true;
        lists.getLeft = "[";
        lists.getRight = "]";
        lists.insert = new NativeCallSyntax("insert", NativeCallScope.Member, NativeCallType.Function);
        lists.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
        lists.pop = new NativeCallSyntax("pop", NativeCallScope.Member, NativeCallType.Property);
        lists.popFront = new NativeCallSyntax("shift", NativeCallScope.Member, NativeCallType.Property);
        lists.push = new NativeCallSyntax("array_push", NativeCallScope.Static, NativeCallType.Function);
        lists.requiredImports = [];
        lists.setLeft = "[";
        lists.setMiddle = "] = ";
        lists.setRight = "";
        lists.sortNumbers = new NativeCallSyntax("sort!", NativeCallScope.Member, NativeCallType.Function);
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
        newSized.left = "Array.new(";
        newSized.right = ")";
    }

    /**
     * Fills out metadata on list slicing.
     */
    protected generateListSliceSyntax(slices: ListSliceSyntax): void {
        slices.before = "";
        slices.left = ".slice(";
        slices.middle = ", ";
        slices.right = ")";
        slices.support = ListSliceSupport.Length;
        slices.untilEndDefaultStart = "0";
        slices.untilEndLeft = ".slice(";
        slices.untilEndMiddle = "";
        slices.untilEndRightFromIndex = ")";
        slices.untilEndRightFromStart = ")";
    }

    /**
     * Fills out metadata on list sorting by keyed members.
     */
    protected generateListSortMemberNumbersSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ", function(";
        sortMembers.lambdaMiddleLeft = ") { return ";
        sortMembers.lambdaMiddleRight = " - ";
        sortMembers.lambdaRight = "; })";
        sortMembers.preLambdaStart = "usort(";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.GlobalLambda;
    }

    /**
     * Fills out metadata on list sorting by keyed members.
     */
    protected generateListSortMemberStringsSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".sort_by! {|";
        sortMembers.lambdaMiddleLeft = "| ";
        sortMembers.lambdaRight = "}";
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
        loops.forEachEnd = "}";
        loops.forEachKeyEnd = "}";
        loops.forEachPairEnd = "}";
        loops.forNumbersEnd = "}";
        loops.whileStartLeft = "while";
        loops.whileStartMiddle = " (";
        loops.whileStartRight = ") {";

        loops.foreach = "foreach";
        loops.forEachCollectionFirst = true;
        loops.forEachGetKeys = "";
        loops.forEachGetPairs = "";
        loops.forEachMiddle = " in ";
        loops.forEachPairsAsKeys = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "foreach";
        loops.forEachStartIteration = " (";
        loops.forEachStartSeparator = " as $";
        loops.forEachStartRight = ") {";
    }

    /**
     * Generates metadata on main execution areas.
     *
     * @param math   A property container for metadata on main execution areas.
     */
    protected generateMainSyntax(main: MainSyntax): void {
        main.contextEndLines = [];
        main.contextIndentation = 0;
        main.contextStartLines = [];
        main.group = "";
        main.mainEndLines = [];
        main.mainIndentation = 0;
        main.mainStartLines = [];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathSyntax(math: MathSyntax): void {
        math.absolute = new NativeCallSyntax("abs", NativeCallScope.Static, NativeCallType.Function);
        math.asInt = new NativeCallSyntax("floor", NativeCallScope.Static, NativeCallType.Function);
        math.ceiling = new NativeCallSyntax("ceil", NativeCallScope.Static, NativeCallType.Function);
        math.floor = new NativeCallSyntax("floor", NativeCallScope.Static, NativeCallType.Function);
        math.max = new NativeCallSyntax("max", NativeCallScope.Array, NativeCallType.Function);
        math.min = new NativeCallSyntax("min", NativeCallScope.Array, NativeCallType.Function);
        math.power = new NativeCallSyntax("pow", NativeCallScope.Array, NativeCallType.Function);
        math.mathName = "Math";
    }

    /**
     * Generates metadata on new object instantiation.
     *
     * @param newProp   A property container for metadata on new object instantiation.
     */
    protected generateNewSyntax(newProp: NewSyntax): void {
        newProp.instantiationKind = NewInstantiationSyntaxKind.Prefix;
        newProp.keyword = "new";
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
        printing.end = ' . "\\n"';
        printing.requiredImports = [];
        printing.start = "echo ";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetSyntax(sets: SetSyntax): void {
        sets.add = new NativeCallSyntax("[spl_object_hash(", NativeCallScope.Operator, NativeCallType.FloatingRight).withSeparator(
            ")] = 1",
        );
        sets.className = "[";
        sets.contains = new NativeCallSyntax("array_key_exists", NativeCallScope.Static, NativeCallType.FunctionReverse).withArguments([
            "spl_object_hash({0})",
            "{0}",
        ]);
        sets.initializeAsNew = false;
        sets.initializeStart = "";
        sets.requiredImports = [];
        sets.startItemsLeft = "([";
        sets.startItemsRight = "])";
        sets.startNoItems = "]";
        sets.toArray = new NativeCallSyntax("to_a", NativeCallScope.Member, NativeCallType.Function);
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
        formatting.formatLeft = 'sprintf("';
        formatting.formatMiddle = '", ';
        formatting.formatAbbreviated = 'sprintf("';
        formatting.formatRight = ")";
        formatting.formatInputLeft = "";
        formatting.formatInputRight = "";
        formatting.includeIndexInFormatting = false;
        formatting.inputTypes = true;
        formatting.useInterpolation = false;

        formatting.typeCodes = {
            char: "%c",
            double: "%f",
            int: "%d",
            string: "%s",
        };
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringSyntax(strings: StringSyntax): void {
        strings.caseLower = new NativeCallSyntax("downcase", NativeCallScope.Member, NativeCallType.Property);
        strings.caseUpper = new NativeCallSyntax("upcase", NativeCallScope.Member, NativeCallType.Property);
        strings.className = "string";
        strings.concatenate = " . ";
        strings.indexLeft = "[";
        strings.indexOf = new NativeCallSyntax("index", NativeCallScope.Member, NativeCallType.Function);
        strings.indexOfNotFound = "nil";
        strings.indexRight = "]";
        strings.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
        strings.trim = new NativeCallSyntax("strip", NativeCallScope.Member, NativeCallType.Property);
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringSyntax(substrings: StringSubstringSyntax): void {
        substrings.defaultEnd = "..-1";
        substrings.leftIndex = "[";
        substrings.leftLength = "[";
        substrings.middle = "..";
        substrings.right = "]";
        substrings.support = StringSubstringSupport.Length;
    }

    /**
     * Generates metadata on string-to-double conversions.
     *
     * @param toDouble   A property container for metadata on string-to-double conversions.
     */
    protected generateStringToDoubleSyntax(toDouble: StringToNumberSyntax): void {
        toDouble.conversionType = StringToNumberStartConversionType.ValidateAndConvert;
        toDouble.perVariableConversionStartLeft = "";
        toDouble.perVariableConversionStartMiddle = " = floatval(";
        toDouble.perVariableConversionStartRight = ");\n";
        toDouble.validationBlockComparison = "{0}";
        toDouble.validationBlockLeft = "if (is_numeric(";
        toDouble.validationBlockMiddle = ") && is_numeric(";
        toDouble.validationBlockRight = ")) {";
    }

    /**
     * Generates metadata on string-to-int conversions.
     *
     * @param toInt   A property container for metadata on string-to-int conversions.
     */
    protected generateStringToIntSyntax(toInt: StringToNumberSyntax): void {
        toInt.conversionType = StringToNumberStartConversionType.ValidateAndConvert;
        toInt.perVariableConversionStartLeft = "";
        toInt.perVariableConversionStartMiddle = " = intval(";
        toInt.perVariableConversionStartRight = ");\n";
        toInt.validationBlockComparison = "{0}";
        toInt.validationBlockLeft = "if (ctype_digit(";
        toInt.validationBlockMiddle = ") && ctype_digit(";
        toInt.validationBlockRight = ")) {";
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
        unsupported.complaintEnd = "=begin\n";
        unsupported.complaintStart = "\nend";
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableSyntax(variables: VariableSyntax): void {
        variables.declaration = "$";

        variables.aliases = {
            infinity: "double::Infinity",
        };
        variables.null = "Nil";
        variables.isNullLeft = "";
        variables.isNullMiddle = "";
        variables.isNotNullLeft = "!";
        variables.isNotNullMiddle = "";
        variables.namePrefix = "$";
        variables.nullRight = ".nil?";
    }
}
