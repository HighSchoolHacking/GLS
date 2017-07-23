import "mocha";

import { DirectoryLowerCaseConverter } from "../../../../lib/Languages/Casing/DirectoryLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DirectoryLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DirectoryLowerCaseConverter, ["abc"], "abc");
        itConvertsFromTo(DirectoryLowerCaseConverter, ["abc", "def"], "abc/def");
        itConvertsFromTo(DirectoryLowerCaseConverter, ["abc", "def", "ghi"], "abc/def/ghi");
    });
});
