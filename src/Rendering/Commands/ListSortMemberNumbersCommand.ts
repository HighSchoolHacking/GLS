import { ListSortMembersSyntax } from "../Languages/Properties/Syntax/ListSortMembersSyntax";
import { CommandNames } from "../Names/CommandNames";
import { KeywordNames } from "../Names/KeywordNames";
import { ListSortMembersCommand } from "./ListSortMembersCommand";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { KeywordParameter } from "./Metadata/Parameters/KeywordParameter";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Sorts a list in-place by keyed member numbers.
 */
export class ListSortMemberNumbersCommand extends ListSortMembersCommand {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.ListSortMemberNumbers)
        .withDescription("Sorts a list in-place by keyed member numbers")
        .withParameters([
            new SingleParameter("name", "Name of the list.", true),
            new KeywordParameter(KeywordNames.Privacies, "The privacy of the members.", true),
            new SingleParameter("instance", "Starting name of instances to compare.", true),
            new SingleParameter("memberKey", "Key of members to compare.", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return ListSortMemberNumbersCommand.metadata;
    }

    /**
     * @returns How the list sorts by this kind of members.
     */
    protected getSortMembersForm(): ListSortMembersSyntax {
        return this.language.syntax.lists.sortMemberNumbers;
    }
}
