# Development

GLS uses [Gulp](http://gulpjs.com/) to automate building, which requires [Node.js](http://node.js.org).

To build from scratch, install Node.js and run the following commands:

```
npm install -g gulp
npm install
gulp
```

To build, run `gulp`.
You can build+lint the souce without running tests using `gulp src`, or just build+lint+run tests using `gulp test`.
The full list of tasks is in `gulpfile.js`.

Alternately, use `tsc` to build source files under `/src` to `/lib`, and `tsc -w` to build upon file changes.
This is faster but doesn't run linting.


## Coding for GLS

The recommended setup is [Visual Studio Code](https://code.visualstudio.com) with the [TSLint extension](https://marketplace.visualstudio.com/items?itemName=eg2.tslint).

### Style Guidelines

Most rules are enforced by [TSLint](https://palantir.github.io/tslint).
For those that aren't, follow the existing conventions, including sensible variable names, consistent indentation, and correct grammar, spelling, and punctuation.

### Adding Commands

Command class instances are stored at runtime by their unique string name.
When adding a new command under `src/Commands`, also add a line for it under `src/CommandsBagFactory`.

When adding a new command class, you'll need to override the abstract `getMetadata` and `render` commands.

To directly see which files you should add or edit to add a new command, run a full-text search on both the PascalCase command name (e.g. `MemberFunction`) and the GLS style name (e.g. `member function`).

_([#375](https://github.com/general-language-syntax/GLS/issues/375) tracks adding a utility to automate adding this!)_

#### "Native" Commands

Some commands, such as native math operations, directly call into native APIs and would require a lot of repeated source code to represent.
A `NativeCallCommand` sub-class of `Command` can be extended from for these.
It requires overriding the abstract `retrieveNativeCallProperties` instead of `render`, which returns the language's `NativeCallProperties` for that command.

### Adding Languages

Languages are stored at runtime by their language name in a `LanguagesBag`.
You can add a new language by running `gulp util:new-language --language-name <language-name> --language-extension <language-extension> --base-name <base-name> --base-extension <base-extension>`.

Files and listings for a new language identical to the original language except for the name and extension will be added locally.

### Unit Tests

These are stored under `test/unit/**/*.ts` and compiled to equivalent files under `test/unit/**/*.js`.

You can run them with `gulp test:unit`, or directly with the `mocha` CLI.
Use `mocha` to specify tests:

```shell
mocha test/unit/Tokenization/Parsers/SourceLineParser.js
mocha test/unit/Tokenization/Parsers/SourceLineParser.js -g "nested CommandNode"
```

### Integration and End-To-End Tests

Test for compiled GLS output are located under [test/integration](https://github.com/general-language-syntax/GLS/tree/master/test/integration) and [test/end-to-end](https://github.com/general-language-syntax/GLS/tree/master/test/end-to-end).
Tests are represented by a folder of files, where one file is GLS source code and each other file is how that code should look when compiled to each other language.

You can run a subset of commands by passing `--command`:

```shell
gulp test:integration --command *string*
gulp test:end-to-end --command StringFormat
```

When adding a new command, _always_ add new integration tests for it.

When adding a new set of commands around a feature, add an end-to-end test for it.
