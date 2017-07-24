import { expect } from "chai";
import "mocha";

import { FileSystemLowerCaseConverter } from "../../../../lib/Conversions/Casing/FileSystemLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("FileSystemLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(FileSystemLowerCaseConverter, ["abc"], "./abc");
        itConvertsFromTo(FileSystemLowerCaseConverter, ["abc", "def"], "./abc/def");
        itConvertsFromTo(FileSystemLowerCaseConverter, ["abc", "def", "ghi"], "./abc/def/ghi");
    });
});
