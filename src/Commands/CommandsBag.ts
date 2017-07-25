import { ConversionContext } from "../Conversions/ConversionContext";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";

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
import { ImportLocalCommand } from "./ImportLocalCommand";
import { ImportPackageCommand } from "./ImportPackageCommand";
import { IndexCommand } from "./IndexCommand";
import { InterfaceStartCommand } from "./InterfaceStartCommand";
import { InterfaceEndCommand } from "./InterfaceEndCommand";
import { InterfaceMethodCommand } from "./InterfaceMethodCommand";
import { IsNotNullCommand } from "./IsNotNullCommand";
import { IsNullCommand } from "./IsNullCommand";
import { LambdaBodyCommand } from "./LambdaBodyCommand";
import { ListAddListCommand } from "./ListAddListCommand";
import { ListInitializeCommand } from "./ListInitializeCommand";
import { ListLengthCommand } from "./ListLengthCommand";
import { ListPopCommand } from "./ListPopCommand";
import { ListPopFrontCommand } from "./ListPopFrontCommand";
import { ListPushCommand } from "./ListPushCommand";
import { LiteralCommand } from "./LiteralCommand";
import { ListSortCommand } from "./ListSortCommand";
import { ListTypeCommand } from "./ListTypeCommand";
import { MainEndCommand } from "./MainEndCommand";
import { MainStartCommand } from "./MainStartCommand";
import { MathAbsoluteCommand } from "./MathAbsoluteCommand";
import { MathFloorCommand } from "./MathFloorCommand";
import { MathMaxCommand } from "./MathMaxCommand";
import { MathMinCommand } from "./MathMinCommand";
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
            [CommandNames.ArrayInitialize]: new ArrayInitializeCommand(context),
            [CommandNames.ArrayLength]: new ArrayLengthCommand(context),
            [CommandNames.Break]: new BreakCommand(context),
            [CommandNames.CatchEnd]: new CatchEndCommand(context),
            [CommandNames.CatchStart]: new CatchStartCommand(context),
            [CommandNames.ClassEnd]: new ClassEndCommand(context),
            [CommandNames.ClassStart]: new ClassStartCommand(context),
            [CommandNames.CommentBlock]: new CommentBlockCommand(context),
            [CommandNames.CommentBlockEnd]: new CommentBlockEndCommand(context),
            [CommandNames.CommentBlockStart]: new CommentBlockStartCommand(context),
            [CommandNames.CommentDocEnd]: new CommentDocEndCommand(context),
            [CommandNames.CommentDocStart]: new CommentDocStartCommand(context),
            [CommandNames.CommentDocTag]: new CommentDocTagCommand(context),
            [CommandNames.CommentLine]: new CommentLineCommand(context),
            [CommandNames.Concatenate]: new ConcatenateCommand(context),
            [CommandNames.ConstructorEnd]: new ConstructorEndCommand(context),
            [CommandNames.ConstructorStart]: new ConstructorStartCommand(context),
            [CommandNames.Continue]: new ContinueCommand(context),
            [CommandNames.DictionaryContainsKey]: new DictionaryContainsKeyCommand(context),
            [CommandNames.DictionaryKeys]: new DictionaryKeysCommand(context),
            [CommandNames.DictionaryNew]: new DictionaryNewCommand(context),
            [CommandNames.DictionaryNewEnd]: new DictionaryNewEndCommand(context),
            [CommandNames.DictionaryNewStart]: new DictionaryNewStartCommand(context),
            [CommandNames.DictionaryPair]: new DictionaryPairCommand(context),
            [CommandNames.DictionaryType]: new DictionaryTypeCommand(context),
            [CommandNames.ElseIfStart]: new ElseIfStartCommand(context),
            [CommandNames.ElseStart]: new ElseStartCommand(context),
            [CommandNames.Enum]: new EnumCommand(context),
            [CommandNames.EnumEnd]: new EnumEndCommand(context),
            [CommandNames.EnumMember]: new EnumMemberCommand(context),
            [CommandNames.EnumStart]: new EnumStartCommand(context),
            [CommandNames.FinallyEnd]: new FinallyEndCommand(context),
            [CommandNames.FinallyStart]: new FinallyStartCommand(context),
            [CommandNames.FileEnd]: new FileEndCommand(context),
            [CommandNames.FileStart]: new FileStartCommand(context),
            [CommandNames.ForEachEnd]: new ForEachEndCommand(context),
            [CommandNames.ForEachKeyStart]: new ForEachKeyStartCommand(context),
            [CommandNames.ForEachPairStart]: new ForEachPairStartCommand(context),
            [CommandNames.ForEachStart]: new ForEachStartCommand(context),
            [CommandNames.ForNumbersStart]: new ForNumbersStartCommand(context),
            [CommandNames.ForNumbersEnd]: new ForNumbersEndCommand(context),
            [CommandNames.FunctionStart]: new FunctionStartCommand(context),
            [CommandNames.FunctionEnd]: new FunctionEndCommand(context),
            [CommandNames.IfEnd]: new IfEndCommand(context),
            [CommandNames.IfStart]: new IfStartCommand(context),
            [CommandNames.ImportLocal]: new ImportLocalCommand(context),
            [CommandNames.ImportPackage]: new ImportPackageCommand(context),
            [CommandNames.Index]: new IndexCommand(context),
            [CommandNames.InterfaceStart]: new InterfaceStartCommand(context),
            [CommandNames.InterfaceEnd]: new InterfaceEndCommand(context),
            [CommandNames.InterfaceMethod]: new InterfaceMethodCommand(context),
            [CommandNames.IsNotNull]: new IsNotNullCommand(context),
            [CommandNames.IsNull]: new IsNullCommand(context),
            [CommandNames.LambdaBody]: new LambdaBodyCommand(context),
            [CommandNames.ListAddList]: new ListAddListCommand(context),
            [CommandNames.ListInitialize]: new ListInitializeCommand(context),
            [CommandNames.ListLength]: new ListLengthCommand(context),
            [CommandNames.ListPop]: new ListPopCommand(context),
            [CommandNames.ListPopFront]: new ListPopFrontCommand(context),
            [CommandNames.ListPush]: new ListPushCommand(context),
            [CommandNames.Literal]: new LiteralCommand(context),
            [CommandNames.ListSort]: new ListSortCommand(context),
            [CommandNames.ListType]: new ListTypeCommand(context),
            [CommandNames.MainEnd]: new MainEndCommand(context),
            [CommandNames.MainStart]: new MainStartCommand(context),
            [CommandNames.MathAbsolute]: new MathAbsoluteCommand(context),
            [CommandNames.MathFloor]: new MathFloorCommand(context),
            [CommandNames.MathMax]: new MathMaxCommand(context),
            [CommandNames.MathMin]: new MathMinCommand(context),
            [CommandNames.MemberVariable]: new MemberVariableCommand(context),
            [CommandNames.MemberVariableDeclare]: new MemberVariableDeclareCommand(context),
            [CommandNames.Not]: new NotCommand(context),
            [CommandNames.Operation]: new OperationCommand(context),
            [CommandNames.Operator]: new OperatorCommand(context),
            [CommandNames.Parenthesis]: new ParenthesisCommand(context),
            [CommandNames.Print]: new PrintCommand(context),
            [CommandNames.RestParameters]: new RestParametersCommand(context),
            [CommandNames.Return]: new ReturnCommand(context),
            [CommandNames.StringFormat]: new StringFormatCommand(context),
            [CommandNames.StringIndex]: new StringIndexCommand(context),
            [CommandNames.StringLength]: new StringLengthCommand(context),
            [CommandNames.SuperConstructor]: new SuperConstructorCommand(context),
            [CommandNames.This]: new ThisCommand(context),
            [CommandNames.ThrowException]: new ThrowExceptionCommand(context),
            [CommandNames.TryEnd]: new TryEndCommand(context),
            [CommandNames.TryStart]: new TryStartCommand(context),
            [CommandNames.Type]: new TypeCommand(context),
            [CommandNames.Value]: new ValueCommand(context),
            [CommandNames.Variable]: new VariableCommand(context),
            [CommandNames.VariableInline]: new VariableInlineCommand(context),
            [CommandNames.VariableStart]: new VariableStartCommand(context),
            [CommandNames.WhileEnd]: new WhileEndCommand(context),
            [CommandNames.WhileStart]: new WhileStartCommand(context)
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
}
