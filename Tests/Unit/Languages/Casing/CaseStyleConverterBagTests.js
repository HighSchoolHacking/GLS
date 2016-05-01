var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../../mocks.js"),
    GLS = require("../../../../Distribution/GLS.js");

(function () {
    "use strict";

    mocha.describe("CaseStyleConverterBag", () => {
        mocha.describe("convert", () => {
            mocha.it("converts a case by name", () => {
                let converter = mocks.mockCaseStyleConverterBag(),
                    casingStyle = GLS.Languages.Casing.CaseStyle.None,
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
