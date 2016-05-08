import { PythonicLanguage } from "./PythonicLanguage.ts";
import { CaseStyle } from "./Casing/CaseStyle.ts";
import { ArrayProperties } from "./Properties/ArrayProperties.ts";
import { BooleanProperties } from "./Properties/BooleanProperties.ts";
import { ClassProperties } from "./Properties/ClassProperties.ts";
import { ClassGenericProperties } from "./Properties/ClassGenericProperties.ts";
import { ClassMemberProperties } from "./Properties/ClassMemberProperties.ts";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties.ts";
import { CommentProperties } from "./Properties/CommentProperties.ts";
import { ConditionalProperties } from "./Properties/ConditionalProperties.ts";
import { DictionaryProperties } from "./Properties/DictionaryProperties.ts";
import { EnumProperties } from "./Properties/EnumProperties.ts";
import { ExceptionProperties } from "./Properties/ExceptionProperties.ts";
import { FunctionProperties } from "./Properties/FunctionProperties.ts";
import { GeneralProperties } from "./Properties/GeneralProperties.ts";
import { ImportProperties } from "./Properties/ImportProperties.ts";
import { LambdaProperties } from "./Properties/LambdaProperties.ts";
import { ListProperties } from "./Properties/ListProperties.ts";
import { LoopProperties } from "./Properties/LoopProperties.ts";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties.ts";
import { NumberProperties } from "./Properties/NumberProperties.ts";
import { OperatorProperties } from "./Properties/OperatorProperties.ts";
import { OutputProperties } from "./Properties/OutputProperties.ts";
import { StringProperties } from "./Properties/StringProperties.ts";
import { StyleProperties } from "./Properties/StyleProperties.ts";
import { VariableProperties } from "./Properties/VariableProperties.ts";

/**
 * A summary of information for the Python language.
 */
export class Python extends PythonicLanguage {
    /**
     * Generates metadata on arrays.
     * 
     * @param arrays   A property container for metadata on arrays. 
     */
    protected generateArrayProperties(arrays: ArrayProperties): void {
        arrays.className = "list";
        arrays.length = new NativeCallProperties(
            "len",
            NativeCallScope.Static,
            NativeCallType.Function);
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
            "dictionary": "dict",
            "number": "float"
        };
        classes.constructorKeyword = "def __init__";
        classes.constructorTakesThis = true;
        classes.declareEnd = "\0";
        classes.declareExtendsLeft = "(";
        classes.declareExtendsRight = ")";
        classes.declareStartLeft = "class ";
        classes.declareStartRight = ":";
        classes.superConstructor = "super().__init__";
    }

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

        variables.privateCase = CaseStyle.SnakeCase;
        variables.privatePrefix = "__";
        variables.protectedCase = CaseStyle.SnakeCase;
        variables.protectedPrefix = "_";
        variables.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on conditionals.
     * 
     * @param conditionals   A property container for metadata on conditionals. 
     */
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
        super.generateConditionalProperties(conditionals);

        conditionals.continueRight = ":";
        conditionals.elif = "elif";
        conditionals.startRight = ":";
    }

    /**
     * Generates metadata on comments.
     * 
     * @param comments   A property container for metadata on comments. 
     */
    protected generateCommentProperties(comments: CommentProperties): void {
        comments.blockEnd = "\"\"\"";
        comments.blockLineLeft = "";
        comments.blockLineRight = "";
        comments.blockStart = "\"\"\"";

        comments.docEnd = "\"\"\"";
        comments.docLineEnd = "";
        comments.docLineStart = "";
        comments.docStart = "\"\"\"";
        comments.docTagAliases = {
            "note": "remarks",
            "parameter": "param",
            "returns": "returns",
            "summary": "",
            "todo": "todo"
        };
        comments.docTagsWithParameters = {
            "parameter": ""
        };
        comments.docTagEnd = " ";
        comments.docTagSpaceAfter = "  ";
        comments.docTagStart = ":";

        comments.lineLeft = "# ";
        comments.lineRight = "";
    }

    /**
     * Generates properties on dictionaries.
     * 
     * @param dictionaries   The property container for metadata on dictionaries. 
     */
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        super.generateDictionaryProperties(dictionaries);

        dictionaries.className = "dict";
        dictionaries.keys = new NativeCallProperties(
            "keys",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on enums.
     * 
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);

        enums.declareStartRight = "(Enum):";
        enums.declareValueLeft = " = ";
        enums.valueMiddle = ".";
    }

    /**
     * Generates metadata on lambdas.
     * 
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        super.generateLambdaProperties(lambdas);

        lambdas.functionLeft = "lambda ";
        lambdas.functionMiddle = ": ";
        lambdas.functionRight = "";
    }

    /**
     * Generates metadata on functions.
     * 
     * @param functions   The property container for metadata on functions. 
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

        functions.defineStartRight = ":";
        functions.defineEnd = "\0";
    }

    /**
     * Generates general metadata.
     * 
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.extension = ".py";
        general.name = "Python";
    }

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.FileSystem;
        imports.explicit = true;
        imports.left = "from \"";
        imports.middle = "\" import ";
        imports.right = "";
    }

    /**
     * Generates metadata on lists.
     * 
     * @param lists   A property container for metadata on loops. 
     */
    protected generateListProperties(lists: ListProperties): void {
        super.generateListProperties(lists);

        lists.push = new NativeCallProperties(
            "append",
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

        loops.forEachEnd = "\0";
        loops.forEachGetKeys = "";
        loops.forEachGetPairs = ".iteritems()";
        loops.forEachPairsAsPair = true;
        loops.forEachRight = "";

        loops.rangedForLoopsLeft = " in range(";
        loops.rangedForLoopsMiddle = ", ";
        loops.rangedForLoopsRight = ")";
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
     * Generates metadata on numbers.
     * 
     * @param numbers   A property container for metadata on numbers.
     */
    protected generateOutputProperties(output: OutputProperties): void {
        output.print = "print";
    }

    /**
     * Generates metadata on style.
     * 
     * @param style   The property container for metadata on style. 
     */
    protected generateStyleProperties(style: StyleProperties): void {
        super.generateStyleProperties(style);

        style.mainEndLines = [""];
        style.mainIndentation = 1;
        style.mainStartLines = ["if __name__ == \"__main__\":"];
        style.printEnd = ")";
        style.printStart = "print(";
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
            "index",
            NativeCallScope.Member,
            NativeCallType.Function);
        strings.length = new NativeCallProperties(
            "len",
            NativeCallScope.Static,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on variables.
     * 
     * @param variables   A property container for metadata on variables. 
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            "false": "False",
            "infinity": "inf",
            "true": "True"
        };
        variables.null = "None";
    }
}
