var fs = require("fs"),
    path = require("path"),
    package = JSON.parse(fs.readFileSync(path.join(__dirname, "../../package.json")).toString()),
    Gls = require(path.join("../../", package.main)).Gls,
    expect = require("chai").expect,
    mocha = require("mocha");

(function () {
    "use strict";

    mocha.describe("Gls", () => {
        mocha.describe("convert", () => {
            mocha.it("compiles a hello world comment", () => {
                // Arrange
                var gls = new Gls().setLanguage("TypeScript");

                // Act
                var converted = gls.convert(["comment line : Hello world!"])

                // Assert
                expect(converted).to.deep.equal(["// Hello world!"]);
            });
        });
    });
})();

