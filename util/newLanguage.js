"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo: use mz/fs for async/await :)
var fs = require("fs");
var path = require("path");
var createLanguageFile = function (languageName, templateName) {
    var sink = path.join(__dirname, "../src/Languages/" + languageName + ".ts");
    var source = path.join(__dirname, "../src/Languages/" + templateName + ".ts");
    // don't judge pls, offline
    var sourceContents = fs.readFileSync(source)
        .toString()
        .replace(new RegExp(" " + templateName + " ", "g"), " " + languageName + " ");
    fs.writeFileSync(sink, sourceContents);
};
exports.newLanguage = function (languageName, templateName) {
    if (templateName === void 0) { templateName = "TypeScript"; }
    createLanguageFile(languageName, templateName);
};
