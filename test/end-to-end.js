var ComparisonTestsRunner = require("./ComparisonTestsRunner.js");

var integrationTests = new ComparisonTestsRunner("test/end-to-end");
integrationTests.run();
