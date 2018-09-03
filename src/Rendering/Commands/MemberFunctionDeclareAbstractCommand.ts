import { CommandNames } from "./CommandNames";
import { KeywordNames } from "./KeywordNames";
import { MemberFunctionDeclareCommand } from "./MemberFunctionDeclareCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares an abstract member function.
 */
export class MemberFunctionDeclareAbstractCommand extends MemberFunctionDeclareCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.MemberFunctionDeclareAbstract)
        .withDescription("Declares an abstract member function.")
        .withIndentation([0])
        .withParameters([
            new KeywordParameter(KeywordNames.PrivaciesAbstract, "The privacy of the function.", true),
            new SingleParameter("name", "The name of the function.", true),
            new SingleParameter("returnType", "The return type of the function.", true),
            new RepeatingParameters("Function parameters.", [
                new SingleParameter("parameterName", "A named parameter for the function.", true),
                new SingleParameter("parameterType", "The type of the parameter.", true),
            ]),
            new KeywordParameter([KeywordNames.Throws], "Keyword to list possible exceptions", false),
            new RepeatingParameters("Possible exceptions.", [
                new SingleParameter("possibleException", "A possible exceptions thrown by this function.", true),
            ]),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return MemberFunctionDeclareAbstractCommand.metadata;
    }

    /**
     * @returns Whether this is able to render any output.
     */
    protected canRender(): boolean {
        return this.language.properties.classes.abstractsSupported;
    }

    /**
     * @returns Text after the publicity keyword.
     */
    protected getAfterPublicity(): string {
        return this.language.properties.classes.members.functions.abstractDeclaration;
    }

    /**
     * @returns Text to end the declaration.
     */
    protected getEnder(): string {
        return this.language.properties.style.semicolon;
    }
}
