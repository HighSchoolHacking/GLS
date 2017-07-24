import { expect } from "chai";
import "mocha";

import { FileSystemUpperCaseConverter } from "../../../../lib/Conversions/Casing/FileSystemUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("FileSystemUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(FileSystemUpperCaseConverter, ["abc"], "./Abc");
        itConvertsFromTo(FileSystemUpperCaseConverter, ["abc", "def"], "./Abc/Def");
        itConvertsFromTo(FileSystemUpperCaseConverter, ["abc", "def", "ghi"], "./Abc/Def/Ghi");
    });
});
