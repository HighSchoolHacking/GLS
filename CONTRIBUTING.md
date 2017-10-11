# Contributing

First off, thanks for your interest in GLS!
GLS is an experimental syntax that provides a unified way to describe code.
It's very new and very untested, so don't expect everything to work.

Development respects the GitHub way of life.
Any changes should have an [issue](https://github.com/general-language-syntax/issues) [filed](https://github.com/general-language-syntax/issues/new) before a [pull request](https://github.com/general-language-syntax/pulls) is sent from a repository fork.


## Coding for GLS

The recommended setup is [Visual Studio Code](https://code.visualstudio.com) with the [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint).

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
You can add a new language by running `gulp util:new-language --name <name> --extension <extension> --baseName <baseName> --baseExtension <baseExtension>`.

Files and listings for a new language identical to the original language except for the name and extension will be added locally.

### Integration and End-To-End Tests

Test for compiled GLS output are located under [test/integration](https://github.com/general-language-syntax/GLS/tree/master/test/integration) and [test/end-to-end](https://github.com/general-language-syntax/GLS/tree/master/test/end-to-end).
Tests are represented by a folder of files, where one file is GLS source code and each other file is how that code should look when compiled to each other language.

When adding a new command, _always_ add new integration tests for it.

When adding a new set of commands around a feature, add an end-to-end test for it.
