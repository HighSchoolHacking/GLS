var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../mocks.js"),
    GLS = require("../../../Distribution/GLS.js");

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
    });
})();
