var ComparisonTestsRunner = require("./ComparisonTestsRunner.js");

var integrationTests = new ComparisonTestsRunner("test/EndToEnd");
integrationTests.run();
