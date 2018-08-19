import { expect } from "chai";
import "mocha";

import { PackageUpperCaseTransformer } from "../../../../lib/Rendering/Casing/PackageUpperCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("PackageUpperCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(PackageUpperCaseTransformer, ["abc"], "Abc");
        itConvertsFromTo(PackageUpperCaseTransformer, ["abc", "def"], "Abc.Def");
        itConvertsFromTo(PackageUpperCaseTransformer, ["abc", "def", "ghi"], "Abc.Def.Ghi");
    });
});
