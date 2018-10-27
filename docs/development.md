# Development

To build from scratch, install [Node.js](http://node.js.org) and run `npm install` to install development dependencies.
GLS is written in [TypeScript](http://typescriptlang.org).

To run end-to-end tests, you'll need the following installed globally:

* [Java JDK](https://www.oracle.com/technetwork/java/javase/downloads)
  * [_Windows: with `java.exe` on your path_](https://stackoverflow.com/questions/16137713/how-do-i-run-a-java-program-from-the-command-line-on-windows)
* [.NET Core SDK](https://microsoft.com/net/core)
* [Python 3](https://www.python.org/downloads)
* [Ruby](https://www.ruby-lang.org/en/documentation/installation)

The recommended development setup is [Visual Studio Code](https://code.visualstudio.com) with the following extensions:

* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

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

### Integration Tests

Test for compiled GLS output are located under [test/integration](https://github.com/general-language-syntax/GLS/tree/master/test/integration).
These integration tests each take in a `.gls` file, compile it to each supported language, and validate the output is the same as the expected outputs contained in the folder.

Tests are represented by a folder of files, where one file is GLS source code and each other file is how that code should look when compiled to each other language.

Run integration tests with `npm run test:integration`.
You can run a subset of commands by passing `-- --include=` with a case-insensitive glob to include test names:

```shell
npm run test:run:integration -- --include=StringFormat
npm run test:run:integration -- --include=*dictionary* --include=*string*
```

When adding a new command, _always_ add new integration tests for it.

### End-to-End Tests

End-to-end tests are similar to integration tests, but each test folder contains a group of files as a project.
Test projects that also contain an `output.txt` have their "index" (main) files run in each supported language and the console output validated to be the same.

Run integration tests with `npm run test:end-to-end`.
You can run a subset of commands by passing `-- --include=` with a case-insensitive glob to include test names:

```shell
npm run test:run:end-to-end -- --include=Array
npm run test:run:end-to-end -- --include=*array* --include=*list*
```

When adding a new command or fixing a bug, you should generally add or improve end-to-end tests to cover the change.

## Adding Commands

Command class instances are stored at runtime by their unique string name.
When adding a new command under `src/Commands`, also add a line for it under `src/CommandsBagFactory`.

When adding a new command class, you'll need to override the abstract `getMetadata` and `render` commands.

To directly see which files you should add or edit to add a new command, run a full-text search on both the PascalCase command name (e.g. `MemberFunction`) and the GLS style name (e.g. `member function`).

_([#375](https://github.com/general-language-syntax/GLS/issues/375) tracks adding a utility to automate adding this!)_

### "Native" Commands

Some commands, such as native math operations, directly call into native APIs and would require a lot of repeated source code to represent.
A `NativeCallCommand` sub-class of `Command` can be extended from for these.
It requires overriding the abstract `retrieveNativeCallSyntax` instead of `render`, which returns the language's `NativeCallSyntax` for that command.

## Adding Languages

Languages are stored at runtime by their language name in a `LanguagesBag`.
You can add a new language by running `npm run util:new-language`.
For example:

```shell
npm run util:new-language -- --language-name PHP --language-extension .php --base-name Ruby --base-extension .rb
```

Files and listings for a new language identical to the original language except for the name and extension will be added locally.
