import { expect } from "chai";
import "mocha";

import { SnakeCaseTransformer } from "../../../../lib/Rendering/Casing/SnakeCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("SnakeCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(SnakeCaseTransformer, ["abc"], "abc");
        itConvertsFromTo(SnakeCaseTransformer, ["abc", "def"], "abc_def");
        itConvertsFromTo(SnakeCaseTransformer, ["abc", "def", "ghi"], "abc_def_ghi");
    });
});
