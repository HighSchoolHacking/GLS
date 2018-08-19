import { expect } from "chai";
import "mocha";

import { PackageLowerCaseTransformer } from "../../../../lib/Rendering/Casing/PackageLowerCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("PackageLowerCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(PackageLowerCaseTransformer, ["abc"], "abc");
        itConvertsFromTo(PackageLowerCaseTransformer, ["abc", "def"], "abc.def");
        itConvertsFromTo(PackageLowerCaseTransformer, ["abc", "def", "ghi"], "abc.def.ghi");
    });
});
