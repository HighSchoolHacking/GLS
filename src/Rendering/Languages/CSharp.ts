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
 * A summary of information for the C# language.
 */
export class CSharp extends Language {
    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.directoryCase = CaseStyle.DirectoryUpperCase;
        general.extension = ".cs";
        general.fileCase = CaseStyle.PascalCase;
        general.name = "C#";
    }

    /**
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.mainFile = "Main.cs";
        projects.metadataFiles = {
            "{name}.nuspec": [
                `<?xml version="1.0"?>`,
                `<package xmlns="http://schemas.microsoft.com/packaging/2010/07/nuspec.xsd">`,
                `  <metadata>`,
                `    <id>{name}</id>`,
                `    <title>{name}</title>`,
                `    <version>{version}</version>`,
                `    <licenseUrl>{url}/blob/master/LICENSE.md</licenseUrl>`,
                `    <projectUrl>{url}</projectUrl>`,
                `    <description>`,
                `      {description}`,
                `    </description>`,
                `  </metadata>`,
                `</package>`,
            ],
        };
        projects.nameFormat = CaseStyle.PackageUpperCase;
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
        arrays.length = new NativeCallSyntax("Length", NativeCallScope.Member, NativeCallType.Property);
        arrays.requiredImports = [];
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
        booleans.className = "bool";
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
        functions.privateCase = CaseStyle.PascalCase;
        functions.protected = "protected ";
        functions.protectedCase = CaseStyle.PascalCase;
        functions.public = "public ";
        functions.publicCase = CaseStyle.PascalCase;
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
        variables.protectedCase = CaseStyle.PascalCase;
        variables.public = "public ";
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
        classes.this = "this";

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
        classes.constructors.private = "private ";
        classes.constructors.protected = "protected ";
        classes.constructors.public = "public ";

        classes.declareExtendsLeft = " : ";
        classes.declareImplementsLeft = " : ";
        classes.declareStartRight = "\n{";

        classes.instanceOf = new NativeCallSyntax(" is ", NativeCallScope.Operator, NativeCallType.FloatingRight);

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
        comments.blockEnd = "*/";
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = "/*";
        comments.lineLeft = "// ";
        comments.lineRight = "";

        comments.docAsXml = true;
        comments.docEnd = "\0";
        comments.docLineEnd = "";
        comments.docLineStart = "/// ";
        comments.docStart = "\0";
        comments.docTagAliases = {
            note: "remarks",
            parameter: "param",
            returns: "returns",
            summary: "summary",
            todo: "todo",
        };
        comments.docTagsWithParameters = {
            parameter: "name",
        };
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

        conditionals.continueLeft = "}\n";
        conditionals.continueRight = "{";
        conditionals.startRight = ")\n{";
    }

    /**
     * Generates metadata on dictionaries.
     *
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected generateDictionarySyntax(dictionaries: DictionarySyntax): void {
        dictionaries.className = "Dictionary";
        dictionaries.containsKey = new NativeCallSyntax("ContainsKey", NativeCallScope.Member, NativeCallType.Function);
        dictionaries.getLeft = "[";
        dictionaries.getRight = "]";
        dictionaries.keys = new NativeCallSyntax("Keys", NativeCallScope.Member, NativeCallType.Property);
        dictionaries.initializeAsNew = true;
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "{ ";
        dictionaries.initializePairMiddle = ", ";
        dictionaries.initializePairRight = " }";
        dictionaries.initializeStart = "\n{";
        dictionaries.requiredImports = [new Import(["System", "Collections", "Generic"], ["Dictionary"], ImportRelativity.Absolute)];
        dictionaries.setLeft = "[";
        dictionaries.setMiddle = "] = ";
        dictionaries.setRight = "";
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

        enums.declareStartRight = "\n{";
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
        exceptions.blockEnd = "}\n";
        exceptions.catch = "catch";
        exceptions.catchStartLink = " ";
        exceptions.catchStartMiddle = " (";
        exceptions.catchStartRight = ") {";
        exceptions.catchStartRight = ")\n{";
        exceptions.className = "Exception";
        exceptions.finally = "finally";
        exceptions.finallyStartRight = " {";
        exceptions.finallyStartRight = "\n{";
        exceptions.requiredImports = [new Import(["System"], ["Exception"], ImportRelativity.Absolute)];
        exceptions.requiresExceptionType = true;
        exceptions.throw = "throw new";
        exceptions.throwMiddle = "(";
        exceptions.throwRight = ")";
        exceptions.try = "try";
        exceptions.tryStartRight = " {";
        exceptions.tryStartRight = "\n{";
        exceptions.variablePrefix = "";
    }

    /**
     * Generates metadata on file contents.
     *
     * @param files   The property container for metadata on file contents.
     */
    protected generateFileSyntax(files: FileSyntax): void {
        files.endLines = ["}"];
        files.indentation = 1;
        files.startCase = CaseStyle.PackageUpperCase;
        files.startLines = ["namespace {1}", "{"];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionSyntax(functions: FunctionSyntax): void {
        functions.defineEnd = "}";
        functions.explicitReturns = true;
        functions.requiresExceptions = false;

        functions.case = CaseStyle.PascalCase;

        functions.defineStartLeft = " ";
        functions.defineStartRight = "\n{";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportSyntax(imports: ImportSyntax): void {
        imports.case = CaseStyle.PackageUpperCase;
        imports.explicitItems = false;
        imports.leftAbsolute = "using ";
        imports.leftLocal = "using ";
        imports.right = ";";
    }

    /**
     * Generates metadata on interfaces.
     *
     * @param interfaces   A property container for metadata on interfaces.
     */
    protected generateInterfaceSyntax(interfaces: InterfaceSyntax): void {
        interfaces.declareStartLeft = "interface ";
        interfaces.declareStartRight = "\n{";
        interfaces.declareExtendsLeft = " : ";
        interfaces.declareExtendsRight = ", ";
        interfaces.declareEnd = "}";
        interfaces.declareMethodLeft = "";
        interfaces.declareMethodMiddle = "(";
        interfaces.declareMethodRight = ")";
        interfaces.declareImplementsExplicit = false;
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
        lambdas.functionMiddle = ") => ";
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
        typeInline.leftByParameterCount = ["Func<", "Func<", "Func<"];
        typeInline.middleWithoutParameters = "";
        typeInline.middleWithParameters = ", ";
        typeInline.requiredImports = [];
        typeInline.right = ">";
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on lists.
     */
    protected generateListSyntax(lists: ListSyntax): void {
        lists.addList = new NativeCallSyntax("AddRange", NativeCallScope.Member, NativeCallType.Function);
        lists.className = "List";
        lists.getLeft = "[";
        lists.getRight = "]";
        lists.length = new NativeCallSyntax("Count", NativeCallScope.Member, NativeCallType.Property);
        lists.pop = new NativeCallSyntax("RemoveAt", NativeCallScope.Member, NativeCallType.Function).withArguments(["{0}.Count - 1"]);
        lists.popFront = new NativeCallSyntax("RemoveAt", NativeCallScope.Member, NativeCallType.Function).withArguments(["0"]);
        lists.push = new NativeCallSyntax("Add", NativeCallScope.Member, NativeCallType.Function);
        lists.requiredImports = [new Import(["System", "Collections", "Generic"], ["List"], ImportRelativity.Absolute)];
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
        newItems.itemLeft = "";
        newItems.itemRight = ", ";
        newItems.left = " { ";
        newItems.right = "}";
    }

    /**
     * Fills out metadata on fixed size list creation.
     */
    protected generateListNewSizedSyntax(newSized: ListNewSizedSyntax): void {
        newSized.includeType = true;
        newSized.left = "new List<";
        newSized.middle = ">(";
        newSized.right = ")";
    }

    /**
     * Fills out metadata on list sorting by keyed member numbers.
     */
    protected generateListSortMemberNumbersSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".Sort((";
        sortMembers.lambdaMiddleLeft = ") => ";
        sortMembers.lambdaMiddleRight = " < ";
        sortMembers.lambdaRight = " ? -1 : 1)";
        sortMembers.requiredImports = [new Import(["System"], ["List"], ImportRelativity.Absolute)];
        sortMembers.type = ListSortMemberType.KeyComparator;
    }

    /**
     * Fills out metadata on list sorting by keyed member strings.
     */
    protected generateListSortMemberStringsSyntax(sortMembers: ListSortMembersSyntax): void {
        sortMembers.lambdaLeft = ".Sort((";
        sortMembers.lambdaMiddleLeft = ") => ";
        sortMembers.lambdaMiddleRight = ".CompareTo(";
        sortMembers.lambdaRight = "))";
        sortMembers.requiredImports = [new Import(["System"], ["List"], ImportRelativity.Absolute)];
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
        main.contextEndLines = ["}"];
        main.contextIndentation = 1;
        main.contextStartLines = ["class Program", "{"];
        main.group = "Program";
        main.mainEndLines = ["}"];
        main.mainIndentation = 1;
        main.mainStartLines = ["public static void Main()", "{"];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathSyntax(math: MathSyntax): void {
        const requiredImports = [new Import(["System"], ["Math"], ImportRelativity.Absolute)];

        math.absolute = new NativeCallSyntax("Math.Abs", NativeCallScope.Static, NativeCallType.Function).withImports(requiredImports);
        math.asInt = new NativeCallSyntax("(int)", NativeCallScope.Static, NativeCallType.FloatingLeft);
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
     * Generates metadata on parameters.
     *
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterSyntax(parameters: ParameterSyntax): void {
        parameters.restDeclarationAfter = false;
        parameters.restDeclarationType = true;
        parameters.restKeywordLeft = "params ";
        parameters.restKeywordMiddle = "[] ";
        parameters.restKeywordRight = "";
    }

    /**
     * Generates metadata on printing.
     *
     * @param parameters    A property container for metadata on printing.
     */
    protected generatePrintingSyntax(printing: PrintingSyntax): void {
        printing.end = ")";
        printing.requiredImports = [new Import(["System"], ["Dictionary"], ImportRelativity.Absolute)];
        printing.start = "Console.WriteLine(";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetSyntax(sets: SetSyntax): void {
        const requiredImports: Import[] = [new Import(["System", "Collections", "Generic"], ["Dictionary"], ImportRelativity.Absolute)];

        sets.add = new NativeCallSyntax("Add", NativeCallScope.Member, NativeCallType.Function);
        sets.className = "HashSet";
        sets.contains = new NativeCallSyntax("Contains", NativeCallScope.Member, NativeCallType.Function).withImports(requiredImports);
        sets.initializeAsNew = true;
        sets.initializeStart = "";
        sets.requiredImports = requiredImports;
        sets.startItemsLeft = "([";
        sets.startItemsRight = "])";
        sets.startNoItems = "()";
        sets.toArray = new NativeCallSyntax("ToArray", NativeCallScope.Member, NativeCallType.Function).withImports(requiredImports);
        sets.toList = new NativeCallSyntax("ToList", NativeCallScope.Member, NativeCallType.Function)
            .withImports(requiredImports)
            .withImports([new Import(["System", "Linq"], ["ToLinq"], ImportRelativity.Absolute)]);
        sets.typeLeft = "<";
        sets.typeRight = ">";
    }

    /**
     * Generates metadata on standalone functions.
     *
     * @param parameters   A property container for metadata on standalone functions.
     */
    protected generateStandaloneFunctionSyntax(standaloneFunctions: StandaloneFunctionSyntax): void {
        standaloneFunctions.includeStaticKeyword = true;
        standaloneFunctions.withinStaticClass = true;
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatSyntax(formatting: StringFormatSyntax): void {
        formatting.formatLeft = 'string.Format("';
        formatting.formatMiddle = '", ';
        formatting.formatAbbreviated = '"';
        formatting.formatRight = ")";
        formatting.formatInputLeft = "{";
        formatting.formatInputRight = "}";
        formatting.includeIndexInFormatting = true;
        formatting.inputTypes = false;
        formatting.useInterpolation = false;
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringSyntax(strings: StringSyntax): void {
        strings.caseLower = new NativeCallSyntax("ToLower", NativeCallScope.Member, NativeCallType.Function);
        strings.caseUpper = new NativeCallSyntax("ToUpper", NativeCallScope.Member, NativeCallType.Function);
        strings.className = "string";
        strings.concatenate = " + ";
        strings.indexLeft = "[";
        strings.indexOf = new NativeCallSyntax("IndexOf", NativeCallScope.Member, NativeCallType.Function);
        strings.indexOfNotFound = "-1";
        strings.indexRight = "]";
        strings.length = new NativeCallSyntax("Length", NativeCallScope.Member, NativeCallType.Property);
        strings.trim = new NativeCallSyntax("Trim", NativeCallScope.Member, NativeCallType.Function);
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringSyntax(substrings: StringSubstringSyntax): void {
        substrings.defaultEnd = "";
        substrings.leftIndex = ".SubString(";
        substrings.leftLength = ".SubString(";
        substrings.middle = ", ";
        substrings.right = ")";
        substrings.support = StringSubstringSupport.Length;
    }

    /**
     * Generates metadata on string-to-double conversions.
     *
     * @param toDouble   A property container for metadata on string-to-double conversions.
     */
    protected generateStringToDoubleSyntax(toDouble: StringToNumberSyntax): void {
        toDouble.conversionType = StringToNumberStartConversionType.ValidateDirectly;
        toDouble.requiredImports = [new Import(["System"], ["Double"], ImportRelativity.Absolute)];
        toDouble.validationBlockComparison = "double.TryParse({0}, out var {1})";
        toDouble.validationBlockLeft = "if (";
        toDouble.validationBlockMiddle = " && ";
        toDouble.validationBlockRight = ")\n{";
    }

    /**
     * Generates metadata on string-to-double conversions.
     *
     * @param toInt   A property container for metadata on string-to-double conversions.
     */
    protected generateStringToIntSyntax(toInt: StringToNumberSyntax): void {
        toInt.conversionType = StringToNumberStartConversionType.ValidateDirectly;
        toInt.requiredImports = [new Import(["System"], ["Int"], ImportRelativity.Absolute)];
        toInt.validationBlockComparison = "int.TryParse({0}, out var {1})";
        toInt.validationBlockLeft = "if (";
        toInt.validationBlockMiddle = " && ";
        toInt.validationBlockRight = ")\n{";
    }

    /**
     * Generates metadata on style.
     *
     * @param style   A property container for metadata on style.
     */
    protected generateStyleSyntax(style: StyleSyntax): void {
        style.semicolon = ";";
        style.separateBraceLines = true;
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
            infinity: "double.PositiveInfinity",
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
