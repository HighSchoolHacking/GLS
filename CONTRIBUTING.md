# Contributing

Before working on contributing files to GLS, file issue(s) regarding the changes you'd like to see.

## Language Specification

The GLS language specification lives as a set of `.md` files under [docs/Design](https://github.com/HighSchoolHacking/GLS/tree/master/docs/Design).
Changes to the specification go through a three-step process:

1. [Document the specification changes](#document-the-specification-changes)
2. [Create BDD tests for the specification changes](#create-bdd-tests-for-the-specification-changes)
3. [Implement the changes](#implement-the-changes)

These should all be done on a fork of the GLS repository, then sent as a GitHub pull request to the `next` branch.

### Document the specification changes

Each grouping of GLS commands has its own `.md` file.
Those files follow the format in [docs/Design Doc Template.md](https://github.com/HighSchoolHacking/GLS/blob/master/docs/Design/Design%20Doc%20Template.md).

### Create BDD tests for the specification changes

Test files are located under [test/integration](https://github.com/HighSchoolHacking/GLS/tree/master/test/integration) and [test/end-to-end](https://github.com/HighSchoolHacking/GLS/tree/master/test/end-to-end).
Tests are represented by a folder of files, where one file is GLS source code and each other file is how that code should look when compiled to each other language.

### Implement the changes

Follow the existing style guide for code.
It helps to use the TSLint extension for your code editor.
