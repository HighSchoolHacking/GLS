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
 * A summary of information for the Java language.
 */
export class Java extends Language {
    /**
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.mainFile = "Main.java";
        projects.metadataFiles = {
            "pom.xml": [
                `<?xml version="1.0" encoding="UTF-8"?>`,
                `<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">`,
                `    <modelVersion>4.0.0</modelVersion>`,
                ``,
                `    <licenses>`,
                `        <license>`,
                `            <name>{license}</name>`,
                `            <distribution>repo</distribution>`,
                `        </license>`,
                `    </licenses>`,
                ``,
                `    <scm>`,
                `        <url>{url}</url>`,
                `    </scm>`,
                `</project>`,
            ],
        };
        projects.nameFormat = CaseStyle.PackageLowerCase;
    }

    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.directoryCase = CaseStyle.PascalCase;
        general.extension = ".java";
        general.fileCase = CaseStyle.PascalCase;
        general.name = "Java";
    }

    /**
     * Generates metadata on class generics.
     *
     * @param members   A property container for metadata on class generics.
     */
    protected generateClassGenericSyntax(generics: ClassGenericSyntax): void {
        generics.left = "<";
        generics.middle = ", ";
        generics.right = ">";
    }

    /**
     * Generates metadata on arrays.
     *
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArraySyntax(arrays: ArraySyntax): void {
        arrays.className = "Array";
        arrays.initializeAsNew = true;
        arrays.initializeByType = true;
        arrays.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
        arrays.requiredImports = [new Import(["java", "util"], ["Arrays"], ImportRelativity.Absolute)];
    }

    /**
     * Generates metadata on fixed size array creation.
     *
     * @param arrays   A property container for metadata on fixed size array creation.
     */
    protected generateArrayNewSizedSyntax(newSized: ArrayNewSizedSyntax): void {
        newSized.includeType = true;
        newSized.left = "new ";
        newSized.middle = "[";
        newSized.right = "]";
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
     * Generates metadata on exported classes.
     *
     * @param members   A property container for metadata on exported classes.
     */
    protected generateClassExportSyntax(exports: ClassExportSyntax): void {
        exports.exportedLeft = "public ";
        exports.internal = "";
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
        functions.includeThisReference = false;
        functions.private = "private ";
        functions.privateCase = CaseStyle.CamelCase;
        functions.protected = "protected ";
        functions.protectedCase = CaseStyle.CamelCase;
        functions.public = "public ";
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
        classes.this = "this";

        classes.abstractDeclaration = "abstract ";
        classes.abstractsSupported = true;
        classes.aliases = {
            boolean: "boolean",
            dictionary: "HashMap",
            list: "ArrayList",
            number: "double",
            string: "String",
        };

        classes.constructors.baseConstructor = "super";
        classes.constructors.private = "private ";
        classes.constructors.protected = "protected ";
        classes.constructors.public = "public ";

        classes.declareExtendsLeft = " extends ";
        classes.declareImplementsLeft = " implements ";
        classes.declareStartRight = " {";

        classes.instanceOf = new NativeCallSyntax(" instanceof ", NativeCallScope.Operator, NativeCallType.FloatingRight);

        classes.generics.used = true;
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
        functions.privateCase = CaseStyle.CamelCase;
        functions.protected = "protected ";
        functions.protectedCase = CaseStyle.CamelCase;
        functions.public = "public ";
        functions.publicCase = CaseStyle.CamelCase;
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
        variables.protectedCase = CaseStyle.CamelCase;
        variables.public = "public ";
        variables.publicCase = CaseStyle.CamelCase;
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
        comments.lineLeft = "// ";
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
     * Generates metadata on dictionaries.
     *
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected generateDictionarySyntax(dictionaries: DictionarySyntax): void {
        dictionaries.className = "HashMap";
        dictionaries.containsKey = new NativeCallSyntax("containsKey", NativeCallScope.Member, NativeCallType.Function);
        dictionaries.keys = new NativeCallSyntax("keySet", NativeCallScope.Member, NativeCallType.Function);
        dictionaries.initializeAsNew = true;
        dictionaries.initializeEnd = "}}";
        dictionaries.initializePairComma = "";
        dictionaries.initializeStart = "() {{";
        dictionaries.initializePairLeft = "put(";
        dictionaries.initializePairMiddle = ", ";
        dictionaries.initializePairRight = ");";
        dictionaries.requiredImports = [new Import(["java", "util"], ["HashMap"], ImportRelativity.Absolute)];
        dictionaries.typeLeft = "<";
        dictionaries.typeMiddle = ", ";
        dictionaries.typeRight = ">";
    }

    /**
     * Generates metadata on enums.
     *
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumSyntax(enums: EnumSyntax): void {
        enums.declareStartLeft = "enum ";
        enums.declareValueLeft = " = ";
        enums.declareValueRight = "";
        enums.declareCommaRight = ",";
        enums.valueLeft = "";
        enums.valueMiddle = ".";
        enums.valueRight = "";

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
    protected generateExceptionSyntax(exceptions: ExceptionSyntax): void {
        exceptions.blockEnd = "} ";
        exceptions.catch = "catch";
        exceptions.catchStartLink = " ";
        exceptions.catchStartMiddle = " (";
        exceptions.catchStartRight = ") {";
        exceptions.className = "Exception";
        exceptions.finally = "finally";
        exceptions.finallyStartRight = " {";
        exceptions.requiredImports = [];
        exceptions.requiresExceptionType = true;
        exceptions.throw = "throw new";
        exceptions.throwMiddle = "(";
        exceptions.throwRight = ")";
        exceptions.try = "try";
        exceptions.tryStartRight = " {";
        exceptions.variablePrefix = "";
    }

    /**
     * Generates metadata on file contents.
     *
     * @param files   The property container for metadata on file contents.
     */
    protected generateFileSyntax(files: FileSyntax): void {
        files.endLines = [];
        files.importsAfterStartLines = true;
        files.indentation = 0;
        files.startCase = CaseStyle.PackageLowerCase;
        files.startLines = ["package {1};", ""];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionSyntax(functions: FunctionSyntax): void {
        functions.defineEnd = "}";
        functions.explicitReturns = true;

        functions.case = CaseStyle.CamelCase;

        functions.defineStartLeft = " ";
        functions.defineStartRight = " {";

        functions.requiresExceptions = true;
        functions.functionThrows = " throws ";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportSyntax(imports: ImportSyntax): void {
        imports.case = CaseStyle.PackageLowerCase;
        imports.explicitItems = true;
        imports.explicitLines = true;
        imports.leftAbsolute = "import ";
        imports.leftLocal = "import ";
        imports.middle = ".";
        imports.right = ";";
    }

    /**
     * Generates metadata on interfaces.
     *
     * @param interfaces   A property container for metadata on interfaces.
     */
    protected generateInterfaceSyntax(interfaces: InterfaceSyntax): void {
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
    protected generateLambdaSyntax(lambdas: LambdaSyntax): void {
        lambdas.callLeft = "(";
        lambdas.callRight = ")";
        lambdas.functionLeft = "(";
        lambdas.functionMiddle = ") -> ";
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
        typeInline.includeParameterNames = false;
        typeInline.leftByParameterCount = ["Supplier<", "Function<", "BiFunction<"];
        typeInline.middleWithoutParameters = "";
        typeInline.middleWithParameters = ", ";
        typeInline.right = ">";
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on lists.
     */
    protected generateListSyntax(lists: ListSyntax): void {
        lists.addList = new NativeCallSyntax("addAll", NativeCallScope.Member, NativeCallType.Function);
        lists.className = "ArrayList";
        lists.length = new NativeCallSyntax("size", NativeCallScope.Member, NativeCallType.Function);
        lists.pop = new NativeCallSyntax("remove", NativeCallScope.Member, NativeCallType.Function).withArguments(["{0}.size() - 1"]);
        lists.popFront = new NativeCallSyntax("remove", NativeCallScope.Member, NativeCallType.Function).withArguments(["0"]);
        lists.push = new NativeCallSyntax("add", NativeCallScope.Member, NativeCallType.Function);
        lists.requiredImports = [new Import(["java", "util"], ["ArrayList"], ImportRelativity.Absolute)];
        lists.sortNumbers = new NativeCallSyntax("sort", NativeCallScope.Member, NativeCallType.Function);
        lists.sortStrings = lists.sortNumbers;
    }

    /**
     * Fills out metadata on fixed size list creation.
     */
    protected generateListNewSizedSyntax(newSized: ListNewSizedSyntax): void {
        newSized.includeType = true;
        newSized.left = "new ArrayList<";
        newSized.middle = ">(";
        newSized.right = ")";
    }

    /**
     * Fills out metadata on list sorting by keyed member numbers.
     */
    protected generateListSortMemberNumbersSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".sort((";
        sortMembers.lambdaMiddleLeft = ") -> ";
        sortMembers.lambdaMiddleRight = " < ";
        sortMembers.lambdaRight = " ? 1 : -1)";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.KeyComparator;
    }

    /**
     * Fills out metadata on list sorting by keyed member strings.
     */
    protected generateListSortMemberStringsSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".sort((";
        sortMembers.lambdaMiddleLeft = ") -> ";
        sortMembers.lambdaMiddleRight = ".compareTo(";
        sortMembers.lambdaRight = " ? 1 : -1)";
        sortMembers.requiredImports = [];
        sortMembers.type = ListSortMemberType.KeyComparator;
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

        loops.foreach = "for";
        loops.forEachGetKeys = ".keySet()";
        loops.forEachGetPairs = ".entrySet()";
        loops.forEachMiddle = " : ";
        loops.forEachPairsAsPair = true;
        loops.forEachPairsPairClass = "Map.Entry";
        loops.forEachPairsRetrieveKey = ".getKey()";
        loops.forEachPairsRetrieveValue = ".getValue()";
        loops.forEachPairsTypedPair = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "for";
        loops.forEachStartIteration = " (";
        loops.forEachStartSeparator = " : ";
        loops.forEachStartRight = ") {";
    }

    /**
     * Generates metadata on main execution areas.
     *
     * @param main   A property container for metadata on main execution areas.
     */
    protected generateMainSyntax(main: MainSyntax): void {
        main.contextEndLines = ["}"];
        main.contextIndentation = 1;
        main.contextStartLines = ["class {0} {"];
        main.group = "{0}";
        main.mainEndLines = ["}"];
        main.mainIndentation = 1;
        main.mainStartLines = ["public static void main(String[] args) {"];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathSyntax(math: MathSyntax): void {
        math.absolute = new NativeCallSyntax("Math.abs", NativeCallScope.Static, NativeCallType.Function);
        math.asInt = new NativeCallSyntax("(int)Math.floor", NativeCallScope.Static, NativeCallType.Function);
        math.ceiling = new NativeCallSyntax("Math.ceil", NativeCallScope.Static, NativeCallType.Function);
        math.floor = new NativeCallSyntax("Math.floor", NativeCallScope.Static, NativeCallType.Function);
        math.max = new NativeCallSyntax("Math.max", NativeCallScope.Static, NativeCallType.Function);
        math.min = new NativeCallSyntax("Math.min", NativeCallScope.Static, NativeCallType.Function);
        math.power = new NativeCallSyntax("Math.pow", NativeCallScope.Static, NativeCallType.Function);
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
     * @param operators   A property container for metadata on operators.
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
    protected generatePrintingSyntax(printing: PrintingSyntax): void {
        printing.end = ")";
        printing.requiredImports = [];
        printing.start = "System.out.println(";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetSyntax(sets: SetSyntax): void {
        sets.add = new NativeCallSyntax("add", NativeCallScope.Member, NativeCallType.Function);
        sets.className = "HashSet";
        sets.contains = new NativeCallSyntax("contains", NativeCallScope.Member, NativeCallType.Function);
        sets.initializeAsNew = true;
        sets.initializeStart = "";
        sets.requiredImports = [new Import(["java", "util"], ["HashSet"], ImportRelativity.Absolute)];
        sets.startItemsLeft = "([";
        sets.startItemsRight = "])";
        sets.startNoItems = "()";
        sets.toArray = new NativeCallSyntax("toArray", NativeCallScope.Member, NativeCallType.Function);
        sets.toList = new NativeCallSyntax("new ArrayList<>", NativeCallScope.Static, NativeCallType.Function);
        sets.typeLeft = "<";
        sets.typeRight = ">";
    }

    /**
     * Generates metadata on standalone functions.
     *
     * @param parameters   A property container for metadata on standalone functions.
     */
    protected generateStandaloneFunctionSyntax(standaloneFunctions: StandaloneFunctionSyntax): void {
        standaloneFunctions.withinStaticClass = true;
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatSyntax(formatting: StringFormatSyntax): void {
        formatting.formatLeft = 'String.format("';
        formatting.formatMiddle = '", ';
        formatting.formatAbbreviated = '"';
        formatting.formatRight = ")";
        formatting.formatInputLeft = "%";
        formatting.formatInputRight = "";
        formatting.includeIndexInFormatting = true;
        formatting.inputTypes = true;
        formatting.useInterpolation = false;

        formatting.typeCodes = {
            char: "$c",
            double: "$f",
            int: "$d",
            string: "$s",
        };
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringSyntax(strings: StringSyntax): void {
        strings.concatenate = " + ";

        strings.caseLower = new NativeCallSyntax("toLowerCase", NativeCallScope.Member, NativeCallType.Function);

        strings.caseUpper = new NativeCallSyntax("toUpperCase", NativeCallScope.Member, NativeCallType.Function);

        strings.className = "String";

        strings.indexOf = new NativeCallSyntax("indexOf", NativeCallScope.Member, NativeCallType.Function);

        strings.indexOfNotFound = "-1";

        strings.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Function);

        strings.trim = new NativeCallSyntax("trim", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringSyntax(substrings: StringSubstringSyntax): void {
        substrings.defaultEnd = "";
        substrings.leftIndex = ".substring(";
        substrings.leftLength = ".substring(";
        substrings.middle = ", ";
        substrings.right = ")";
        substrings.support = StringSubstringSupport.Index;
    }

    /**
     * Generates metadata on string-to-double conversions.
     *
     * @param toDouble   A property container for metadata on string-to-double conversions.
     */
    protected generateStringToDoubleSyntax(toDouble: StringToNumberSyntax): void {
        toDouble.conversionType = StringToNumberStartConversionType.PredeclareConvertAndValidate;
        toDouble.initialVariableValues = "null";
        toDouble.initializeVariablesEnd = "\n\ntry {\n";
        toDouble.perVariableConversionStartLeft = "    ";
        toDouble.perVariableConversionStartMiddle = " = Double.parseDouble(";
        toDouble.perVariableConversionStartRight = ");\n";
        toDouble.validationBlockComparison = "{1} != null";
        toDouble.validationBlockLeft = "} catch (NumberFormatException e) { }\n\nif (";
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
        toInt.initialVariableValues = "null";
        toInt.initializeVariablesEnd = "\n\ntry {\n";
        toInt.perVariableConversionStartLeft = "    ";
        toInt.perVariableConversionStartMiddle = " = Int.parseInt(";
        toInt.perVariableConversionStartRight = ");\n";
        toInt.validationBlockComparison = "{1} != null";
        toInt.validationBlockLeft = "} catch (NumberFormatException e) { }\n\nif (";
        toInt.validationBlockMiddle = " && ";
        toInt.validationBlockRight = ") {";
    }

    /**
     * Generates metadata on style.
     *
     * @param style   A property container for metadata on style.
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
        unsupported.complaintEnd = "*/";
        unsupported.complaintStart = "/*";
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableSyntax(variables: VariableSyntax): void {
        variables.declarationRequired = true;

        variables.aliases = {
            infinity: "double.POSITIVE_INFINITY",
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
