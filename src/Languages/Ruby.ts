import { CaseStyle } from "./Casing/CaseStyle";
import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
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
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringSubstringProperties, StringSubstringSupport } from "./Properties/StringSubstringProperties";
import { VariableProperties } from "./Properties/VariableProperties";
import { PythonicLanguage } from "./PythonicLanguage";

/**
 * A summary of information for the Ruby language.
 */
export class Ruby extends PythonicLanguage {
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
        booleans.className = "";
    }

    /**
     * Generates metadata on class member functions.
     *
     * @param functions   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionProperties(functions: ClassMemberFunctionProperties): void {
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
     * Generates metadata on class member variables.
     *
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

        variables.private = "";
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "";
        variables.protected = "";
        variables.protectedCase = CaseStyle.CamelCase;
        variables.protectedPrefix = "";
        variables.public = "";
        variables.publicCase = CaseStyle.CamelCase;
        variables.publicPrefix = "";
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
            dictionary: "Hash",
            number: "Float"
        };

        classes.constructors.keyword = "def initialize";
        classes.constructors.takeThis = false;

        classes.declareEnd = "end";
        classes.declareExtendsLeft = " < ";
        classes.declareExtendsRight = "";
        classes.declareStartLeft = "class ";
        classes.declareStartRight = "";

        classes.statics.labelBeforePublicity = false;

        classes.superConstructor = "super";
    }

    /**
     * Generates metadata on class static functions.
     *
     * @param functions   A property container for metadata on class static functions.
     */
    protected generateClassStaticFunctionProperties(functions: ClassStaticFunctionProperties): void {
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
    protected generateClassStaticVariableProperties(variables: ClassStaticVariableProperties): void {
        super.generateClassStaticVariableProperties(variables);

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
    protected generateCommentProperties(comments: CommentProperties): void {
        comments.blockEnd = "=end";
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = "=begin";

        comments.docEnd = "##";
        comments.docLineEnd = "";
        comments.docLineStart = "";
        comments.docStart = "##";
        comments.docTagAliases = {
            note: "remarks",
            parameter: "\0",
            returns: "returns",
            summary: "",
            todo: "todo"
        };
        comments.docTagsWithParameters = {
            parameter: ""
        };
        comments.docTagEnd = "] ";
        comments.docTagSpaceAfter = "  ";
        comments.docTagStart = "[";

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

        conditionals.continueRight = "";
        conditionals.end = "end";
        conditionals.elif = "elsif";
        conditionals.startRight = "";
    }

    /**
     * Generates properties on dictionaries.
     *
     * @param dictionaries   The property container for metadata on dictionaries.
     */
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        super.generateDictionaryProperties(dictionaries);

        dictionaries.className = "hash";
        dictionaries.keys = new NativeCallProperties(
            "keys",
            NativeCallScope.Member,
            NativeCallType.Property);
    }

    /**
     * Generates metadata on enums.
     *
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);

        enums.declareStartRight = "";
        enums.declareValueLeft = " = ";
        enums.valueMiddle = "::";
        enums.isObject = false;
    }

    /**
     * Generates metadata on exceptions.
     *
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        super.generateExceptionProperties(exceptions);

        exceptions.try = "begin";
        exceptions.catch = "rescue";
        exceptions.finally = "ensure";

        exceptions.tryStartRight = "";
        exceptions.finallyStartRight = "";
        exceptions.catchStartRight = "";
        exceptions.catchStartLink = " => ";

        exceptions.throwExceptionMiddle = ".new(";
    }

    /**
     * Generates metadata on functions.
     *
     * @param functions   The property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

        functions.defineStartRight = "";
        functions.defineEnd = "end";
    }

    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.extension = ".rb";
        general.name = "Ruby";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.DirectoryLowerCase;
        imports.leftAbsolute = "require \"";
        imports.leftLocal = "require_relative \"";
        imports.right = "\"";
        imports.useLocalRelativeImports = true;
        imports.useLocalRelativePaths = true;
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

        lambdas.functionLeft = "lambda { |";
        lambdas.functionMiddle = "| ";
        lambdas.functionRight = " }";
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on loops.
     */
    protected generateListProperties(lists: ListProperties): void {
        super.generateListProperties(lists);
        lists.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);
        lists.pop = new NativeCallProperties(
            "pop",
            NativeCallScope.Member,
            NativeCallType.Property);
        lists.popFront = new NativeCallProperties(
            "shift",
            NativeCallScope.Member,
            NativeCallType.Property);
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
        super.generateLoopProperties(loops);

        loops.foreach = "foreach";
        loops.forEachAsMethod = true;
        loops.forEachEnd = "}";
        loops.forEachGetKeys = ".each_key { |";
        loops.forEachGetPairs = ".each { |";
        loops.forEachRight = "|";

        loops.forEachStartLeft = "for";
        loops.forEachStartSeparator = " in ";
        loops.forEachStartRight = "";

        loops.rangedForLoopsLeft = " in ";
        loops.rangedForLoopsMiddle = "..";
        loops.rangedForLoopsRight = "";

        loops.whileStartRight = "";
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
            "abs",
            NativeCallScope.Member,
            NativeCallType.Property);
        math.ceiling = new NativeCallProperties(
            "ceil",
            NativeCallScope.Member,
            NativeCallType.Property);
        math.floor = new NativeCallProperties(
            "floor",
            NativeCallScope.Member,
            NativeCallType.Property);
        math.max = new NativeCallProperties(
            "max",
            NativeCallScope.Array,
            NativeCallType.Function);
        math.min = new NativeCallProperties(
            "min",
            NativeCallScope.Array,
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
        newProp.instantiationKind = NewInstantiationSyntaxKind.MemberMethodCall;
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
        printing.end = "";
        printing.requiredImports = [];
        printing.start = "puts ";
    }

    /**
     * Generates metadata on string formatting.
     *
     * @param strings   A property container for metadata on string formatting.
     */
    protected generateStringFormatProperties(formatting: StringFormatProperties): void {
        formatting.formatLeft = "\"";
        formatting.formatMiddle = "\" % [";
        formatting.formatAbbreviated = "\" % [";
        formatting.formatRight = "]";
        formatting.formatInputLeft = "$";
        formatting.formatInputRight = "";
        formatting.inputTypes = true;
        formatting.useInterpolation = false;

        formatting.typeCodes = {
            float: "%f",
            int: "%d",
            string: "%s",
        };
    }

    /**
     * Generates metadata on strings.
     *
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

        strings.caseLower = new NativeCallProperties(
            "downcase",
            NativeCallScope.Member,
            NativeCallType.Property);

        strings.caseUpper = new NativeCallProperties(
            "upcase",
            NativeCallScope.Member,
            NativeCallType.Property);

        strings.className = "string";

        strings.index = new NativeCallProperties(
            "index",
            NativeCallScope.Member,
            NativeCallType.Function);

        strings.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);

        strings.requiredImports = [];
    }

    /**
     * Generates metadata on string substrings.
     *
     * @param strings   A property container for metadata on string substrings.
     */
    protected generateStringSubstringProperties(substrings: StringSubstringProperties): void {
        substrings.defaultEnd = "..-1";
        substrings.leftIndex = "[";
        substrings.leftLength = "[";
        substrings.middle = "..";
        substrings.right = "]";
        substrings.support = StringSubstringSupport.Length;
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            infinity: "float::Infinity",
        };
        variables.null = "Nil";
        variables.isNullLeft = "";
        variables.isNullMiddle = "";
        variables.isNotNullLeft = "!";
        variables.isNotNullMiddle = "";
        variables.nullRight = ".nil?";
    }
}
