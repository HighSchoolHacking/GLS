import { expect } from "chai";
import "mocha";

import { FileSystemUpperCaseConverter } from "../../../../lib/Rendering/Casing/FileSystemUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("FileSystemUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(FileSystemUpperCaseConverter, ["Abc"], "./Abc");
        itConvertsFromTo(FileSystemUpperCaseConverter, ["Abc", "Def"], "./Abc/Def");
        itConvertsFromTo(FileSystemUpperCaseConverter, ["Abc", "Def", "Ghi"], "./Abc/Def/Ghi");
    });
});
