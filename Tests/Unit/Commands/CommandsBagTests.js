var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../mocks.js"),
    GLS = require("../../../Distribution/GLS.js");

(function () {
    "use strict";

    mocha.describe("CommandsBag", () => {
        mocha.describe("renderCommand", () => {
            mocha.it("renders a command by name", () => {
                let commandsBag = mocks.mockCommandsBag(),
                    language = mocks.mockLanguage(),
                    lines = commandsBag.renderCommand(["literal"]),
                    result = lines.commandResults;

                expect(result.length).to.be.equal(1);
            });

            mocha.it("throws an error for an unknown command", () => {
                let commandsBag = mocks.mockCommandsBag(),
                    language = mocks.mockLanguage(),
                    action = () => commandsBag.renderCommand(["definitely not a command"]);

                expect(action).to.throw();
            });
        });
    });
})();
