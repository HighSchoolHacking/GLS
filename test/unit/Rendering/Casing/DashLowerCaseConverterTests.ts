import "mocha";

import { DashLowerCaseTransformer } from "../../../../lib/Rendering/Casing/DashLowerCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("DashLowerCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(DashLowerCaseTransformer, ["abc"], "abc");
        itConvertsFromTo(DashLowerCaseTransformer, ["abc", "def"], "abc-def");
        itConvertsFromTo(DashLowerCaseTransformer, ["abc", "def", "ghi"], "abc-def-ghi");
    });
});
