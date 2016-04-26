var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../mocks.js"),
    GLS = require("../../Distribution/GLS.js");

(function () {
    "use strict";

    mocha.describe("ConversionContext", () => {
        mocha.describe("getLanguage", () => {
            mocha.it("returns the language", () => {
                let language = mocks.mockLanguage(),
                    context = mocks.mockConversionContext(language);
                
                expect(context.getLanguage()).to.be.equal(language);
            });
        });

        mocha.describe("generateTabs", () => {
            mocha.it("generates 0 tabs", () => {
                expect(mocks.mockConversionContext().generateTabs(0)).to.be.equal("");
            });

            mocha.it("generates 1 tab", () => {
                expect(mocks.mockConversionContext().generateTabs(1)).to.be.equal("    ");
            });

            mocha.it("generates 2 tabs", () => {
                expect(mocks.mockConversionContext().generateTabs(2)).to.be.equal("        ");
            });
        });
    });
})();
