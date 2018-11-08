import { expect } from "chai";
import "mocha";

import { PackageLowerCaseConverter } from "../../../../lib/Rendering/Casing/PackageLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PackageLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(PackageLowerCaseConverter, ["Abc"], "abc");
        itConvertsFromTo(PackageLowerCaseConverter, ["Abc", "Def"], "abc.def");
        itConvertsFromTo(PackageLowerCaseConverter, ["Abc", "Def", "Ghi"], "abc.def.ghi");
    });
});
