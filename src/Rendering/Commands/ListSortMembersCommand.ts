import { Import } from "../Languages/Imports/Import";
import { ListSortMembersSyntax, ListSortMemberType } from "../Languages/Properties/Syntax/ListSortMembersSyntax";
import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";

/**
 * Sorts a list in-place by keyed members.
 */
export abstract class ListSortMembersCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const sortMembers = this.getSortMembersForm();

        if (sortMembers.type === ListSortMemberType.KeyComparator) {
            return this.renderAsKeyComparator(sortMembers, parameters);
        }

        if (sortMembers.type === ListSortMemberType.OnProperty) {
            return this.renderAsOnProperty(sortMembers, parameters);
        }

        return this.renderAsKeyShorthand(sortMembers, parameters);
    }

    /**
     * @returns How the list sorts by this kind of members.
     */
    protected abstract getSortMembersForm(): ListSortMembersSyntax;

    private renderAsOnProperty(sortMembers: ListSortMembersSyntax, parameters: string[]): LineResults {
        const imports: Import[] = [];

        const listName = parameters[1];
        const privacy = parameters[2];
        const instanceName = parameters[3];
        const memberKey = parameters[4];

        const memberVariableLine = this.context.convertParsed([CommandNames.MemberVariable, privacy, instanceName, memberKey]);
        imports.push(...memberVariableLine.addedImports);

        // list = list | Sort-Object -Property memberKey
        let output = listName;
        output += sortMembers.lambdaLeft;
        output += listName;
        output += sortMembers.lambdaMiddleLeft;
        output += memberKey;
        output += sortMembers.lambdaRight;

        return LineResults.newSingleLine(output)
            .withImports(sortMembers.requiredImports)
            .withAddSemicolon(true);
    }

    /**
     * Renders the command as a comparator function.
     *
     * @param sortMembers   How the list sorts by this kind of members.
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    private renderAsKeyComparator(sortMembers: ListSortMembersSyntax, parameters: string[]): LineResults {
        const imports: Import[] = [];

        const list = parameters[1];
        const privacy = parameters[2];
        const memberKey = parameters[4];

        const instanceNameA = parameters[3] + "A";
        const memberVariableALine = this.context.convertParsed([CommandNames.MemberVariable, privacy, instanceNameA, memberKey]);
        imports.push(...memberVariableALine.addedImports);

        const instanceNameB = parameters[3] + "B";
        const memberVariableBLine = this.context.convertParsed([CommandNames.MemberVariable, privacy, instanceNameB, memberKey]);
        imports.push(...memberVariableBLine.addedImports);

        // list.Sort((instaneNameA, instaneNameB) => instanceNameA.memberKey < instaneNameB.memberKey ? 1 : -1)
        let output = list;
        output += sortMembers.lambdaLeft;
        output += instanceNameA + ", " + instanceNameB;
        output += sortMembers.lambdaMiddleLeft;
        output += memberVariableALine.commandResults[0].text;
        output += sortMembers.lambdaMiddleRight;
        output += memberVariableBLine.commandResults[0].text;
        output += sortMembers.lambdaRight;

        return LineResults.newSingleLine(output)
            .withImports(sortMembers.requiredImports)
            .withAddSemicolon(true);
    }

    /**
     * Renders the command as a Pythonic member shorthand function.
     *
     * @param sortMembers   How the list sorts by this kind of members.
     * @param parameters   The command's name, followed by any number of parameters.
     * @returns Line(s) of code in the language.
     */
    private renderAsKeyShorthand(sortMembers: ListSortMembersSyntax, parameters: string[]): LineResults {
        const imports: Import[] = [];

        const listName = parameters[1];
        const privacy = parameters[2];
        const instanceName = parameters[3];
        const memberKey = parameters[4];

        const memberVariableLine = this.context.convertParsed([CommandNames.MemberVariable, privacy, instanceName, memberKey]);
        imports.push(...memberVariableLine.addedImports);

        // list.sort(key=lambda instanceName: instanceName.memberKey)
        let output = listName;
        output += sortMembers.lambdaLeft;
        output += instanceName;
        output += sortMembers.lambdaMiddleLeft;
        output += memberVariableLine.commandResults[0].text;
        output += sortMembers.lambdaRight;

        return LineResults.newSingleLine(output)
            .withImports(sortMembers.requiredImports)
            .withAddSemicolon(true);
    }
}
