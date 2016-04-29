var expect = require("chai").expect,
    mocha = require("mocha"),
    mocks = require("../../mocks.js"),
    GLS = require("../../../Distribution/GLS.js");

(function () {
    "use strict";

    mocha.describe("CommandStrings", () => {
        mocha.describe("generateRawCommand", () => {
            mocha.it("throws an error when not given a command name", () => {
                let action = () => GLS.Commands.CommandStrings.generateRawCommand([]);
                
                expect(action).to.throw("At least one parameter is required.");
            });
            
            mocha.it("returns the command name when not given parameters", () => {
                let commandName = "name",
                    result = GLS.Commands.CommandStrings.generateRawCommand([commandName]);
                
                expect(result).to.be.equal(commandName);
            });
            
            mocha.it("correctly parses one parameter", () => {
                let commandName = "name",
                    parameter = "aaa",
                    result = GLS.Commands.CommandStrings.generateRawCommand([
                        commandName, parameter
                    ]);

                expect(result).to.be.equal(`${commandName} : ${parameter}`);
            });
            
            mocha.it("correctly parses multiple parameters", () => {
                let result = GLS.Commands.CommandStrings.generateRawCommand([
                    "command", "aaa", "bbb", "ccc"
                ]);

                expect(result).to.be.equal("command : aaa bbb ccc");
            });
        });
    });
})();
