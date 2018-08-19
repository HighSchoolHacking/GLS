import { expect } from "chai";
import "mocha";

import { CamelCaseTransformer } from "../../../../lib/Rendering/Casing/CamelCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("CamelCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(CamelCaseTransformer, ["abc"], "abc");
        itConvertsFromTo(CamelCaseTransformer, ["abc", "def"], "abcDef");
        itConvertsFromTo(CamelCaseTransformer, ["abc", "def", "ghi"], "abcDefGhi");
    });
});
