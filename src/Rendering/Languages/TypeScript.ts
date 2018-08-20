import { StringToFloatStartConversionType } from "../Commands/IfStringToFloatStartCommand";
import { CaseStyle } from "./Casing/CaseStyle";
import { Language } from "./Language";
import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
import { ClassExportProperties } from "./Properties/ClassExportProperties";
import { ClassGenericProperties } from "./Properties/ClassGenericProperties";
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
import { OperatorProperties } from "./Properties/OperatorProperties";
import { ParameterProperties } from "./Properties/ParameterProperties";
import { PrintingProperties } from "./Properties/PrintingProperties";
import { SetProperties } from "./Properties/SetProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringSubstringProperties, StringSubstringSupport } from "./Properties/StringSubstringProperties";
import { StringToFloatProperties } from "./Properties/StringToFloatProperties";
import { StyleProperties } from "./Properties/StyleProperties";
import { VariableProperties } from "./Properties/VariableProperties";

/**
 * A summary of information for the TypeScript language.
 */
export class TypeScript extends Language {
    /**
     * Generates metadata on class generics.
     *
     * @param members   A property container for metadata on class generics.
     */
    protected generateClassGenericProperties(generics: ClassGenericProperties): void {
        generics.left = "<";
        generics.middle = ", ";
        generics.right = ">";
    }

