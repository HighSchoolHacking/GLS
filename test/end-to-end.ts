import { ArgvParser } from "./ArgvParser";
import { ComparisonTestsRunner } from "./ComparisonTestsRunner";

const testNames = new ArgvParser(process.argv).parseCommandNames();
const integrationTests = new ComparisonTestsRunner("test/end-to-end", testNames);
integrationTests.run();
