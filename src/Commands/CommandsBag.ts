import { ConversionContext } from "../Conversions/ConversionContext";
import { Command } from "./Command";
import { LineResults } from "./LineResults";

import { ArrayInitializeCommand } from "./ArrayInitializeCommand";
import { ArrayLengthCommand } from "./ArrayLengthCommand";
import { BreakCommand } from "./BreakCommand";
import { CatchEndCommand } from "./CatchEndCommand";
import { CatchStartCommand } from "./CatchStartCommand";
import { ClassEndCommand } from "./ClassEndCommand";
import { ClassStartCommand } from "./ClassStartCommand";
import { CommentBlockCommand } from "./CommentBlockCommand";
import { CommentBlockEndCommand } from "./CommentBlockEndCommand";
import { CommentBlockStartCommand } from "./CommentBlockStartCommand";
import { CommentDocEndCommand } from "./CommentDocEndCommand";
import { CommentDocStartCommand } from "./CommentDocStartCommand";
import { CommentDocTagCommand } from "./CommentDocTagCommand";
import { CommentLineCommand } from "./CommentLineCommand";
import { ConstructorEndCommand } from "./ConstructorEndCommand";
import { ConstructorStartCommand } from "./ConstructorStartCommand";
import { ContinueCommand } from "./ContinueCommand";
import { ConcatenateCommand } from "./ConcatenateCommand";
import { DictionaryContainsKeyCommand } from "./DictionaryContainsKeyCommand";
import { DictionaryKeysCommand } from "./DictionaryKeysCommand";
import { DictionaryNewCommand } from "./DictionaryNewCommand";
import { DictionaryNewEndCommand } from "./DictionaryNewEndCommand";
import { DictionaryNewStartCommand } from "./DictionaryNewStartCommand";
import { DictionaryPairCommand } from "./DictionaryPairCommand";
import { DictionaryTypeCommand } from "./DictionaryTypeCommand";
import { ElseIfStartCommand } from "./ElseIfStartCommand";
import { ElseStartCommand } from "./ElseStartCommand";
import { EnumCommand } from "./EnumCommand";
import { EnumEndCommand } from "./EnumEndCommand";
import { EnumMemberCommand } from "./EnumMemberCommand";
import { EnumStartCommand } from "./EnumStartCommand";
import { FinallyEndCommand } from "./FinallyEndCommand";
import { FinallyStartCommand } from "./FinallyStartCommand";
import { FileEndCommand } from "./FileEndCommand";
import { FileStartCommand } from "./FileStartCommand";
import { ForEachEndCommand } from "./ForEachEndCommand";
import { ForEachKeyStartCommand } from "./ForEachKeyStartCommand";
import { ForEachPairStartCommand } from "./ForEachPairStartCommand";
import { ForEachStartCommand } from "./ForEachStartCommand";
import { ForNumbersStartCommand } from "./ForNumbersStartCommand";
import { ForNumbersEndCommand } from "./ForNumbersEndCommand";
import { FunctionEndCommand } from "./FunctionEndCommand";
import { FunctionStartCommand } from "./FunctionStartCommand";
import { IfEndCommand } from "./IfEndCommand";
import { IfStartCommand } from "./IfStartCommand";
import { ImportCommand } from "./ImportCommand";
import { IndexCommand } from "./IndexCommand";
import { InterfaceStartCommand } from "./InterfaceStartCommand";
import { InterfaceEndCommand } from "./InterfaceEndCommand";
import { InterfaceMethodCommand } from "./InterfaceMethodCommand";
import { IsNotNullCommand } from "./IsNotNullCommand";
import { IsNullCommand } from "./IsNullCommand";
import { LambdaBodyCommand } from "./LambdaBodyCommand";
import { ListInitializeCommand } from "./ListInitializeCommand";
import { ListLengthCommand } from "./ListLengthCommand";
import { ListPopCommand } from "./ListPopCommand";
import { ListPushCommand } from "./ListPushCommand";
import { LiteralCommand } from "./LiteralCommand";
import { ListTypeCommand } from "./ListTypeCommand";
import { MainEndCommand } from "./MainEndCommand";
import { MainStartCommand } from "./MainStartCommand";
import { MathAbsoluteCommand } from "./MathAbsoluteCommand";
import { MathFloorCommand } from "./MathFloorCommand";
import { MemberVariableCommand } from "./MemberVariableCommand";
import { MemberVariableDeclareCommand } from "./MemberVariableDeclareCommand";
import { NotCommand } from "./NotCommand";
import { OperationCommand } from "./OperationCommand";
import { OperatorCommand } from "./OperatorCommand";
import { ParenthesisCommand } from "./ParenthesisCommand";
import { PrintCommand } from "./PrintCommand";
import { RestParametersCommand} from "./RestParametersCommand";
import { ReturnCommand } from "./ReturnCommand";
import { StringFormatCommand } from "./StringFormatCommand";
import { StringIndexCommand } from "./StringIndexCommand";
import { StringLengthCommand } from "./StringLengthCommand";
import { SuperConstructorCommand } from "./SuperConstructorCommand";
import { ThisCommand } from "./ThisCommand";
import { ThrowExceptionCommand } from "./ThrowExceptionCommand";
import { TryEndCommand } from "./TryEndCommand";
import { TryStartCommand } from "./TryStartCommand";
import { TypeCommand } from "./TypeCommand";
import { ValueCommand } from "./ValueCommand";
import { VariableCommand } from "./VariableCommand";
import { VariableInlineCommand } from "./VariableInlineCommand";
import { VariableStartCommand } from "./VariableStartCommand";
import { WhileEndCommand } from "./WhileEndCommand";
import { WhileStartCommand } from "./WhileStartCommand";

