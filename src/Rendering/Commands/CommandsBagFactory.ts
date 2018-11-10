import { RenderContext } from "../RenderContext";
import { ArrayIndexCommand } from "./ArrayIndexCommand";
import { ArrayInitializeCommand } from "./ArrayInitializeCommand";
import { ArrayLengthCommand } from "./ArrayLengthCommand";
import { ArrayTypeCommand } from "./ArrayTypeCommand";
import { BreakCommand } from "./BreakCommand";
import { CatchEndCommand } from "./CatchEndCommand";
import { CatchStartCommand } from "./CatchStartCommand";
import { ClassEndCommand } from "./ClassEndCommand";
import { ClassStartCommand } from "./ClassStartCommand";
import { CommandsBag } from "./CommandsBag";
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
import { DictionaryIndexCommand } from "./DictionaryIndexCommand";
import { DictionaryKeysCommand } from "./DictionaryKeysCommand";
import { DictionaryNewCommand } from "./DictionaryNewCommand";
import { DictionaryNewEndCommand } from "./DictionaryNewEndCommand";
import { DictionaryNewStartCommand } from "./DictionaryNewStartCommand";
import { DictionaryPairCommand } from "./DictionaryPairCommand";
import { DictionarySetCommand } from "./DictionarySetCommand";
import { DictionaryTypeCommand } from "./DictionaryTypeCommand";
import { ElseIfStartCommand } from "./ElseIfStartCommand";
import { ElseStartCommand } from "./ElseStartCommand";
import { EnumCommand } from "./EnumCommand";
import { EnumEndCommand } from "./EnumEndCommand";
import { EnumMemberCommand } from "./EnumMemberCommand";
import { EnumStartCommand } from "./EnumStartCommand";
import { ExceptionCommand } from "./ExceptionCommand";
import { FileEndCommand } from "./FileEndCommand";
import { FileStartCommand } from "./FileStartCommand";
import { FinallyEndCommand } from "./FinallyEndCommand";
import { FinallyStartCommand } from "./FinallyStartCommand";
import { ForEachEndCommand } from "./ForEachEndCommand";
import { ForEachKeyEndCommand } from "./ForEachKeyEndCommand";
import { ForEachKeyStartCommand } from "./ForEachKeyStartCommand";
import { ForEachPairEndCommand } from "./ForEachPairEndCommand";
import { ForEachPairStartCommand } from "./ForEachPairStartCommand";
import { ForEachStartCommand } from "./ForEachStartCommand";
import { ForNumbersEndCommand } from "./ForNumbersEndCommand";
import { ForNumbersStartCommand } from "./ForNumbersStartCommand";
import { GenericTypeCommand } from "./GenericTypeCommand";
import { IfEndCommand } from "./IfEndCommand";
import { IfStartCommand } from "./IfStartCommand";
import { IfStringToDoubleEndCommand } from "./IfStringToDoubleEndCommand";
import { IfStringToDoubleStartCommand } from "./IfStringToDoubleStartCommand";
import { ImportLocalCommand } from "./ImportLocalCommand";
import { ImportPackageCommand } from "./ImportPackageCommand";
import { ImportStandaloneFunctionsCommand } from "./ImportStandaloneFunctionsCommand";
import { InstanceOfCommand } from "./InstanceOfCommand";
import { InterfaceEndCommand } from "./InterfaceEndCommand";
import { InterfaceMethodCommand } from "./InterfaceMethodCommand";
import { InterfaceStartCommand } from "./InterfaceStartCommand";
import { IsNotNullCommand } from "./IsNotNullCommand";
import { IsNullCommand } from "./IsNullCommand";
import { LambdaBodyCommand } from "./LambdaBodyCommand";
import { ListAddListCommand } from "./ListAddListCommand";
import { ListIndexCommand } from "./ListIndexCommand";
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
import { MainGroupCommand } from "./MainGroupCommand";
import { MainStartCommand } from "./MainStartCommand";
import { MathAbsoluteCommand } from "./MathAbsoluteCommand";
import { MathCeilingCommand } from "./MathCeilingCommand";
import { MathFloorCommand } from "./MathFloorCommand";
import { MathMaxCommand } from "./MathMaxCommand";
import { MathMinCommand } from "./MathMinCommand";
import { MathPowerCommand } from "./MathPowerCommand";
import { MemberFunctionCommand } from "./MemberFunctionCommand";
import { MemberFunctionDeclareAbstractCommand } from "./MemberFunctionDeclareAbstractCommand";
import { MemberFunctionDeclareEndCommand } from "./MemberFunctionDeclareEndCommand";
import { MemberFunctionDeclareStartCommand } from "./MemberFunctionDeclareStartCommand";
import { MemberVariableCommand } from "./MemberVariableCommand";
import { MemberVariableDeclareCommand } from "./MemberVariableDeclareCommand";
import { MemberVariableSetCommand } from "./MemberVariableSetCommand";
import { NewCommand } from "./NewCommand";
import { NotCommand } from "./NotCommand";
import { OperationCommand } from "./OperationCommand";
import { OperationStartCommand } from "./OperationStartCommand";
import { OperatorCommand } from "./OperatorCommand";
import { ParenthesisCommand } from "./ParenthesisCommand";
import { PrintCommand } from "./PrintCommand";
import { RestParametersCommand } from "./RestParametersCommand";
import { ReturnCommand } from "./ReturnCommand";
import { SetAddCommand } from "./SetAddCommand";
import { SetContainsCommand } from "./SetContainsCommand";
import { SetNewCommand } from "./SetNewCommand";
import { SetToArrayCommand } from "./SetToArrayCommand";
import { SetToListCommand } from "./SetToListCommand";
import { SetTypeCommand } from "./SetTypeCommand";
import { StandaloneFunctionCommand } from "./StandaloneFunctionCommand";
import { StandaloneFunctionDeclareEndCommand } from "./StandaloneFunctionDeclareEndCommand";
import { StandaloneFunctionDeclareStartCommand } from "./StandaloneFunctionDeclareStartCommand";
import { StandaloneFunctionsDeclareEndCommand } from "./StandaloneFunctionsDeclareEndCommand";
import { StandaloneFunctionsDeclareStartCommand } from "./StandaloneFunctionsDeclareStartCommand";
import { StaticFunctionCommand } from "./StaticFunctionCommand";
import { StaticFunctionDeclareEndCommand } from "./StaticFunctionDeclareEndCommand";
import { StaticFunctionDeclareStartCommand } from "./StaticFunctionDeclareStartCommand";
import { StaticVariableCommand } from "./StaticVariableCommand";
import { StaticVariableDeclareCommand } from "./StaticVariableDeclareCommand";
import { StringCaseLowerCommand } from "./StringCaseLowerCommand";
import { StringCaseUpperCommand } from "./StringCaseUpperCommand";
import { StringFormatCommand } from "./StringFormatCommand";
import { StringIndexCommand } from "./StringIndexCommand";
import { StringIndexNotFoundCommand } from "./StringIndexNotFoundCommand";
import { StringIndexOfCommand } from "./StringIndexOfCommand";
import { StringLengthCommand } from "./StringLengthCommand";
import { StringSubstringIndexCommand } from "./StringSubstringIndexCommand";
import { StringSubstringLengthCommand } from "./StringSubstringLengthCommand";
import { StringTrimCommand } from "./StringTrimCommand";
import { ThisCommand } from "./ThisCommand";
import { ThrowCommand } from "./ThrowCommand";
import { TryEndCommand } from "./TryEndCommand";
import { TryStartCommand } from "./TryStartCommand";
import { TypeCommand } from "./TypeCommand";
import { UnsupportedCommand } from "./UnsupportedCommand";
import { ValueCommand } from "./ValueCommand";
import { VariableCommand } from "./VariableCommand";
import { VariableInlineCommand } from "./VariableInlineCommand";
import { VariableStartCommand } from "./VariableStartCommand";
import { WhileEndCommand } from "./WhileEndCommand";
import { WhileStartCommand } from "./WhileStartCommand";

