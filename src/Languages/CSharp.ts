import { CaseStyle } from "./Casing/CaseStyle";
import { CLikeLanguage } from "./CLikeLanguage";
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
import { SetProperties } from "./Properties/SetProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringSubstringProperties, StringSubstringSupport } from "./Properties/StringSubstringProperties";
import { StyleProperties } from "./Properties/StyleProperties";
import { VariableProperties } from "./Properties/VariableProperties";

/**
 * A summary of information for the C# language.
 */
export class CSharp extends CLikeLanguage {
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
            "Length",
            NativeCallScope.Member,
            NativeCallType.Property);
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
        exports.exported = "public ";
        exports.internal = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param functions   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionProperties(functions: ClassMemberFunctionProperties): void {
        super.generateClassMemberFunctionProperties(functions);

        functions.abstractDeclaration = "abstract ";
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
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

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
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);

        classes.abstractDeclaration = "abstract ";
        classes.abstractsSupported = true;
        classes.aliases = {
            boolean: "bool",
            dictionary: "Dictionary",
            list: "List",
            number: "float"
        };

        classes.constructors.private = "private ";
        classes.constructors.protected = "protected ";
        classes.constructors.public = "public ";

        classes.declareExtendsLeft = " : ";
        classes.declareImplementsLeft = " : ";
        classes.declareStartRight = "\n{";

        classes.instanceOf = new NativeCallProperties(
            " is ",
            NativeCallScope.Operator,
            NativeCallType.FloatingRight);

        classes.superConstructor = "base";

        classes.generics.used = true;
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionProperties(functions: ClassStaticFunctionProperties): void {
        super.generateClassStaticFunctionProperties(functions);

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
    protected generateClassStaticVariableProperties(variables: ClassStaticVariableProperties): void {
        super.generateClassStaticVariableProperties(variables);

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
    protected generateCommentProperties(comments: CommentProperties): void {
        super.generateCommentProperties(comments);

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
            todo: "todo"
        };
        comments.docTagsWithParameters = {
            parameter: "name"
        };
    }

    /**
     * Generates metadata on conditionals.
     *
     * @param conditionals   A property container for metadata on conditionals.
     */
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
        super.generateConditionalProperties(conditionals);

        conditionals.continueLeft = "}\n";
        conditionals.continueRight = "{";
        conditionals.startRight = ")\n{";
    }

    /**
     * Generates metadata on dictionaries.
     *
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        dictionaries.className = "Dictionary";
        dictionaries.containsKey = new NativeCallProperties(
            "ContainsKey",
            NativeCallScope.Member,
            NativeCallType.Function);
        dictionaries.keys = new NativeCallProperties(
            "Keys",
            NativeCallScope.Member,
            NativeCallType.Property);
        dictionaries.initializeAsNew = true;
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "{ ";
        dictionaries.initializePairMiddle = ", ";
        dictionaries.initializePairRight = " }";
        dictionaries.initializeStart = "\n{";
        dictionaries.requiredImports = [
            new Import(
                ["system", "collections", "generic"],
                ["Dictionary"],
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

        enums.declareStartRight = "\n{";
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

        exceptions.className = "Error";

        exceptions.tryStartRight = "\n{";
        exceptions.finallyStartRight = "\n{";
        exceptions.catchStartRight = ")\n{";

        exceptions.blockEnd = "}\n";
    }

    /**
     * Generates metadata on file contents.
     *
     * @param files   The property container for metadata on file contents.
     */
    protected generateFileProperties(files: FileProperties): void {
        files.endLines = ["}"];
        files.indentation = 1;
        files.startCase = CaseStyle.PackageUpperCase;
        files.startLines = [
            "namespace {1}",
            "{",
        ];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

        functions.case = CaseStyle.PascalCase;

        functions.defineStartLeft = " ";
        functions.defineStartRight = "\n{";
    }

    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.name = "C#";
        general.extension = ".cs";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.PackageUpperCase;
        imports.explicit = false;
        imports.leftAbsolute = "using ";
        imports.leftLocal = "using ";
        imports.right = ";";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateInterfaceProperties(interfaces: InterfaceProperties): void {
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
        lists.className = "List";

        lists.addList = new NativeCallProperties(
            "AddRange",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.length = new NativeCallProperties(
            "Count",
            NativeCallScope.Member,
            NativeCallType.Property);

        lists.pop = new NativeCallProperties(
            "RemoveAt",
            NativeCallScope.Member,
            NativeCallType.Function)
            .withArguments([
                "{0}.Count - 1"
            ]);

        lists.popFront = new NativeCallProperties(
            "RemoveAt",
            NativeCallScope.Member,
            NativeCallType.Function)
            .withArguments([
                "0"
            ]);

        lists.push = new NativeCallProperties(
            "Add",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.sort = new NativeCallProperties(
            "Sort",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.requiredImports = [
            new Import(
                ["system", "collections", "generic"],
                ["List"],
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

        loops.foreach = "foreach";
        loops.forEachGetKeys = ".Keys";
        loops.forEachGetPairs = "";
        loops.forEachMiddle = " in ";
        loops.forEachPairsAsPair = true;
        loops.forEachPairsPairClass = "KeyValuePair";
        loops.forEachPairsRetrieveKey = ".Key";
        loops.forEachPairsRetrieveValue = ".Value";
        loops.forEachRight = "";

        loops.forEachStartLeft = "foreach";
        loops.forEachStartItteration = " (";
        loops.forEachStartSeparator = " in ";
        loops.forEachStartRight = ")\n{";

        loops.whileStartRight = ")\n{";
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
            "class Program",
            "{"
        ];
        main.mainEndLines = [
            "}"
        ];
        main.mainIndentation = 1;
        main.mainStartLines = [
            "public static void Main()",
            "{"
        ];
    }

    /**
     * Generates metadata on math.
     *
     * @param math   A property container for metadata on math.
     */
    protected generateMathProperties(math: MathProperties): void {
        const requiredImports = [
            new Import(
                ["system"],
                ["Math"],
                ImportRelativity.Absolute)
        ];

        math.absolute = new NativeCallProperties(
            "Math.Abs",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports(requiredImports);
        math.ceiling = new NativeCallProperties(
            "Math.Ceiling",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports(requiredImports);
        math.floor = new NativeCallProperties(
            "Math.Floor",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports(requiredImports);
        math.max = new NativeCallProperties(
            "Math.Max",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports(requiredImports);
        math.min = new NativeCallProperties(
            "Math.Min",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports(requiredImports);
        math.power = new NativeCallProperties(
            "Math.Pow",
            NativeCallScope.Static,
            NativeCallType.Function)
            .withImports(requiredImports);

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
        numbers.className = "float";
    }

    /**
     * Generates metadata on parameters.
     *
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterProperties(parameters: ParameterProperties): void {
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
    protected generatePrintingProperties(printing: PrintingProperties): void {
        printing.end = ")";
        printing.requiredImports = [
            new Import(
                ["system"],
                ["Dictionary"],
                ImportRelativity.Absolute)
        ];
        printing.start = "Console.WriteLine(";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetProperties(sets: SetProperties): void {
        const requiredImports: Import[] = [
            new Import(
                ["system", "collections", "generic"],
                ["Dictionary"],
                ImportRelativity.Absolute)
        ];

        sets.add = new NativeCallProperties(
            "Add",
            NativeCallScope.Member,
            NativeCallType.Function);

        sets.className = "HashSet";

        sets.contains = new NativeCallProperties(
            "Contains",
            NativeCallScope.Member,
            NativeCallType.Function)
            .withImports(requiredImports);

        sets.initializeAsNew = true;
        sets.initializeStart = "";

        sets.toArray = new NativeCallProperties(
            "ToArray",
            NativeCallScope.Member,
            NativeCallType.Function)
            .withImports(requiredImports);

        sets.toList = new NativeCallProperties(
            "ToList",
            NativeCallScope.Member,
            NativeCallType.Function)
            .withImports(requiredImports);

        sets.requiredImports = requiredImports;
        sets.startItemsLeft = "[";
        sets.startItemsRight = "]";
        sets.typeLeft = "<";
        sets.typeRight = ">";
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatProperties(formatting: StringFormatProperties): void {
        formatting.formatLeft = "string.Format(\"";
        formatting.formatMiddle = "\", ";
        formatting.formatAbbreviated = "\"";
        formatting.formatRight = ")";
        formatting.formatInputLeft = "{";
        formatting.formatInputRight = "}";
        formatting.inputTypes = false;
        formatting.useInterpolation = false;
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

        strings.caseLower = new NativeCallProperties(
            "ToLower",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.caseUpper = new NativeCallProperties(
            "ToUpper",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.className = "string";

        strings.index = new NativeCallProperties(
            "IndexOf",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.length = new NativeCallProperties(
            "Length",
            NativeCallScope.Member,
            NativeCallType.Property);
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringProperties(substrings: StringSubstringProperties): void {
        substrings.defaultEnd = "";
        substrings.leftIndex = ".SubString(";
        substrings.leftLength = ".SubString(";
        substrings.middle = ", ";
        substrings.right = ")";
        substrings.support = StringSubstringSupport.Length;
    }

    /**
     * Generates metadata on style.
     *
     * @param style   A property container for metadata on style.
     */
    protected generateStyleProperties(style: StyleProperties): void {
        super.generateStyleProperties(style);

        style.separateBraceLines = true;
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            infinity: "float.PositiveInfinity"
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
