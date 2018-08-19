import "mocha";

import { DirectoryUpperCaseTransformer } from "../../../../lib/Rendering/Casing/DirectoryUpperCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("DirectoryUpperCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(DirectoryUpperCaseTransformer, ["abc"], "Abc");
        itConvertsFromTo(DirectoryUpperCaseTransformer, ["abc", "def"], "Abc/Def");
        itConvertsFromTo(DirectoryUpperCaseTransformer, ["abc", "def", "ghi"], "Abc/Def/Ghi");
    });
});
