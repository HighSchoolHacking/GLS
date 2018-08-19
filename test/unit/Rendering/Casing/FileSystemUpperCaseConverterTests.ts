import { expect } from "chai";
import "mocha";

import { FileSystemUpperCaseTransformer } from "../../../../lib/Rendering/Casing/FileSystemUpperCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("FileSystemUpperCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(FileSystemUpperCaseTransformer, ["abc"], "./Abc");
        itConvertsFromTo(FileSystemUpperCaseTransformer, ["abc", "def"], "./Abc/Def");
        itConvertsFromTo(FileSystemUpperCaseTransformer, ["abc", "def", "ghi"], "./Abc/Def/Ghi");
    });
});
