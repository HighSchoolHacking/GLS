import "mocha";

import { LowerCaseConverter } from "../../../../lib/Rendering/Casing/LowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("LowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(LowerCaseConverter, ["abc"], "abc");
        itConvertsFromTo(LowerCaseConverter, ["abc", "def"], "abcdef");
        itConvertsFromTo(LowerCaseConverter, ["abc", "def", "ghi"], "abcdefghi");
    });
});
