var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../../mocks.js"),
    GLS = require("../../../../Distribution/GLS.js");

(function () {
    "use strict";

    mocha.describe("PascalCaseStyleConverter", () => {
        mocha.describe("convert", () => {
            mocha.it("parses a camelCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.PascalCase;

                expect(converterBag.convert("aaaBbbCcc", caseStyle)).to.be.equal("AaaBbbCcc");
            });

            mocha.it("parses a PascalCase name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.PascalCase;

                expect(converterBag.convert("AaaBbbCcc", caseStyle)).to.be.equal("AaaBbbCcc");
            });

            mocha.it("parses a snake_case name", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.PascalCase;

                expect(converterBag.convert("aaa_bbb_ccc", caseStyle)).to.be.equal("AaaBbbCcc");
            });
        });

        mocha.describe("applyTransformationToWord", () => {
            mocha.it("parses a camelCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.PascalCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converterBag.convert("aaa", caseStyle)).to.be.equal("Aaa");
            });

            mocha.it("parses a PascalCase word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.PascalCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converterBag.convert("Aaa", caseStyle)).to.be.equal("Aaa");
            });

            mocha.it("parses a snake_case word", () => {
                let converterBag = mocks.mockCaseStyleConverterBag(),
                    caseStyle = GLS.Languages.Casing.CaseStyle.PascalCase,
                    converter = converterBag.getConverter(caseStyle);

                expect(converterBag.convert("aaa_", caseStyle)).to.be.equal("Aaa");
            });
        });
    });
})();
