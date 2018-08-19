import { expect } from "chai";
import "mocha";

import { FileSystemLowerCaseTransformer } from "../../../../lib/Rendering/Casing/FileSystemLowerCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("FileSystemLowerCaseTransformer", () => {
    describe("convert", () => {
        itConvertsFromTo(FileSystemLowerCaseTransformer, ["abc"], "./abc");
        itConvertsFromTo(FileSystemLowerCaseTransformer, ["abc", "def"], "./abc/def");
        itConvertsFromTo(FileSystemLowerCaseTransformer, ["abc", "def", "ghi"], "./abc/def/ghi");
    });
});
