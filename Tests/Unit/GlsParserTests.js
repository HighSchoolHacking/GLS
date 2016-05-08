var mocks = require("../mocks.js");

// var expect = require("chai").expect,
//     mocha = require("mocha"),
//     mocks = require("../mocks.js"),
//     GLS = require("../../Distribution/GLS.js");

// (function () {
//     "use strict";

//     mocha.describe("GlsParser", () => {
//         mocha.describe("parseCommand", () => {
//             mocha.it("parses a single command", () => {
//                 let parser = mocks.mockGlsParser(),
//                     language = mocks.mockLanguage(),
//                     command = "literal",
//                     parameters = "aaa bbb ccc",
//                     lineResults = parser.parseCommand(`${command} : ${parameters}`),
//                     lines = lineResults.commandResults,
//                     result = lines[0];

//                 expect(lines.length).to.be.equal(1);
//                 expect(result.indentation).to.be.equal(0);
//                 expect(result.text).to.be.equal(parameters);
//             });
//         });

//         mocha.describe("recurseOnCommand", () => {
//             mocha.it("recurses on a single command", () => {
//                 let parser = mocks.mockGlsParser(),
//                     language = mocks.mockLanguage(),
//                     command = "literal",
//                     parameters = "aaa bbb ccc",
//                     line = `{ ${command} : ${parameters} }`,
//                     results = parser.recurseOnCommand(line);

//                 expect(results).to.be.equal(parameters);
//             });
//         });

//         mocha.describe("separateLineComponents", () => {
//             mocha.it("returns a blank name from empty input", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("")).to.be.deep.equal([""]);
//             });

//             mocha.it("returns a name from a name", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo")).to.be.deep.equal(["foo"]);
//             });

//             mocha.it("returns a name with space after mocha.it", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo ")).to.be.deep.equal(["foo"]);
//             });

//             mocha.it("returns a name with one argument", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : a")).to.be.deep.equal(["foo", "a"]);
//             });

//             mocha.it("returns a name with two arguments", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : aa bb")).to.be.deep.equal(["foo", "aa", "bb"]);
//             });

//             mocha.it("returns a name with three arguments", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : aaa bbb ccc")).to.be.deep.equal(["foo", "aaa", "bbb", "ccc"]);
//             });

//             mocha.it("returns a name with a single simple parenthesis escaped argument", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : (aaa bbb)")).to.be.deep.equal(["foo", "aaa bbb"]);
//             });

//             mocha.it("returns a name with complicated parenthesis escaped arguments", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : (aaa bbb ccc) ddd")).to.be.deep.equal(["foo", "aaa bbb ccc", "ddd"]);
//             });

//             mocha.it("returns a name with multiple complicated parenthesis escaped arguments", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : (aaa bbb ccc) (ddd eee fff ggg) hhh")).to.be.deep.equal(["foo", "aaa bbb ccc", "ddd eee fff ggg", "hhh"]);
//             });

//             mocha.it("returns a name with a single simple brace escaped argument", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : { aaa bbb }")).to.be.deep.equal(["foo", "{ aaa bbb }"]);
//             });

//             mocha.it("returns a name with complicated brace escaped arguments", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : { aaa bbb ccc } ddd")).to.be.deep.equal(["foo", "{ aaa bbb ccc }", "ddd"]);
//             });

//             mocha.it("returns a name with multiple complicated brace escaped arguments", () => {
//                 expect(mocks.mockGlsParser().separateLineComponents("foo : { aaa bbb ccc } { ddd eee } fff")).to.be.deep.equal(["foo", "{ aaa bbb ccc }", "{ ddd eee }", "fff"]);
//             });

//             mocha.it("throws an error for an unfinished brace", () => {
//                 expect(() => mocks.mockGlsParser().separateLineComponents("foo : {")).to.throw();
//             })

//             mocha.it("throws an error for an unfinished parenthesis", () => {
//                 expect(() => mocks.mockGlsParser().separateLineComponents("foo : (")).to.throw();
//             })
//         });

//         mocha.describe("trimEndCharacters", () => {
//             mocha.it("trims strings of length 0", () => {
//                 expect(mocks.mockGlsParser().trimEndCharacters("")).to.be.equal("");            
//             });

//             mocha.it("trims strings of length 1", () => {
//                 expect(mocks.mockGlsParser().trimEndCharacters("a")).to.be.equal("");
//             });

//             mocha.it("trims strings of length 2", () => {
//                 expect(mocks.mockGlsParser().trimEndCharacters("ab")).to.be.equal("");
//             });

//             mocha.it("trims large strings", () => {
//                 expect(mocks.mockGlsParser().trimEndCharacters("abcdefg")).to.be.equal("bcdef");
//             });
//         });

//         mocha.describe("findSearchEnd", () => {
//             mocha.it("returns -1 with no input", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd("", 1, "{", "}")).to.be.equal(-1);
//             })

//             mocha.it("returns -1 with no enders", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" { ", 1, "{", "}")).to.be.equal(-1);
//             });

//             mocha.it("returns -1 with not enough enders", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" { { } ", 1, "{", "}")).to.be.equal(-1);
//             });

//             mocha.it("finds an end character directly after the start", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" {}", 1, "{", "}")).to.be.equal(2);
//             });

//             mocha.it("finds an end character one space after the start", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" { }", 1, "{", "}")).to.be.equal(3);
//             });

//             mocha.it("finds an end character many spaces after the start", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" {    }", 1, "{", "}")).to.be.equal(6);
//             });

//             mocha.it("finds an end character after one nested starter", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" {  { }  }", 1, "{", "}")).to.be.equal(9);
//             });

//             mocha.it("finds an end character after many nested starters", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" {  { {}  { { }}}  }", 1, "{", "}")).to.be.equal(19);
//             });

//             mocha.it("finds equal starters and enders next to each other", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd("  ", 0, " ", " ")).to.be.equal(1);
//             });

//             mocha.it("finds equal starters and enders far away from each other", () => {
//                 expect(mocks.mockGlsParser().findSearchEnd(" ... ", 0, " ", " ")).to.be.equal(4);
//             });
//         });
//     });
// })();