/**
 * A container for globally known commands.
 */
export class CommandsBag {
    /**
     * Globally known commands, keyed by their GLS alias.
     */
    private commands: { [i: string]: Command };

    /**
     * Initializes a new instance of the CommandsBag class.
     * 
     * @param context   The driving context for conversions.
     */
    constructor(context: ConversionContext) {
        this.commands = {
            "array initialize": new ArrayInitializeCommand(context),
            "array length": new ArrayLengthCommand(context),
            "break": new BreakCommand(context),
            "catch end": new CatchEndCommand(context),
            "catch start": new CatchStartCommand(context),
            "class end": new ClassEndCommand(context),
            "class start": new ClassStartCommand(context),
            "comment block": new CommentBlockCommand(context),
            "comment block end": new CommentBlockEndCommand(context),
            "comment block start": new CommentBlockStartCommand(context),
            "comment doc end": new CommentDocEndCommand(context),
            "comment doc start": new CommentDocStartCommand(context),
            "comment doc tag": new CommentDocTagCommand(context),
            "comment line": new CommentLineCommand(context),
            "concatenate": new ConcatenateCommand(context),
            "constructor end": new ConstructorEndCommand(context),
            "constructor start": new ConstructorStartCommand(context),
            "continue": new ContinueCommand(context),
            "dictionary contains key": new DictionaryContainsKeyCommand(context),
            "dictionary keys": new DictionaryKeysCommand(context),
            "dictionary new": new DictionaryNewCommand(context),
            "dictionary new end": new DictionaryNewEndCommand(context),
            "dictionary new start": new DictionaryNewStartCommand(context),
            "dictionary pair": new DictionaryPairCommand(context),
            "dictionary type": new DictionaryTypeCommand(context),
            "else if start": new ElseIfStartCommand(context),
            "else start": new ElseStartCommand(context),
            "enum": new EnumCommand(context),
            "enum end": new EnumEndCommand(context),
            "enum member": new EnumMemberCommand(context),
            "enum start": new EnumStartCommand(context),
            "finally end": new FinallyEndCommand(context),
            "finally start": new FinallyStartCommand(context),
            "file end": new FileEndCommand(context),
            "file start": new FileStartCommand(context),
            "for each end": new ForEachEndCommand(context),
            "for each key start": new ForEachKeyStartCommand(context),
            "for each start" : new ForEachStartCommand(context),
            "for each pair start": new ForEachPairStartCommand(context),
            "for numbers start": new ForNumbersStartCommand(context),
            "for numbers end": new ForNumbersEndCommand(context),
            "function start": new FunctionStartCommand(context),
            "function end": new FunctionEndCommand(context),
            "if end": new IfEndCommand(context),
            "if start": new IfStartCommand(context),
            "import": new ImportCommand(context),
            "index": new IndexCommand(context),
            "interface start": new InterfaceStartCommand(context),
            "interface end": new InterfaceEndCommand(context),
            "interface method": new InterfaceMethodCommand(context),
            "is not null": new IsNotNullCommand(context),
            "is null": new IsNullCommand(context),
            "lambda": new LambdaBodyCommand(context),
            "list initialize": new ListInitializeCommand(context),
            "list length": new ListLengthCommand(context),
            "list pop": new ListPopCommand(context),
            "list push": new ListPushCommand(context),
            "literal": new LiteralCommand(context),
            "list type": new ListTypeCommand(context),
            "main end": new MainEndCommand(context),
            "main start": new MainStartCommand(context),
            "math absolute": new MathAbsoluteCommand(context),
            "math floor": new MathFloorCommand(context),
            "member variable": new MemberVariableCommand(context),
            "member variable declare": new MemberVariableDeclareCommand(context),
            "not": new NotCommand(context),
            "operation": new OperationCommand(context),
            "operator": new OperatorCommand(context),
            "parenthesis": new ParenthesisCommand(context),
            "print": new PrintCommand(context),
            "rest parameters": new RestParametersCommand(context),
            "return": new ReturnCommand(context),
            "string format": new StringFormatCommand(context),
            "string index": new StringIndexCommand(context),
            "string length": new StringLengthCommand(context),
            "super constructor": new SuperConstructorCommand(context),
            "this": new ThisCommand(context),
            "throw exception": new ThrowExceptionCommand(context),
            "try end": new TryEndCommand(context),
            "try start": new TryStartCommand(context),
            "type": new TypeCommand(context),
            "value": new ValueCommand(context),
            "variable": new VariableCommand(context),
            "variable inline": new VariableInlineCommand(context),
            "variable start": new VariableStartCommand(context),
            "while end": new WhileEndCommand(context),
            "while start": new WhileStartCommand(context)
        };
    }

    /**
     * @returns Commands, keyed by their GLS aliases.
     */
    public getCommands(): { [i: string]: Command } {
        return this.commands;
    }

    /**
     * Retrieves the command under the given alias.
     * 
     * @param name   The alias of a command.
     * @returns The command under the given alias.
     */
    public getCommand(alias: string): Command {
        if (!this.commands.hasOwnProperty(alias)) {
            throw new Error(`Unknown command requested: '${alias}'.`);
        }

        return this.commands[alias];
    }

    /**
     * Renders a command in a language.
     * 
     * @param language   The language to render the command in.
     * @param command   A command name, followed by parameters for it.
     * @returns Line(s) of code in the language.
     */
    public renderCommand(parameters: string[]): LineResults {
        let command: Command = this.getCommand(parameters[0]);

        command.checkParameterValidity(parameters);

        return command.render(parameters);
    }
}
