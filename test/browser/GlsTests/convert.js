define(function () {
    return function () {
        var expect = require("chai").expect;

        it("compiles a hello world comment", function () {
            // Arrange
            var gls = new Gls().setLanguage("TypeScript");

            // Act
            var converted = gls.convert(["comment line : Hello world!"])

            // Assert
            expect(converted).to.deep.equal(["// Hello world!"]);
        });
    };
});
