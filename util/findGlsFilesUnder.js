"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var minimatch = require("minimatch");
/**
 * Retrieves, command names within a directory.
 *
 * @param rootPath   An absolute path to a command's tests folder.
 * @param inclusions   Command groups to only include, if not all.
 * @returns Command names within the directory.
 */
exports.findGlsFilesUnder = function (rootPath, inclusions) {
    var childrenNames = fs.readdirSync(rootPath);
    if (inclusions === undefined) {
        return childrenNames;
    }
    var inclusionMatchers = Array.from(inclusions.keys());
    return childrenNames
        .filter(function (childName) { return inclusionMatchers.some(function (inclusionMatcher) { return minimatch(childName, inclusionMatcher, {
        nocase: true
    }); }); });
};
