const expect = require("chai").expect;
const mocha = require("mocha");
const mocks = require("../../../mocks.js");
const CaseStyle = require("../../../../Source/Languages/Casing/CaseStyle").CaseStyle;

(function () {
    "use strict";

    mocha.describe("CamelCaseStyleConverter", () => {
        mocha.describe("convert", () => {
            mocha.it("parses a camelCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = CaseStyle.CamelCase;

                expect(converterBag.convert("aaaBbbCcc", caseStyle)).to.be.equal("aaaBbbCcc");
            });

            mocha.it("parses a PascalCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = CaseStyle.CamelCase;

                expect(converterBag.convert("AaaBbbCcc", caseStyle)).to.be.equal("aaaBbbCcc");
            });

            mocha.it("parses a snake_case name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = CaseStyle.CamelCase;

                expect(converterBag.convert("aaa_bbb_ccc", caseStyle)).to.be.equal("aaaBbbCcc");
            });
        });

        mocha.describe("applyTransformationToWord", () => {
            mocha.it("parses a camelCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = CaseStyle.CamelCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("aaa")).to.be.equal("Aaa");
            });

            mocha.it("parses a PascalCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = CaseStyle.CamelCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("Aaa")).to.be.equal("Aaa");
            });

            mocha.it("parses a snake_case word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = CaseStyle.CamelCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("aaa")).to.be.equal("Aaa");
            });
        });
    });
})();
