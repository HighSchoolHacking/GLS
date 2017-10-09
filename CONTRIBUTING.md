# Contributing

First off, thanks for your interest in GLS!
GLS is an experimental syntax that provides a unified way to describe code.
It's very new and very untested, so don't expect everything to work.

Development respects the GitHub way of life.
Any changes should have an [issue](https://github.com/general-language-syntax/issues) [filed](https://github.com/general-language-syntax/issues/new) filed before a [pull request](https://github.com/general-language-syntax/pulls) is sent from a repository fork.


## Existing Style

Most rules are enforced by [TSLint](https://palantir.github.io/tslint).
For those that aren't, follow the existing conventions, including sensible variable names, consistent indentation, and correct grammar, spelling, and punctuation.


## Language Specification

The GLS language description on glslang.org is a set of `.md` files under [docs](https://github.com/general-language-syntax/GLS/tree/master/docs).



## Tests

### Integration and End-To-End

Test for compiled GLS output are located under [test/integration](https://github.com/general-language-syntax/GLS/tree/master/test/integration) and [test/end-to-end](https://github.com/general-language-syntax/GLS/tree/master/test/end-to-end).
Tests are represented by a folder of files, where one file is GLS source code and each other file is how that code should look when compiled to each other language.

When adding a new command, _always_ add new integration tests for it.

When adding a new