var expect = require("chai").expect,
    mocks = require("../mocks.js"),
    GLS = require("../../Distribution/GLS.js");

(() => {
    "use strict";
    
    describe("ConversionContext", () => {
        describe("getLanguage", () => {
            it("returns the language", () => {
                let language = mocks.mockLanguage(),
                    context = mocks.mockConversionContext(language);
                
                expect(context.getLanguage()).to.be.equal(language);
            });
        });
        
        describe("generateTabs", () => {
            it("generates 0 tabs", () => {
                expect(mocks.mockConversionContext().generateTabs(0)).to.be.equal("");
            });
            
            it("generates 1 tab", () => {
                expect(mocks.mockConversionContext().generateTabs(1)).to.be.equal("    ");
            });
            
            it("generates 2 tabs", () => {
                expect(mocks.mockConversionContext().generateTabs(2)).to.be.equal("        ");
            });
        });
    });
})();
