import { expect } from "chai";
import "mocha";

import { PackageLowerCaseConverter } from "../../../../lib/Conversions/Casing/PackageLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PackageLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(PackageLowerCaseConverter, ["abc"], "abc");
        itConvertsFromTo(PackageLowerCaseConverter, ["abc", "def"], "abc.def");
        itConvertsFromTo(PackageLowerCaseConverter, ["abc", "def", "ghi"], "abc.def.ghi");
    });
});
