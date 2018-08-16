# Development

To build from scratch, install [Node.js](http://node.js.org) and run `npm install` to install development dependencies.
GLS is written in [TypeScript](http://typescriptlang.org).

The recommended setup is [Visual Studio Code](https://code.visualstudio.com) with the [TSLint extension](https://marketplace.visualstudio.com/items?itemName=eg2.tslint).

To run a full build+lint+test, run `npm run verify`.

Use `npm run watch` to run the TypeScript compiler in watch mode on both source and test files.

Alternately, you can build+lint individual sections of code:

* `npm run src`: GLS source code.
* `npm run test`: Test file infrastructure.
* `npm run util`: Miscellaneous utilities.

The full list of tasks is in `package.json`.

## Style Guidelines

Most rules are enforced by [TSLint](https://palantir.github.io/tslint).
For those that aren't, follow the existing conventions, including sensible variable names, consistent indentation, and correct grammar, spelling, and punctuation.

## Tests

### Unit Tests

These are stored under `test/unit/**/*.ts` and compiled to equivalent files under `test/unit/**/*.js`.

You can run them with `npm run test:unit`, or directly with the `mocha` CLI.
Use `mocha` to specify tests:

```shell
mocha test/unit/Tokenization/Parsers/SourceLineParserTests.js
mocha test/unit/Tokenization/Parsers/SourceLineParserTests.js -g "nested CommandNode"
```

### Integration and End-To-End Tests

Test for compiled GLS output are located under [test/integration](https://github.com/general-language-syntax/GLS/tree/master/test/integration) and [test/end-to-end](https://github.com/general-language-syntax/GLS/tree/master/test/end-to-end).
Tests are represented by a folder of files, where one file is GLS source code and each other file is how that code should look when compiled to each other language.
You can run specific suites of tests using `npm run test:integration` or `npm run test:end-to-end`.

You can run a subset of commands in either by passing `--command`:

```shell
npm run test:integration --command *string*
npm run test:end-to-end --command StringFormat
```

When adding a new command, _always_ add new integration tests for it.

When adding a new set of commands around a feature, add an end-to-end test for it.

## Adding Commands

Command class instances are stored at runtime by their unique string name.
When adding a new command under `src/Commands`, also add a line for it under `src/CommandsBagFactory`.

When adding a new command class, you'll need to override the abstract `getMetadata` and `render` commands.

To directly see which files you should add or edit to add a new command, run a full-text search on both the PascalCase command name (e.g. `MemberFunction`) and the GLS style name (e.g. `member function`).

_([#375](https://github.com/general-language-syntax/GLS/issues/375) tracks adding a utility to automate adding this!)_

### "Native" Commands

Some commands, such as native math operations, directly call into native APIs and would require a lot of repeated source code to represent.
A `NativeCallCommand` sub-class of `Command` can be extended from for these.
It requires overriding the abstract `retrieveNativeCallProperties` instead of `render`, which returns the language's `NativeCallProperties` for that command.

## Adding Languages

Languages are stored at runtime by their language name in a `LanguagesBag`.
You can add a new language by running `npm run util:new-language`.
For example:

```shell
npm run util:new-language -- --language-name PHP --language-extension .php --base-name Ruby --base-extension .rb
```

Files and listings for a new language identical to the original language except for the name and extension will be added locally.