    /**
     * Generates metadata on arrays.
     *
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArrayProperties(arrays: ArrayProperties): void {
        arrays.className = "Array";
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
        booleans.className = "boolean";
    }

    /**
     * Generates metadata on exported classes.
     *
     * @param members   A property container for metadata on exported classes.
     */
    protected generateClassExportProperties(exports: ClassExportProperties): void {
        exports.exported = "export ";
        exports.internal = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param functions   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionProperties(functions: ClassMemberFunctionProperties): void {
        functions.privatePrefix = "";
        functions.protectedPrefix = "";
        functions.publicPrefix = "";

        functions.abstractDeclaration = "abstract ";
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
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
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
    protected generateClassProperties(classes: ClassProperties): void {
        classes.declareEnd = "}";
        classes.declareExtendsRight = "";
        classes.declareStartLeft = "class ";
        classes.newStart = "new ";
        classes.statics.labelBeforePublicity = false;
        classes.this = "this";

        classes.abstractDeclaration = "abstract ";
        classes.abstractsSupported = true;
        classes.aliases = {
            dictionary: "object",
            double: "number",
            float: "number",
            int: "number"
        };

        classes.constructors.private = "private ";
        classes.constructors.protected = "protected ";
        classes.constructors.public = "public ";
        classes.constructors.keyword = "constructor";
        classes.constructors.useKeyword = true;

        classes.declareExtendsLeft = " extends ";
        classes.declareImplementsLeft = " implements ";
        classes.declareStartRight = " {";

        classes.instanceOf = new NativeCallProperties(
            " instanceof ",
            NativeCallScope.Operator,
            NativeCallType.FloatingRight);

        classes.generics.used = true;

        classes.superConstructor = "super";
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionProperties(functions: ClassStaticFunctionProperties): void {
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
    protected generateClassStaticVariableProperties(variables: ClassStaticVariableProperties): void {
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
    protected generateCommentProperties(comments: CommentProperties): void {
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
        dictionaries.initializeAsLiteral = "{}";
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = ": ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "{";
        dictionaries.typeLeft = "{ [i: ";
        dictionaries.typeMiddle = "]: ";
        dictionaries.typeRight = " }";
    }

    /**
     * Generates metadata on enums.
     *
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        enums.declareStartLeft = "enum ";
        enums.declareValueLeft = " = ";
        enums.declareValueRight = "";
        enums.declareCommaRight = ",";
        enums.valueLeft = "";
        enums.valueMiddle = ".";
        enums.valueRight = "";

        enums.declareStartRight = " {";
        enums.declareLastRight = "";
        enums.isObject = false;
    }

    /**
     * Generates metadata on exceptions.
     *
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        exceptions.catch = "catch";
        exceptions.finally = "finally";
        exceptions.throw = "throw new";
        exceptions.try = "try";
        exceptions.variablePrefix = "";
        exceptions.blockEnd = "} ";
        exceptions.tryStartRight = " {";
        exceptions.finallyStartRight = " {";
        exceptions.catchStartMiddle = " (";
        exceptions.catchStartLink = " ";
        exceptions.catchStartRight = ") {";
        exceptions.throwExceptionMiddle = "(";
        exceptions.throwExceptionRight = ")";

        exceptions.className = "Error";

        exceptions.requiresExceptionType = false;
    }

    /**
     * Generates metadata on file contents.
     *
     * @param files   The property container for metadata on file contents.
     */
    protected generateFileProperties(files: FileProperties): void {
        files.endLines = [];
        files.indentation = 0;
        files.startCase = CaseStyle.FileSystemLowerCase;
        files.startLines = [];
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        functions.defineEnd = "}";
        functions.explicitReturns = true;
        functions.requiresExceptions = false;

        functions.case = CaseStyle.CamelCase;

        functions.defineStartLeft = "function ";
        functions.defineStartRight = " {";

        functions.returnTypeAfterName = true;
        functions.returnTypeMarker = ": ";
    }

    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.extension = ".ts";
        general.name = "TypeScript";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.DirectoryLowerCase;
        imports.explicit = true;
        imports.itemsBeforePackage = true;
        imports.leftAbsolute = "import { ";
        imports.leftLocal = "import { ";
        imports.middle = " } from \"";
        imports.right = "\";";
        imports.useLocalRelativeImports = true;
        imports.useLocalRelativePaths = true;
    }

    /**
     * Generates metadata on interfaces.
     *
     * @param interfaces   A property container for metadata on interfaces.
     */
    protected generateInterfaceProperties(interfaces: InterfaceProperties): void {
        interfaces.declareStartLeft = "interface ";
        interfaces.declareStartRight = " {";
        interfaces.declareExtendsLeft = " extends ";
        interfaces.declareExtendsRight = ", ";
        interfaces.declareEnd = "}";
        interfaces.declareMethodLeft = "";
        interfaces.declareMethodMiddle = "(";
        interfaces.declareMethodRight = ")";
        interfaces.declareImplementsExplicit = true;
        interfaces.methodTypeAfter = true;
        interfaces.supported = true;
    }

    /**
     * Generates metadata on lambdas.
     *
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        lambdas.functionLeft = "(";
        lambdas.functionRight = "";
        lambdas.parameterTypeRequired = false;
        lambdas.returnTypeRequired = false;

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
        lists.popFront = new NativeCallProperties(
            "shift",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.push = new NativeCallProperties(
            "push",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.addList = new NativeCallProperties(
            "concat",
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
        loops.break = "break";
        loops.continue = "continue";
        loops.for = "for";
        loops.forEachEnd = "}";
        loops.whileStartLeft = "while";
        loops.whileStartMiddle = " (";
        loops.whileStartRight = ") {";

        loops.foreach = "for";
        loops.forEachGetKeys = "";
        loops.forEachGetPairs = "";
        loops.forEachMiddle = " in ";
        loops.forEachPairsAsKeys = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "for";
        loops.forEachStartIteration = " (";
        loops.forEachStartSeparator = " of ";
        loops.forEachStartRight = ") {";
    }

    /**
     * Generates metadata on main execution areas.
     *
     * @param main   A property container for metadata on main execution areas.
     */
    protected generateMainProperties(main: MainProperties): void {
        main.contextEndLines = [];
        main.contextIndentation = 0;
        main.contextStartLines = [];
        main.mainEndLines = [];
        main.mainIndentation = 0;
        main.mainStartLines = [];
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
        math.ceiling = new NativeCallProperties(
            "Math.ceil",
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
        math.power = new NativeCallProperties(
            "Math.pow",
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
        newProp.instantiationKind = NewInstantiationSyntaxKind.Prefix;
        newProp.keyword = "new";
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
        operators.and = "&&";
        operators.decreaseBy = "-=";
        operators.divide = "/";
        operators.divideBy = "/=";
        operators.equals = "=";
        operators.greaterThan = ">";
        operators.greaterThanOrEqualTo = ">=";
        operators.increaseBy = "+=";
        operators.lessThan = "<";
        operators.lessThanOrEqualTo = "<=";
        operators.minus = "-";
        operators.mod = "%";
        operators.multiplyBy = "*=";
        operators.not = "!";
        operators.or = "||";
        operators.plus = "+";
        operators.times = "*";

        operators.equalTo = "===";
        operators.notEqualTo = "!==";
    }

    /**
     * Generates metadata on parameters
     *
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterProperties(parameters: ParameterProperties): void {
        parameters.restDeclarationAfter = true;
        parameters.restDeclarationType = true;
        parameters.restKeywordLeft = "...";
        parameters.restKeywordMiddle = ": ";
        parameters.restKeywordRight = "[]";
    }

    /**
     * Generates metadata on printing.
     *
     * @param parameters    A property container for metadata on printing.
     */
    protected generatePrintingProperties(printing: PrintingProperties): void {
        printing.end = ")";
        printing.requiredImports = [];
        printing.start = "console.log(";
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
            "has",
            NativeCallScope.Member,
            NativeCallType.Function);

        sets.initializeAsNew = true;
        sets.initializeStart = "";

        sets.toArray = new NativeCallProperties(
            "Array.from",
            NativeCallScope.Static,
            NativeCallType.Function);

        sets.toList = sets.toArray;

        sets.requiredImports = [];
        sets.startItemsLeft = "[";
        sets.startItemsRight = "]";
        sets.typeLeft = "<";
        sets.typeRight = ">";
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param formatting   A property container for metadata on string formatting.
     */
    protected generateStringFormatProperties(formatting: StringFormatProperties): void {
        formatting.formatLeft = "`";
        formatting.formatRight = "`";
        formatting.formatInputLeft = "${";
        formatting.formatInputRight = "}";
        formatting.inputTypes = false;
        formatting.useInterpolation = true;
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        strings.concatenate = " + ";

        strings.caseLower = new NativeCallProperties(
            "toLowerCase",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.caseUpper = new NativeCallProperties(
            "toUpperCase",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.className = "String";

        strings.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);

        strings.trim = new NativeCallProperties(
            "trim",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringProperties(substrings: StringSubstringProperties): void {
        substrings.defaultEnd = "";
        substrings.leftIndex = ".substring(";
        substrings.leftLength = ".substr(";
        substrings.middle = ", ";
        substrings.right = ")";
        substrings.support = StringSubstringSupport.Both;
    }

    /**
     * Generates metadata on string-to-float conversions.
     *
     * @param toFloat   A property container for metadata on string-to-float conversions.
     */
    protected generateStringToFloatProperties(toFloat: StringToFloatProperties): void {
        toFloat.conversionType = StringToFloatStartConversionType.ConvertAndValidate;
        toFloat.perVariableConversionStartLeft = "let ";
        toFloat.perVariableConversionStartMiddle = ": number = parseFloat(";
        toFloat.perVariableConversionStartRight = ");\n";
        toFloat.validationBlockComparison = "!isNaN({1})";
        toFloat.validationBlockLeft = "\nif (";
        toFloat.validationBlockMiddle = " && ";
        toFloat.validationBlockRight = ") {";
    }

    /**
     * Generates metadata on style.
     *
     * @param style   The property container for metadata on style.
     */
    protected generateStyleProperties(style: StyleProperties): void {
        style.semicolon = ";";
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        variables.declarationRequired = true;

        variables.aliases = {
            infinity: "Infinity"
        };
        variables.castLeft = "<";
        variables.castRight = ">";
        variables.declaration = "let ";
        variables.explicitTypes = true;
        variables.null = "undefined";
        variables.typesAfterName = true;
        variables.typeLeft = ": ";
        variables.isNullLeft = "";
        variables.isNotNullLeft = "";
        variables.isNotNullMiddle = " !== ";
        variables.isNullMiddle = " === ";
        variables.nullRight = "undefined";
    }
}
