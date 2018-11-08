import "mocha";

import { DirectoryUpperCaseConverter } from "../../../../lib/Rendering/Casing/DirectoryUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DirectoryUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DirectoryUpperCaseConverter, ["Abc"], "Abc");
        itConvertsFromTo(DirectoryUpperCaseConverter, ["Abc", "Def"], "Abc/Def");
        itConvertsFromTo(DirectoryUpperCaseConverter, ["Abc", "Def", "Ghi"], "Abc/Def/Ghi");
    });
});
