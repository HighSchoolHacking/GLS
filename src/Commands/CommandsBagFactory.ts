import { ConversionContext } from "../Conversions/ConversionContext";
import { Language } from "../Languages/Language";
import { LanguagesBag } from "../Languages/LanguagesBag";
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
import { GenericTypeCommand } from "./GenericTypeCommand";
import { IfEndCommand } from "./IfEndCommand";
import { IfStartCommand } from "./IfStartCommand";
import { ImportLocalCommand } from "./ImportLocalCommand";
import { ImportPackageCommand } from "./ImportPackageCommand";
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
import { MainStartCommand } from "./MainStartCommand";
import { MathAbsoluteCommand } from "./MathAbsoluteCommand";
import { MathCeilingCommand } from "./MathCeilingCommand";
import { MathFloorCommand } from "./MathFloorCommand";
import { MathMaxCommand } from "./MathMaxCommand";
import { MathMinCommand } from "./MathMinCommand";
import { MemberFunctionCommand } from "./MemberFunctionCommand";
import { MemberFunctionDeclareAbstractCommand } from "./MemberFunctionDeclareAbstractCommand";
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
import { SetAddCommand } from "./SetAddCommand";
import { SetContainsCommand } from "./SetContainsCommand";
import { SetNewCommand } from "./SetNewCommand";
import { SetToArrayCommand } from "./SetToArrayCommand";
import { SetToListCommand } from "./SetToListCommand";
import { SetTypeCommand } from "./SetTypeCommand";
import { StaticFunctionCommand } from "./StaticFunctionCommand";
import { StaticFunctionDeclareEndCommand } from "./StaticFunctionDeclareEndCommand";
import { StaticFunctionDeclareStartCommand } from "./StaticFunctionDeclareStartCommand";
import { StaticVariableCommand } from "./StaticVariableCommand";
import { StaticVariableDeclareCommand } from "./StaticVariableDeclareCommand";
import { StringCaseLowerCommand } from "./StringCaseLowerCommand";
import { StringCaseUpperCommand } from "./StringCaseUpperCommand";
import { StringFormatCommand } from "./StringFormatCommand";
import { StringIndexCommand } from "./StringIndexCommand";
import { StringLengthCommand } from "./StringLengthCommand";
import { StringSubstringIndexCommand } from "./StringSubstringIndexCommand";
import { StringSubstringLengthCommand } from "./StringSubstringLengthCommand";
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
 * Initializes new instances of the CommandsBag class.
 */
export class CommandsBagFactory {
    /**
     * Initializes a new instance of the CommandsBag class with a conversion context.
     *
     * @param context   Driving context for a conversion.
     * @returns CommandsBag instance for the conversion context.
     */
    public static forContext(context: ConversionContext): CommandsBag {
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
            new GenericTypeCommand(context),
            new InstanceOfCommand(context),
            new IfEndCommand(context),
            new IfStartCommand(context),
            new ImportLocalCommand(context),
            new ImportPackageCommand(context),
            new InterfaceStartCommand(context),
            new InterfaceEndCommand(context),
            new InterfaceMethodCommand(context),
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
            new LiteralCommand(context),
            new ListSortCommand(context),
            new ListTypeCommand(context),
            new MainContextEndCommand(context),
            new MainContextStartCommand(context),
            new MainEndCommand(context),
            new MainStartCommand(context),
            new MathAbsoluteCommand(context),
            new MathCeilingCommand(context),
            new MathFloorCommand(context),
            new MathMaxCommand(context),
            new MathMinCommand(context),
            new MemberFunctionCommand(context),
            new MemberFunctionDeclareAbstractCommand(context),
            new MemberFunctionDeclareEndCommand(context),
            new MemberFunctionDeclareStartCommand(context),
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
            new SetAddCommand(context),
            new SetContainsCommand(context),
            new SetToArrayCommand(context),
            new SetToListCommand(context),
            new SetNewCommand(context),
            new SetTypeCommand(context),
            new StaticFunctionCommand(context),
            new StaticFunctionDeclareStartCommand(context),
            new StaticFunctionDeclareEndCommand(context),
            new StaticVariableCommand(context),
            new StaticVariableDeclareCommand(context),
            new StringCaseLowerCommand(context),
            new StringCaseUpperCommand(context),
            new StringIndexCommand(context),
            new StringFormatCommand(context),
            new StringLengthCommand(context),
            new StringSubstringIndexCommand(context),
            new StringSubstringLengthCommand(context),
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
     * Initializes a new instance of the CommandsBag class with a language.
     *
     * @param language   Language to convert code into.
     * @returns CommandsBag instance for the language.
     */
    public static forLanguage(language: Language): CommandsBag {
        return CommandsBagFactory.forContext(
            new ConversionContext(language));
    }

    /**
     * Initializes a new instance of the CommandsBag class with a language by name.
     *
     * @param languageName   Name of a language to convert code into.
     * @returns CommandsBag instance for the language name.
     */
    public static forLanguageName(languageName: string): CommandsBag {
        const languagesBag = new LanguagesBag();

        return CommandsBagFactory.forLanguage(
            languagesBag.getLanguageByName(languageName));
    }
}
