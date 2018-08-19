import { expect } from "chai";
import "mocha";

import { DashUpperCaseTransformer } from "../../../../lib/Rendering/Casing/DashUpperCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("DashUpperCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(DashUpperCaseTransformer, ["abc"], "Abc");
        itConvertsFromTo(DashUpperCaseTransformer, ["abc", "def"], "Abc-Def");
        itConvertsFromTo(DashUpperCaseTransformer, ["abc", "def", "ghi"], "Abc-Def-Ghi");
    });
});
