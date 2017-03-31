import { ArgvParser } from "./ArgvParser";
import { ComparisonTestsRunner } from "./ComparisonTestsRunner";

const testNames = new ArgvParser(process.argv).parseCommandNames();
const integrationTests = new ComparisonTestsRunner("test/integration", testNames);
integrationTests.run();
