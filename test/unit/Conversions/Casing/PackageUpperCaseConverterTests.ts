import { expect } from "chai";
import "mocha";

import { PackageUpperCaseConverter } from "../../../../lib/Conversions/Casing/PackageUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PackageUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(PackageUpperCaseConverter, ["abc"], "Abc");
        itConvertsFromTo(PackageUpperCaseConverter, ["abc", "def"], "Abc.Def");
        itConvertsFromTo(PackageUpperCaseConverter, ["abc", "def", "ghi"], "Abc.Def.Ghi");
    });
});
