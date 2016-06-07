const expect = require("chai").expect;
const mocha = require("mocha");
const mocks = require("../../../mocks.js");
const CaseStyle = require("../../../../src/Languages/Casing/CaseStyle").CaseStyle;

(function () {
    "use strict";

    mocha.describe("CaseStyleConverter", () => {
        mocha.describe("findNextWordStart", () => {
            mocha.it("finds the next word from the beginning of camelCase", () => {
                let converter = mocks.mockCaseStyleConverter();

                expect(converter.findNextWordStart("aaaBbbCcc", 0)).to.be.equal(3);
            });

            mocha.it("finds the next word from the beginning of PascalCase", () => {
                let converter = mocks.mockCaseStyleConverter();

                expect(converter.findNextWordStart("AaaBbbCcc", 0)).to.be.equal(3);
            });

            mocha.it("finds the next word from the middle of camelCase or PascalCase", () => {
                let converter = mocks.mockCaseStyleConverter();

                expect(converter.findNextWordStart("aaaBbbCcc", 3)).to.be.equal(6);
            });

            mocha.it("finds the next word from the end of camelCase or PascalCase", () => {
                let converter = mocks.mockCaseStyleConverter();

                expect(converter.findNextWordStart("aaaBbbCcc", 6)).to.be.equal(9);
            });

            mocha.it("finds the next word from the beginning of snake_case", () => {
                let converter = mocks.mockCaseStyleConverter();

                expect(converter.findNextWordStart("aaa_bbb_ccc", 0)).to.be.equal(4);
            });

            mocha.it("finds the next word from the middle of snake_case", () => {
                let converter = mocks.mockCaseStyleConverter();

                expect(converter.findNextWordStart("aaa_bbb_ccc", 4)).to.be.equal(8);
            });

            mocha.it("finds the next word from the end of snake_case", () => {
                let converter = mocks.mockCaseStyleConverter();

                expect(converter.findNextWordStart("aaa_bbb_ccc", 8)).to.be.equal(11);
            });
        });
    });
})();
