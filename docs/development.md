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

### Tests

Integration and end-to-end tests are done using BDD.
Folders under `/test/integration` and `/test/end-to-end` will contain a `.gls` file with GLS source code along with text files of the expected output in supported languages.
These are verified during `gulp test`.

You can run specific tests using their gulp task (`gulp test:integration` or `gulp test:end-to-end`).
Specify `--command`(s) to only run tests within groups that case-insensitive [minimatch](https://www.npmjs.com/package/minimatch) them (e.g. `gulp test:end-to-end --command *array* *list*`).
