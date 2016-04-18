console.log("CommandStringsTests.js");
console.log("this", this);
console.log("dirname", __dirname);
console.log("process", process);

var expect = require("chai").expect,
    mocks = require("../../Mocks.js"),
    GLS = require("../../../Distribution/GLS.js");

(() => {
    "use strict";

    describe("CommandStrings", () => {
        describe("generateRawCommand", () => {
            it("throws an error when not given a command name", () => {
                let action = () => GLS.Commands.CommandStrings.generateRawCommand([]);
                
                expect(action).to.throw("At least one parameter is required.");
            });
            
            it("returns the command name when not given parameters", () => {
                let commandName = "name",
                    result = GLS.Commands.CommandStrings.generateRawCommand([commandName]);
                
                expect(result).to.be.equal(commandName);
            });
            
            it("correctly parses one parameter", () => {
                let commandName = "name",
                    parameter = "aaa",
                    result = GLS.Commands.CommandStrings.generateRawCommand([
                        commandName, parameter
                    ]);

                expect(result).to.be.equal(`${commandName} : ${parameter}`);
            });
            
            it("correctly parses multiple parameters", () => {
                let result = GLS.Commands.CommandStrings.generateRawCommand([
                    "command", "aaa", "bbb", "ccc"
                ]);

                expect(result).to.be.equal("command : aaa bbb ccc");
            });
        });
    });
})();
