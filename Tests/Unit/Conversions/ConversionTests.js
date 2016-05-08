var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../mocks.js");

(function () {
    "use strict";

    mocha.describe("Conversion", () => {
        mocha.describe("generateTabs", () => {
            mocha.it("generates 0 tabs", () => {
                expect(mocks.mockConversion().generateTabs(0)).to.be.equal("");
            });

            mocha.it("generates 1 tab", () => {
                expect(mocks.mockConversion().generateTabs(1)).to.be.equal("    ");
            });

            mocha.it("generates 2 tabs", () => {
                expect(mocks.mockConversion().generateTabs(2)).to.be.equal("        ");
            });
        });
    });
})();
