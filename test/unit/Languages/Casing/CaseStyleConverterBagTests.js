const expect = require("chai").expect;
const mocha = require("mocha");
const mocks = require("../../../mocks.js");
const CaseStyle = require("../../../../src/Languages/Casing/CaseStyle").CaseStyle;

(function () {
    "use strict";

    mocha.describe("CaseStyleConverterBag", () => {
        mocha.describe("convert", () => {
            mocha.it("converts a case by name", () => {
                let converter = mocks.mockCaseStyleConverterBag(),
                    casingStyle = CaseStyle.None,
                    action = () => converter.convert("", casingStyle);

                expect(action).to.not.throw();
            });

            mocha.it("throws an error for an unknown case", () => {
                let converter = mocks.mockCaseStyleConverterBag(),
                    action = () => converter.convert("", "definitely not a case");

                expect(action).to.throw();
            });
        });
    });
})();
