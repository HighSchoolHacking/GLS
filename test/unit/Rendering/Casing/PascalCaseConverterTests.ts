import { expect } from "chai";
import "mocha";

import { PascalCaseTransformer } from "../../../../lib/Rendering/Casing/PascalCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("PascalCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(PascalCaseTransformer, ["abc"], "Abc");
        itConvertsFromTo(PascalCaseTransformer, ["abc", "def"], "AbcDef");
        itConvertsFromTo(PascalCaseTransformer, ["abc", "def", "ghi"], "AbcDefGhi");
    });
});
