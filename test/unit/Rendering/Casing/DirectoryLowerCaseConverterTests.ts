import "mocha";

import { DirectoryLowerCaseTransformer } from "../../../../lib/Rendering/Casing/DirectoryLowerCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("DirectoryLowerCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(DirectoryLowerCaseTransformer, ["abc"], "abc");
        itConvertsFromTo(DirectoryLowerCaseTransformer, ["abc", "def"], "abc/def");
        itConvertsFromTo(DirectoryLowerCaseTransformer, ["abc", "def", "ghi"], "abc/def/ghi");
    });
});
