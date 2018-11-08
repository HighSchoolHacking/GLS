import "mocha";

import { DirectoryLowerCaseConverter } from "../../../../lib/Rendering/Casing/DirectoryLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DirectoryLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DirectoryLowerCaseConverter, ["Abc"], "abc");
        itConvertsFromTo(DirectoryLowerCaseConverter, ["Abc", "Def"], "abc/def");
        itConvertsFromTo(DirectoryLowerCaseConverter, ["Abc", "Def", "Ghi"], "abc/def/ghi");
    });
});
