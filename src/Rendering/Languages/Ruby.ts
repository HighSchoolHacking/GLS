import { StringToDoubleStartConversionType } from "../Commands/IfStringToDoubleStartCommand";
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
import { ListNewSizedSyntax } from "./Properties/Syntax/ListNewSizedSyntax";
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
import { StringToDoubleSyntax } from "./Properties/Syntax/StringToDoubleSyntax";
import { StyleSyntax } from "./Properties/Syntax/StyleSyntax";
import { UnsupportedSyntax } from "./Properties/Syntax/UnsupportedSyntax";
import { VariableSyntax } from "./Properties/Syntax/VariableSyntax";

/**
 * A summary of information for the Ruby language.
 */
export class Ruby extends Language {
    /**
     * Generates general metadata.
     *
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.directoryCase = CaseStyle.SnakeCase;
        general.extension = ".rb";
        general.fileCase = CaseStyle.SnakeCase;
        general.name = "Ruby";
    }

    /**
     * Generates project-scale metadata.
     *
     * @param projects   A property container for project-scale metadata.
     */
    protected generateProjectProperties(projects: ProjectProperties): void {
        projects.mainFile = "main.rb";
        projects.metadataFiles = {
            Gemfile: [`source "https://rubygems.org"`, ``, `gemspec`],
            "{name}.gemspec": [
                `# encoding: utf-8`,
                ``,
                `Gem::Specification.new do |spec|`,
                `    spec.author = ["{author}"]`,
                `    spec.description = "{description}"`,
                `    spec.email = "{email}"`,
                `    spec.files = Dir[`,
                `        *.md,`,
                `        {{#exports}},`,
                `        {file}`,
                `        {{/exports}},`,
                `    ]`,
                `    spec.homepage = "{homepage}"`,
                `    spec.license = "{license}"`,
                `    spec.name = "{name}"`,
                `    spec.summary = spec.description`,
                `    spec.version = "{version}"`,
                ``,
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
        arrays.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
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
     * @param functions   A property container for metadata on class member functions.
     */
    protected generateClassMemberFunctionSyntax(functions: ClassMemberFunctionSyntax): void {
        functions.includeThisReference = false;
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
    protected generateClassMemberVariableSyntax(variables: ClassMemberVariableSyntax): void {
        variables.publicPrefix = "";
        variables.skipMemberVariables = false;

        variables.private = "attr_accessor :";
        variables.privateCase = CaseStyle.CamelCase;
        variables.privatePrefix = "";
        variables.protected = "attr_accessor :";
        variables.protectedCase = CaseStyle.CamelCase;
        variables.protectedPrefix = "";
        variables.public = "attr_accessor :";
        variables.publicCase = CaseStyle.CamelCase;
        variables.publicPrefix = "";
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
            dictionary: "Hash",
            number: "Double",
        };

        classes.constructors.baseConstructor = "super";
        classes.constructors.keyword = "def initialize";
        classes.constructors.takeThis = false;

        classes.declareEnd = "end";
        classes.declareExtendsLeft = " < ";
        classes.declareExtendsRight = "";
        classes.declareStartLeft = "class ";
        classes.declareStartRight = "";

        classes.instanceOf = new NativeCallSyntax(".kind_of? ", NativeCallScope.Operator, NativeCallType.FloatingRight);

        classes.statics.labelBeforePublicity = false;
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
            todo: "todo",
        };
        comments.docTagsWithParameters = {
            parameter: "",
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
    protected generateConditionalSyntax(conditionals: ConditionalSyntax): void {
        conditionals.continueLeft = "";
        conditionals.else = "else";
        conditionals.end = "\0";
        conditionals.if = "if";
        conditionals.startLeft = " ";

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
    protected generateDictionarySyntax(dictionaries: DictionarySyntax): void {
        dictionaries.containsKey = new NativeCallSyntax("key?", NativeCallScope.Member, NativeCallType.Function);
        dictionaries.initializeAsLiteral = "{}";
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = " => ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "{";

        dictionaries.className = "hash";
        dictionaries.keys = new NativeCallSyntax("keys", NativeCallScope.Member, NativeCallType.Property);
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
    protected generateExceptionSyntax(exceptions: ExceptionSyntax): void {
        exceptions.blockEnd = "";
        exceptions.catch = "rescue";
        exceptions.catchStartLink = " => ";
        exceptions.catchStartMiddle = " ";
        exceptions.catchStartRight = "";
        exceptions.className = "Exception";
        exceptions.finally = "ensure";
        exceptions.finallyStartRight = "";
        exceptions.requiredImports = [];
        exceptions.requiresExceptionType = true;
        exceptions.throw = "raise";
        exceptions.throwMiddle = ".new(";
        exceptions.throwRight = ")";
        exceptions.try = "begin";
        exceptions.tryStartRight = "";
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
        functions.requiresExceptions = false;

        functions.defineStartRight = "";
        functions.defineEnd = "end";
    }

    /**
     * Generates metadata on imports.
     *
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportSyntax(imports: ImportSyntax): void {
        imports.case = CaseStyle.DirectoryLowerCase;
        imports.leftAbsolute = 'require "';
        imports.leftLocal = 'require_relative "';
        imports.right = '"';
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
        lambdas.parameterTypeRequired = false;
        lambdas.returnTypeRequired = false;

        lambdas.functionLeft = "lambda { |";
        lambdas.functionMiddle = "| ";
        lambdas.functionRight = " }";
    }

    /**
     * Generates metadata on lists.
     *
     * @param lists   A property container for metadata on loops.
     */
    protected generateListSyntax(lists: ListSyntax): void {
        lists.asArray = true;

        lists.length = new NativeCallSyntax("length", NativeCallScope.Member, NativeCallType.Property);
        lists.pop = new NativeCallSyntax("pop", NativeCallScope.Member, NativeCallType.Property);
        lists.popFront = new NativeCallSyntax("shift", NativeCallScope.Member, NativeCallType.Property);
        lists.push = new NativeCallSyntax("push", NativeCallScope.Member, NativeCallType.Function);
        lists.addList = new NativeCallSyntax("concat", NativeCallScope.Member, NativeCallType.Function);
        lists.sort = new NativeCallSyntax("sort!", NativeCallScope.Member, NativeCallType.Function);
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
     * Generates metadata on loops.
     *
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopSyntax(loops: LoopSyntax): void {
        loops.break = "break";
        loops.continue = "next";
        loops.for = "for";
        loops.forEachMiddle = " in ";
        loops.forEachStartIteration = " ";
        loops.rangedForLoops = true;
        loops.whileStartLeft = "while";
        loops.whileStartMiddle = " ";
        loops.whileStartRight = ":";

        loops.foreach = "foreach";
        loops.forEachAsMethod = true;
        loops.forEachEnd = "end";
        loops.forEachKeyEnd = "}";
        loops.forEachGetKeys = ".each_key { |";
        loops.forEachGetPairs = ".each { |";
        loops.forEachPairEnd = "}";
        loops.forEachRight = "|";
        loops.forNumbersEnd = "end";

        loops.forEachStartLeft = "for";
        loops.forEachStartSeparator = " in ";
        loops.forEachStartRight = "";

        loops.rangedForLoopsFunctionalIncrementor = true;
        loops.rangedForLoopsFunctionalLeft = "(";
        loops.rangedForLoopsFunctionalMiddleLeft = "...";
        loops.rangedForLoopsFunctionalMiddleMiddle = ").step(";
        loops.rangedForLoopsFunctionalMiddleRight = ") do |";
        loops.rangedForLoopsFunctionalRight = "|";

        loops.rangedForLoopsLeft = " in ";
        loops.rangedForLoopsMiddle = "...";
        loops.rangedForLoopsRight = "";

        loops.whileStartRight = "";
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
        math.absolute = new NativeCallSyntax("abs", NativeCallScope.Member, NativeCallType.Property);
        math.asInt = new NativeCallSyntax("floor", NativeCallScope.Member, NativeCallType.Property);
        math.ceiling = new NativeCallSyntax("ceil", NativeCallScope.Member, NativeCallType.Property);
        math.floor = new NativeCallSyntax("floor", NativeCallScope.Member, NativeCallType.Property);
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
        newProp.instantiationKind = NewInstantiationSyntaxKind.MemberMethodCall;
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
        printing.end = "";
        printing.requiredImports = [];
        printing.start = "puts ";
    }

    /**
     * Generates metadata on sets.
     *
     * @param parameters   A property container for metadata on sets.
     */
    protected generateSetSyntax(sets: SetSyntax): void {
        sets.add = new NativeCallSyntax("add", NativeCallScope.Member, NativeCallType.Function);
        sets.className = "Set";
        sets.contains = new NativeCallSyntax("include?", NativeCallScope.Member, NativeCallType.Function);
        sets.initializeAsNew = false;
        sets.initializeStart = "";
        sets.requiredImports = [new Import(["set"], ["set"], ImportRelativity.Absolute)];
        sets.startItemsLeft = "([";
        sets.startItemsRight = "])";
        sets.startNoItems = ".new";
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
        formatting.formatLeft = '"';
        formatting.formatMiddle = '" % [';
        formatting.formatAbbreviated = '" % [';
        formatting.formatRight = "]";
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
        strings.concatenate = " + ";

        strings.caseLower = new NativeCallSyntax("downcase", NativeCallScope.Member, NativeCallType.Property);

        strings.caseUpper = new NativeCallSyntax("upcase", NativeCallScope.Member, NativeCallType.Property);

        strings.className = "string";

        strings.indexOf = new NativeCallSyntax("index", NativeCallScope.Member, NativeCallType.Function);

        strings.indexOfNotFound = "nil";

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
    protected generateStringToDoubleSyntax(toDouble: StringToDoubleSyntax): void {
        toDouble.conversionType = StringToDoubleStartConversionType.ConvertAndValidate;
        toDouble.perVariableConversionStartLeft = "";
        toDouble.perVariableConversionStartMiddle = " = ";
        toDouble.perVariableConversionStartRight = ".to_f\n";
        toDouble.validationBlockComparison = "{1} != nil";
        toDouble.validationBlockLeft = "\nif (";
        toDouble.validationBlockMiddle = " && ";
        toDouble.validationBlockRight = ")";
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
        unsupported.complaintEnd = "=begin\n";
        unsupported.complaintStart = "\nend";
    }

    /**
     * Generates metadata on variables.
     *
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableSyntax(variables: VariableSyntax): void {
        variables.declaration = "";

        variables.aliases = {
            infinity: "double::Infinity",
        };
        variables.null = "Nil";
        variables.isNullLeft = "";
        variables.isNullMiddle = "";
        variables.isNotNullLeft = "!";
        variables.isNotNullMiddle = "";
        variables.nullRight = ".nil?";
    }
}
