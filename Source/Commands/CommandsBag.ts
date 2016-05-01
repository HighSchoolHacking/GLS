/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="CommandResult.ts" />

/// <reference path="ArrayInitializeCommand.ts" />
/// <reference path="ArrayLengthCommand.ts" />
/// <reference path="BreakCommand.ts" />
/// <reference path="ClassEndCommand.ts" />
/// <reference path="ClassStartCommand.ts" />
/// <reference path="CommentBlockCommand.ts" />
/// <reference path="CommentBlockEndCommand.ts" />
/// <reference path="CommentBlockStartCommand.ts" />
/// <reference path="CommentDocEndCommand.ts" />
/// <reference path="CommentDocStartCommand.ts" />
/// <reference path="CommentDocTagCommand.ts" />
/// <reference path="CommentLineCommand.ts" />
/// <reference path="ConstructorEndCommand.ts" />
/// <reference path="ConstructorStartCommand.ts" />
/// <reference path="ContinueCommand.ts" />
/// <reference path="ConcatenateCommand.ts" />
/// <reference path="DictionaryContainsKeyCommand.ts" />
/// <reference path="DictionaryKeysCommand.ts" />
/// <reference path="DictionaryNewCommand.ts" />
/// <reference path="DictionaryNewEndCommand.ts" />
/// <reference path="DictionaryNewStartCommand.ts" />
/// <reference path="DictionaryPairCommand.ts" />
/// <reference path="DictionaryTypeCommand.ts" />
/// <reference path="ElseIfStartCommand.ts" />
/// <reference path="ElseStartCommand.ts" />
/// <reference path="EnumCommand.ts" />
/// <reference path="EnumEndCommand.ts" />
/// <reference path="EnumMemberCommand.ts" />
/// <reference path="EnumStartCommand.ts" />
/// <reference path="FileEndCommand.ts" />
/// <reference path="FileStartCommand.ts" />
/// <reference path="ForEachEndCommand.ts" />
/// <reference path="ForEachKeyStartCommand.ts" />
/// <reference path="ForEachPairStartCommand.ts" />
/// <reference path="ForNumbersStartCommand.ts" />
/// <reference path="ForNumbersEndCommand.ts" />
/// <reference path="FunctionEndCommand.ts" />
/// <reference path="FunctionStartCommand.ts" />
/// <reference path="IfEndCommand.ts" />
/// <reference path="IfStartCommand.ts" />
/// <reference path="IndexCommand.ts" />
/// <reference path="ListInitializeCommand.ts" />
/// <reference path="ListLengthCommand.ts" />
/// <reference path="ListPushCommand.ts" />
/// <reference path="LiteralCommand.ts" />
/// <reference path="MainEndCommand.ts" />
/// <reference path="MainStartCommand.ts" />
/// <reference path="MemberVariableDeclareCommand.ts" />
/// <reference path="NotCommand.ts" />
/// <reference path="OperationCommand.ts" />
/// <reference path="OperatorCommand.ts" />
/// <reference path="ParenthesisCommand.ts" />
/// <reference path="PrintCommand.ts" />
/// <reference path="ReturnCommand.ts" />
/// <reference path="StringIndexCommand.ts" />
/// <reference path="StringLengthCommand.ts" />
/// <reference path="ThisCommand.ts" />
/// <reference path="TypeCommand.ts" />
/// <reference path="ValueCommand.ts" />
/// <reference path="VariableCommand.ts" />
/// <reference path="VariableInlineCommand.ts" />
/// <reference path="VariableStartCommand.ts" />
/// <reference path="WhileEndCommand.ts" />
/// <reference path="WhileStartCommand.ts" />

namespace GLS.Commands {
    "use strict";

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
                "file end": new FileEndCommand(context),
                "file start": new FileStartCommand(context),
                "for each end": new ForEachEndCommand(context),
                "for each key start": new ForEachKeyStartCommand(context),
                "for each pair start": new ForEachPairStartCommand(context),
                "for numbers start": new ForNumbersStartCommand(context),
                "for numbers end": new ForNumbersEndCommand(context),
                "function start": new FunctionStartCommand(context),
                "function end": new FunctionEndCommand(context),
                "if end": new IfEndCommand(context),
                "if start": new IfStartCommand(context),
                "index": new IndexCommand(context),
                "list initialize": new ListInitializeCommand(context),
                "list length": new ListLengthCommand(context),
                "list push": new ListPushCommand(context),
                "literal": new LiteralCommand(context),
                "main end": new MainEndCommand(context),
                "main start": new MainStartCommand(context),
                "member variable declare": new MemberVariableDeclareCommand(context),
                "not": new NotCommand(context),
                "operation": new OperationCommand(context),
                "operator": new OperatorCommand(context),
                "parenthesis": new ParenthesisCommand(context),
                "print": new PrintCommand(context),
                "return": new ReturnCommand(context),
                "string index": new StringIndexCommand(context),
                "string length": new StringLengthCommand(context),
                "this": new ThisCommand(context),
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
                throw new Error(`Unknown command requested: ${alias}`);
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
        public renderCommand(parameters: string[]): Commands.LineResults {
            let command: Command = this.getCommand(parameters[0]);

            command.checkParameterValidity(parameters);

            return command.render(parameters);
        }
    }
}
