import { expect } from "chai";
import "mocha";

import { FileSystemLowerCaseConverter } from "../../../../lib/Rendering/Casing/FileSystemLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("FileSystemLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(FileSystemLowerCaseConverter, ["Abc"], "./abc");
        itConvertsFromTo(FileSystemLowerCaseConverter, ["Abc", "Def"], "./abc/def");
        itConvertsFromTo(FileSystemLowerCaseConverter, ["Abc", "Def", "Ghi"], "./abc/def/ghi");
    });
});
