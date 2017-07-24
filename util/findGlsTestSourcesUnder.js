"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var findGlsFilesUnder_1 = require("./findGlsFilesUnder");
/**
 * Retrieves, for each command in a directory, tests under that command.
 *
 * @param rootPath   An absolute path to a command's tests folder.
 * @param inclusions   Command groups to run, if not all.
 * @returns Tests for each command in a directory.
 */
exports.findGlsTestSourcesUnder = function (rootPath, inclusions) {
    var childrenNames = findGlsFilesUnder_1.findGlsFilesUnder(rootPath, inclusions);
    var tests = new Map();
    for (var _i = 0, childrenNames_1 = childrenNames; _i < childrenNames_1.length; _i++) {
        var childName = childrenNames_1[_i];
        tests.set(childName, fs.readdirSync(path.resolve(rootPath, childName))
            .filter(function (testFileName) { return testFileName.indexOf(".gls") !== -1; })
            .map(function (testFileName) { return testFileName.substring(0, testFileName.indexOf(".gls")); }));
    }
    return tests;
};
