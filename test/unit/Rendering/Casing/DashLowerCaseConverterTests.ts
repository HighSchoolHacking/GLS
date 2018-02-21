import "mocha";

import { DashLowerCaseConverter } from "../../../../lib/Rendering/Casing/DashLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DashLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DashLowerCaseConverter, ["abc"], "abc");
        itConvertsFromTo(DashLowerCaseConverter, ["abc", "def"], "abc-def");
        itConvertsFromTo(DashLowerCaseConverter, ["abc", "def", "ghi"], "abc-def-ghi");
    });
});
