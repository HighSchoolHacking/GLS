var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../../mocks.js"),
    GLS = require("../../../../Distribution/GLS.js");

(function () {
    "use strict";

    mocha.describe("CamelCaseStyleConverter", () => {
        mocha.describe("convert", () => {
            mocha.it("parses a camelCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.CamelCase;

                expect(converterBag.convert("aaaBbbCcc", caseStyle)).to.be.equal("aaaBbbCcc");
            });

            mocha.it("parses a PascalCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.CamelCase;

                expect(converterBag.convert("AaaBbbCcc", caseStyle)).to.be.equal("aaaBbbCcc");
            });

            mocha.it("parses a snake_case name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.CamelCase;

                expect(converterBag.convert("aaa_bbb_ccc", caseStyle)).to.be.equal("aaaBbbCcc");
            });
        });

        mocha.describe("applyTransformationToWord", () => {
            mocha.it("parses a camelCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.CamelCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("aaa")).to.be.equal("Aaa");
            });

            mocha.it("parses a PascalCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.CamelCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("Aaa")).to.be.equal("Aaa");
            });

            mocha.it("parses a snake_case word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.CamelCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("aaa")).to.be.equal("Aaa");
            });
        });
    });
})();
