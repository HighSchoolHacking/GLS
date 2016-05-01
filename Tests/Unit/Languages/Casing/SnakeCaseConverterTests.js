var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../../mocks.js"),
    GLS = require("../../../../Distribution/GLS.js");

(function () {
    "use strict";

    mocha.describe("SnakeCaseStyleConverter", () => {
        mocha.describe("convert", () => {
            mocha.it("parses a camelCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.SnakeCase;

                expect(converterBag.convert("aaaBbbCcc", caseStyle)).to.be.equal("aaa_bbb_ccc");
            });

            mocha.it("parses a PascalCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.SnakeCase;

                expect(converterBag.convert("AaaBbbCcc", caseStyle)).to.be.equal("aaa_bbb_ccc");
            });

            mocha.it("parses a snake_case name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.SnakeCase;

                expect(converterBag.convert("aaa_bbb_ccc", caseStyle)).to.be.equal("aaa_bbb_ccc");
            });
        });

        mocha.describe("convert", () => {
            mocha.it("parses a camelCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.SnakeCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("aaa")).to.be.equal("aaa_");
            });

            mocha.it("parses a PascalCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.SnakeCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("Aaa")).to.be.equal("aaa_");
            });

            mocha.it("parses a snake_case word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.SnakeCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converter.applyTransformationToWord("aaa")).to.be.equal("aaa_");
            });
        });
    });
})();
