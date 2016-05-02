var GLS = require("../Distribution/GLS.js");

/**
 * Generators for (stub? mock?) class instances.
 */
var mocks = {
    /**
     * @returns A mocked CaseStyleConverterBag.
     */
    mockCaseStyleConverter: () => new GLS.Languages.Casing.CaseStyleConverter(),

    /**
     * @returns A mocked CaseStyleConverterBag.
     */
    mockCaseStyleConverterBag: () => new GLS.Languages.Casing.CaseStyleConverterBag(),

    /**
     */
    mockConversion: (glsLines, context) => new GLS.Conversions.Conversion(glsLines, context || mocks.mockConversionContext()),

    /**
     * @param language   A Language for the context (by default, a mocked Language).
     * @returns A mocked ConversionContext.
     */
    mockConversionContext: language => new GLS.Conversions.ConversionContext(language || mocks.mockLanguage()),

    /**
     * @param language   A Language for the context (by default, a mocked Language).
     * @returns A mocked CommandsBag.
     */
    mockCommandsBag: context => new GLS.Commands.CommandsBag(context || mocks.mockConversionContext()),

    /**
     * @param language   A ConversionContext for the parser (by default, a mocked ConversionContext).
     * @returns A mocked GlsParser.
     */
    mockGlsParser: context => new GLS.GlsParser(context || mocks.mockConversionContext()),

    /**
     * @returns A mocked Language.
     */
    mockLanguage: () => new GLS.Languages.TypeScript()
};

module.exports = mocks;
