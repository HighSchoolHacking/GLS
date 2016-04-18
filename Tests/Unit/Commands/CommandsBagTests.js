var expect = require("chai").expect,
    mocks = require("../../Mocks.js"),
    GLS = require("../../../Distribution/GLS.js");

(() => {
    "use strict";

    describe("CommandsBag", () => {
        describe("renderCommand", () => {
            it("renders a command by name", () => {
                let commandsBag = mocks.mockCommandsBag(),
                    language = mocks.mockLanguage(),
                    lines = commandsBag.renderCommand([GLS.Commands.CommandStrings.LiteralCommandName]),
                    result = lines.commandResults;

                expect(result.length).to.be.equal(1);
            });

            it("throws an error for an unknown command", () => {
                let commandsBag = mocks.mockCommandsBag(),
                    language = mocks.mockLanguage(),
                    action = () => commandsBag.renderCommand(["definitely not a command"]);

                expect(action).to.throw();
            });
        });
    });
})();
