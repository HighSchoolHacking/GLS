import { expect } from "chai";
import "mocha";

import { PackageUpperCaseConverter } from "../../../../lib/Rendering/Casing/PackageUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PackageUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(PackageUpperCaseConverter, ["Abc"], "Abc");
        itConvertsFromTo(PackageUpperCaseConverter, ["Abc", "Def"], "Abc.Def");
        itConvertsFromTo(PackageUpperCaseConverter, ["Abc", "Def", "Ghi"], "Abc.Def.Ghi");
    });
});
