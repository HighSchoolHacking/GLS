import { CLikeLanguage } from "./CLikeLanguage";
import { CaseStyle } from "./Casing/CaseStyle";
import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
import { ClassProperties } from "./Properties/ClassProperties";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties";
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
import { MathProperties } from "./Properties/MathProperties";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties";
import { NumberProperties } from "./Properties/NumberProperties";
import { OutputProperties } from "./Properties/OutputProperties";
import { ParameterProperties } from "./Properties/ParameterProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
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
     * Generates metadata on classes.
     * 
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);

        classes.aliases = {
            "boolean": "bool",
            "dictionary": "Dictionary",
            "list": "List",
            "number": "float"
        };
        classes.declareExtendsLeft = " : ";
        classes.declareImplementsLeft = " : ";
        classes.declareStartRight = "\n{";
        classes.superConstructor = "base";
    }

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

        variables.protectedCase = CaseStyle.PascalCase;
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
            "note": "remarks",
            "parameter": "param",
            "returns": "returns",
            "summary": "summary",
            "todo": "todo"
        };
        comments.docTagsWithParameters = {
            "parameter": "name"
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
        dictionaries.requiredImports = {
            "System/Collections/Generic": ["Dictionary"]
        };
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
    }

    /**
     * Generates metadata on exceptions.
     * 
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        exceptions.className = "Error";
    }

    /**
     * Generates metadata on functions.
     * 
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

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
        imports.left = "using ";
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

        lists.length = new NativeCallProperties(
            "Count",
            NativeCallScope.Member,
            NativeCallType.Property);

        lists.pop = new NativeCallProperties(
            "RemoveAt",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.pop.addArgument("{0}.Count - 1");

        lists.push = new NativeCallProperties(
            "Add",
            NativeCallScope.Member,
            NativeCallType.Function);

        lists.requiredImports = {
            "System/Collections/Generic": ["List"]
        };
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
    }

    /**
     * Generates metadata on math.
     * 
     * @param math   A property container for metadata on math.
     */
    protected generateMathProperties(math: MathProperties): void {
        math.absolute = new NativeCallProperties(
            "Math.Abs",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.requiredImports = {
            "System": ["Math"]
        };
        math.mathName = "Math";
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
     * Generates metadata on output.
     * 
     * @param output   A property container for metadata on output.
     */
    protected generateOutputProperties(output: OutputProperties): void {
        output.print = "Console.WriteLine";
    }

    /**
     * Generates metadata on parameters
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
     * Generates metadata on strings.
     * 
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

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
     * Generates metadata on string formatting.
     * 
     * @param strings   A property container for metadata on string formatting.
     */
    public generateStringFormatProperties(formatting: StringFormatProperties): void {
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
     * Generates metadata on style.
     * 
     * @param style   A property container for metadata on style.
     */
    protected generateStyleProperties(style: StyleProperties): void {
        super.generateStyleProperties(style);

        style.fileEndLines = ["}"];
        style.fileIndentation = 1;
        style.fileStartLines = [
            "using System;",
            "using System.Collections.Generic;",
            "",
            "namespace {0}",
            "{",
        ];

        style.mainEndLines = [
            "    }",
            "}"
        ];
        style.mainIndentation = 2;
        style.mainStartLines = [
            "class Program",
            "{",
            "    public static void Main()",
            "    {"
        ];

        style.printEnd = ")";
        style.printStart = "Console.WriteLine(";
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
            "infinity": "float.PositiveInfinity"
        };
        variables.castLeft = "(";
        variables.castRight = ")";
        variables.declaration = "";
        variables.explicitTypes = true;
        variables.null = "null";
        variables.isNotNullMiddle = "!=";
        variables.isNullMiddle = "==";
        variables.nullRight = "null";
    }
}
