"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// todo: use mz/fs for async/await :)
var fs = require("fs");
var path = require("path");
var findGlsTestSourcesUnder_1 = require("./findGlsTestSourcesUnder");
var createLanguageFile = function (newLanguage, oldLanguage) {
    var source = path.join(__dirname, "../src/Languages/" + oldLanguage.name + ".ts");
    var sink = path.join(__dirname, "../src/Languages/" + newLanguage.name + ".ts");
    // don't judge pls, offline
    var sourceContents = fs.readFileSync(source)
        .toString()
        .replace(new RegExp(" " + oldLanguage.name + " ", "g"), " " + newLanguage.name + " ")
        .replace(".extension = \"" + oldLanguage.extension + "\"", ".extension = \"" + newLanguage.extension + "\"")
        .replace(".name = \"" + oldLanguage.name + "\"", ".name = \"" + newLanguage.name + "\"");
    fs.writeFileSync(sink, sourceContents);
};
var createLanguageTestsUnder = function (newLanguage, oldLanguage, category) {
    var filesRoot = path.join(__dirname, "../test/" + category);
    var glsTests = findGlsTestSourcesUnder_1.findGlsTestSourcesUnder(filesRoot);
    // .map((fileName) => path.join(filesRoot, fileName));
    glsTests.forEach(function (glsCases, glsTest) {
        var casesRoot = path.join(filesRoot, glsTest);
        for (var _i = 0, glsCases_1 = glsCases; _i < glsCases_1.length; _i++) {
            var glsCase = glsCases_1[_i];
            var source = path.join(casesRoot, glsCase + oldLanguage.extension);
            var sink = path.join(casesRoot, glsCase + newLanguage.extension);
            console.log({ source: source, sink: sink });
            fs.writeFileSync(sink, fs.readFileSync(source).toString());
        }
    });
    // for (const glsFile of glsFiles) {
    // }
};
var createLanguageTests = function (newLanguage, oldLanguage) {
    createLanguageTestsUnder(newLanguage, oldLanguage, "integration");
    createLanguageTestsUnder(newLanguage, oldLanguage, "end-to-end");
};
exports.createNewLanguage = function (newLanguage, oldLanguage) {
    createLanguageFile(newLanguage, oldLanguage);
    createLanguageTests(newLanguage, oldLanguage);
};
