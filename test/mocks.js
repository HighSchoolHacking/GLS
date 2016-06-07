const testRequire = require("./testRequire");

const CommandsBag = testRequire("../src/commands/commandsbag").CommandsBag;
const Conversion = testRequire("../src/conversions/conversion").Conversion;
const ConversionContext = testRequire("../src/conversions/conversioncontext").ConversionContext;
const GlsParser = testRequire("../src/conversions/glsparser").GlsParser;
const CaseStyleConverter = testRequire("../src/languages/casing/casestyleconverter").CaseStyleConverter;
const CaseStyleConverterBag = testRequire("../src/languages/casing/casestyleconverterbag").CaseStyleConverterBag;
const TypeScript = testRequire("../src/languages/typescript").TypeScript;

/**
 * Generators for (stub? mock?) class instances.
 */
var mocks = {
    /**
     * @returns A mocked CaseStyleConverterBag.
     */
    mockCaseStyleConverter: () => new CaseStyleConverter(),

    /**
     * @returns A mocked CaseStyleConverterBag.
     */
    mockCaseStyleConverterBag: () => new CaseStyleConverterBag(),

    /**
     * @param glsLines   Raw lines of GLS syntax.
     * @param context   A ConversionContext converting the code.
     * @returns A mocked Conversion.
     */
    mockConversion: (glsLines, context) => new Conversion(glsLines, context || mocks.mockConversionContext()),

    /**
     * @param language   A Language for the context (by default, a mocked Language).
     * @returns A mocked ConversionContext.
     */
    mockConversionContext: language => new ConversionContext(language || mocks.mockLanguage()),

    /**
     * @param language   A Language for the context (by default, a mocked Language).
     * @returns A mocked CommandsBag.
     */
    mockCommandsBag: context => new CommandsBag(context || mocks.mockConversionContext()),

    /**
     * @param language   A ConversionContext for the parser (by default, a mocked ConversionContext).
     * @returns A mocked GlsParser.
     */
    mockGlsParser: context => new GlsParser(context || mocks.mockConversionContext()),

    /**
     * @returns A mocked Language.
     */
    mockLanguage: () => new TypeScript()
};

module.exports = mocks;
