import { ConversionContext } from "../Conversions/ConversionContext";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";

import { ArrayInitializeCommand } from "./ArrayInitializeCommand";
import { ArrayLengthCommand } from "./ArrayLengthCommand";
import { ArrayTypeCommand } from "./ArrayTypeCommand";
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
import { ConcatenateCommand } from "./ConcatenateCommand";
import { ConstructorEndCommand } from "./ConstructorEndCommand";
import { ConstructorStartCommand } from "./ConstructorStartCommand";
import { ContinueCommand } from "./ContinueCommand";
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
import { FileEndCommand } from "./FileEndCommand";
import { FileStartCommand } from "./FileStartCommand";
import { FinallyEndCommand } from "./FinallyEndCommand";
import { FinallyStartCommand } from "./FinallyStartCommand";
import { ForEachEndCommand } from "./ForEachEndCommand";
import { ForEachKeyStartCommand } from "./ForEachKeyStartCommand";
import { ForEachPairStartCommand } from "./ForEachPairStartCommand";
import { ForEachStartCommand } from "./ForEachStartCommand";
import { ForNumbersEndCommand } from "./ForNumbersEndCommand";
import { ForNumbersStartCommand } from "./ForNumbersStartCommand";
import { FunctionCommand } from "./FunctionCommand";
import { FunctionEndCommand } from "./FunctionEndCommand";
import { FunctionStartCommand } from "./FunctionStartCommand";
import { IfEndCommand } from "./IfEndCommand";
import { IfStartCommand } from "./IfStartCommand";
import { ImportLocalCommand } from "./ImportLocalCommand";
import { ImportPackageCommand } from "./ImportPackageCommand";
import { IndexCommand } from "./IndexCommand";
import { InterfaceEndCommand } from "./InterfaceEndCommand";
import { InterfaceMethodCommand } from "./InterfaceMethodCommand";
import { InterfaceStartCommand } from "./InterfaceStartCommand";
import { IsNotNullCommand } from "./IsNotNullCommand";
import { IsNullCommand } from "./IsNullCommand";
import { LambdaBodyCommand } from "./LambdaBodyCommand";
import { ListAddListCommand } from "./ListAddListCommand";
import { ListInitializeCommand } from "./ListInitializeCommand";
import { ListLengthCommand } from "./ListLengthCommand";
import { ListPopCommand } from "./ListPopCommand";
import { ListPopFrontCommand } from "./ListPopFrontCommand";
import { ListPushCommand } from "./ListPushCommand";
import { ListSortCommand } from "./ListSortCommand";
import { ListTypeCommand } from "./ListTypeCommand";
import { LiteralCommand } from "./LiteralCommand";
import { MainContextEndCommand } from "./MainContextEndCommand";
import { MainContextStartCommand } from "./MainContextStartCommand";
import { MainEndCommand } from "./MainEndCommand";
import { MainStartCommand } from "./MainStartCommand";
import { MathAbsoluteCommand } from "./MathAbsoluteCommand";
import { MathFloorCommand } from "./MathFloorCommand";
import { MathMaxCommand } from "./MathMaxCommand";
import { MathMinCommand } from "./MathMinCommand";
import { MemberFunctionCommand } from "./MemberFunctionCommand";
import { MemberFunctionDeclareEndCommand } from "./MemberFunctionDeclareEndCommand";
import { MemberFunctionDeclareStartCommand } from "./MemberFunctionDeclareStartCommand";
import { MemberVariableCommand } from "./MemberVariableCommand";
import { MemberVariableDeclareCommand } from "./MemberVariableDeclareCommand";
import { NewCommand } from "./NewCommand";
import { NotCommand } from "./NotCommand";
import { OperationCommand } from "./OperationCommand";
import { OperatorCommand } from "./OperatorCommand";
import { ParenthesisCommand } from "./ParenthesisCommand";
import { PrintCommand } from "./PrintCommand";
import { RestParametersCommand } from "./RestParametersCommand";
import { ReturnCommand } from "./ReturnCommand";
import { StaticFunctionCommand } from "./StaticFunctionCommand";
import { StaticFunctionDeclareEndCommand } from "./StaticFunctionDeclareEndCommand";
import { StaticFunctionDeclareStartCommand } from "./StaticFunctionDeclareStartCommand";
import { StaticVariableCommand } from "./StaticVariableCommand";
import { StringFormatCommand } from "./StringFormatCommand";
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
     * Initializes a new instance of the CommandsBag class with a conversion context.
     *
     * @param context   Driving context for a conversion.
     * @returns CommandsBag instance for the conversion context.
     */
    public static forContext(context: ConversionContext): CommandsBag {
        return new CommandsBag([
            new ArrayInitializeCommand(context),
            new ArrayLengthCommand(context),
            new ArrayTypeCommand(context),
            new BreakCommand(context),
            new CatchEndCommand(context),
            new CatchStartCommand(context),
            new ClassEndCommand(context),
            new ClassStartCommand(context),
            new CommentBlockCommand(context),
            new CommentBlockEndCommand(context),
            new CommentBlockStartCommand(context),
            new CommentDocEndCommand(context),
            new CommentDocStartCommand(context),
            new CommentDocTagCommand(context),
            new CommentLineCommand(context),
            new ConcatenateCommand(context),
            new ConstructorEndCommand(context),
            new ConstructorStartCommand(context),
            new ContinueCommand(context),
            new DictionaryContainsKeyCommand(context),
            new DictionaryKeysCommand(context),
            new DictionaryNewCommand(context),
            new DictionaryNewEndCommand(context),
            new DictionaryNewStartCommand(context),
            new DictionaryPairCommand(context),
            new DictionaryTypeCommand(context),
            new ElseIfStartCommand(context),
            new ElseStartCommand(context),
            new EnumCommand(context),
            new EnumEndCommand(context),
            new EnumMemberCommand(context),
            new EnumStartCommand(context),
            new FinallyEndCommand(context),
            new FinallyStartCommand(context),
            new FileEndCommand(context),
            new FileStartCommand(context),
            new ForEachEndCommand(context),
            new ForEachKeyStartCommand(context),
            new ForEachPairStartCommand(context),
            new ForEachStartCommand(context),
            new ForNumbersStartCommand(context),
            new ForNumbersEndCommand(context),
            new FunctionCommand(context),
            new FunctionStartCommand(context),
            new FunctionEndCommand(context),
            new IfEndCommand(context),
            new IfStartCommand(context),
            new ImportLocalCommand(context),
            new ImportPackageCommand(context),
            new IndexCommand(context),
            new InterfaceStartCommand(context),
            new InterfaceEndCommand(context),
            new InterfaceMethodCommand(context),
            new IsNotNullCommand(context),
            new IsNullCommand(context),
            new LambdaBodyCommand(context),
            new ListAddListCommand(context),
            new ListInitializeCommand(context),
            new ListLengthCommand(context),
            new ListPopCommand(context),
            new ListPopFrontCommand(context),
            new ListPushCommand(context),
            new LiteralCommand(context),
            new ListSortCommand(context),
            new ListTypeCommand(context),
            new MainContextEndCommand(context),
            new MainContextStartCommand(context),
            new MainEndCommand(context),
            new MainStartCommand(context),
            new MathAbsoluteCommand(context),
            new MathFloorCommand(context),
            new MathMaxCommand(context),
            new MathMinCommand(context),
            new MemberFunctionCommand(context),
            new MemberFunctionDeclareStartCommand(context),
            new MemberFunctionDeclareEndCommand(context),
            new MemberVariableCommand(context),
            new MemberVariableDeclareCommand(context),
            new NewCommand(context),
            new NotCommand(context),
            new OperationCommand(context),
            new OperatorCommand(context),
            new ParenthesisCommand(context),
            new PrintCommand(context),
            new RestParametersCommand(context),
            new ReturnCommand(context),
            new StaticFunctionCommand(context),
            new StaticFunctionDeclareStartCommand(context),
            new StaticFunctionDeclareEndCommand(context),
            new StaticVariableCommand(context),
            new StringFormatCommand(context),
            new StringLengthCommand(context),
            new SuperConstructorCommand(context),
            new ThisCommand(context),
            new ThrowExceptionCommand(context),
            new TryEndCommand(context),
            new TryStartCommand(context),
            new TypeCommand(context),
            new ValueCommand(context),
            new VariableCommand(context),
            new VariableInlineCommand(context),
            new VariableStartCommand(context),
            new WhileEndCommand(context),
            new WhileStartCommand(context)
        ]);
    }

    /**
     * Globally known commands, keyed by their GLS alias.
     */
    private commands: { [i: string]: Command };

    /**
     * Initializes a new instance of the CommandsBag class.
     *
     * @param context   The driving context for conversions.
     */
    public constructor(commands: Command[]) {
        for (const command of commands) {
            this.addCommand(command);
        }
    }

    /**
     * Adds a command to the bag.
     *
     * @param command   Command to add.
     */
    public addCommand(command: Command): void {
        const metadata = command.getMetadata();

        if (this.commands.hasOwnProperty(metadata.name)) {
            throw new Error(`Cannot add duplicate command: '${metadata.name}'.`);
        }

        this.commands[metadata.name] = command;
    }

    /**
     * Retrieves the command under the given alias.
     *
     * @param name   The unique name of a command.
     * @returns The command under the given alias.
     */
    public getCommand(name: string): Command {
        if (!this.commands.hasOwnProperty(name)) {
            throw new Error(`Unknown command requested: '${name}'.`);
        }

        return this.commands[name];
    }

    /**
     * @returns Commands, keyed by their GLS aliases.
     */
    public getCommands(): { [i: string]: Command } {
        return this.commands;
    }
}
