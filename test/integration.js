const ArgvParser = require("./ArgvParser");
const ComparisonTestsRunner = require("./ComparisonTestsRunner");

const testNames = new ArgvParser(process.argv).parseCommandNames();
const integrationTests = new ComparisonTestsRunner("test/integration", testNames);
integrationTests.run();