/**
 * Initializes new instances of the CommandsBag class.
 */
export class CommandsBagFactory {
    /**
     * Initializes a new instance of the CommandsBag class with a conversion context.
     *
     * @param context   Driving context for a conversion.
     * @returns CommandsBag instance for the conversion context.
     */
    public static forContext(context: RenderContext): CommandsBag {
        return new CommandsBag([
            new ArrayIndexCommand(context),
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
            new DictionaryIndexCommand(context),
            new DictionaryKeysCommand(context),
            new DictionaryNewCommand(context),
            new DictionaryNewEndCommand(context),
            new DictionaryNewStartCommand(context),
            new DictionaryPairCommand(context),
            new DictionarySetCommand(context),
            new DictionaryTypeCommand(context),
            new ElseIfStartCommand(context),
            new ElseStartCommand(context),
            new EnumCommand(context),
            new EnumEndCommand(context),
            new EnumMemberCommand(context),
            new EnumStartCommand(context),
            new ExceptionCommand(context),
            new FileEndCommand(context),
            new FileStartCommand(context),
            new FinallyEndCommand(context),
            new FinallyStartCommand(context),
            new ForEachEndCommand(context),
            new ForEachKeyEndCommand(context),
            new ForEachKeyStartCommand(context),
            new ForEachPairEndCommand(context),
            new ForEachPairStartCommand(context),
            new ForEachStartCommand(context),
            new ForNumbersEndCommand(context),
            new ForNumbersStartCommand(context),
            new GenericTypeCommand(context),
            new IfEndCommand(context),
            new IfStartCommand(context),
            new IfStringToDoubleEndCommand(context),
            new IfStringToDoubleStartCommand(context),
            new ImportLocalCommand(context),
            new ImportPackageCommand(context),
            new ImportStandaloneFunctionsCommand(context),
            new InstanceOfCommand(context),
            new InterfaceEndCommand(context),
            new InterfaceMethodCommand(context),
            new InterfaceStartCommand(context),
            new IsNotNullCommand(context),
            new IsNullCommand(context),
            new LambdaBodyCommand(context),
            new ListAddListCommand(context),
            new ListIndexCommand(context),
            new ListInitializeCommand(context),
            new ListLengthCommand(context),
            new ListPopCommand(context),
            new ListPopFrontCommand(context),
            new ListPushCommand(context),
            new ListSortCommand(context),
            new ListTypeCommand(context),
            new LiteralCommand(context),
            new MainContextEndCommand(context),
            new MainContextStartCommand(context),
            new MainEndCommand(context),
            new MainGroupCommand(context),
            new MainStartCommand(context),
            new MathAbsoluteCommand(context),
            new MathCeilingCommand(context),
            new MathFloorCommand(context),
            new MathMaxCommand(context),
            new MathMinCommand(context),
            new MathPowerCommand(context),
            new MemberFunctionCommand(context),
            new MemberFunctionDeclareAbstractCommand(context),
            new MemberFunctionDeclareEndCommand(context),
            new MemberFunctionDeclareStartCommand(context),
            new MemberVariableCommand(context),
            new MemberVariableDeclareCommand(context),
            new MemberVariableSetCommand(context),
            new NewCommand(context),
            new NotCommand(context),
            new OperationCommand(context),
            new OperationStartCommand(context),
            new OperatorCommand(context),
            new ParenthesisCommand(context),
            new PrintCommand(context),
            new RestParametersCommand(context),
            new ReturnCommand(context),
            new SetAddCommand(context),
            new SetContainsCommand(context),
            new SetNewCommand(context),
            new SetToArrayCommand(context),
            new SetToListCommand(context),
            new SetTypeCommand(context),
            new StandaloneFunctionCommand(context),
            new StandaloneFunctionDeclareEndCommand(context),
            new StandaloneFunctionDeclareStartCommand(context),
            new StandaloneFunctionsDeclareEndCommand(context),
            new StandaloneFunctionsDeclareStartCommand(context),
            new StaticFunctionCommand(context),
            new StaticFunctionDeclareEndCommand(context),
            new StaticFunctionDeclareStartCommand(context),
            new StaticVariableCommand(context),
            new StaticVariableDeclareCommand(context),
            new StringCaseLowerCommand(context),
            new StringCaseUpperCommand(context),
            new StringFormatCommand(context),
            new StringIndexCommand(context),
            new StringIndexNotFoundCommand(context),
            new StringIndexOfCommand(context),
            new StringLengthCommand(context),
            new StringSubstringIndexCommand(context),
            new StringSubstringLengthCommand(context),
            new StringTrimCommand(context),
            new ThisCommand(context),
            new ThrowCommand(context),
            new TryEndCommand(context),
            new TryStartCommand(context),
            new TypeCommand(context),
            new UnsupportedCommand(context),
            new ValueCommand(context),
            new VariableCommand(context),
            new VariableInlineCommand(context),
            new VariableStartCommand(context),
            new WhileEndCommand(context),
            new WhileStartCommand(context),
        ]);
    }
}
