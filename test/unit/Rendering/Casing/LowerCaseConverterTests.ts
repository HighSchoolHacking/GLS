import "mocha";

import { LowerCaseConverter } from "../../../../lib/Rendering/Casing/LowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("LowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(LowerCaseConverter, ["Abc"], "abc");
        itConvertsFromTo(LowerCaseConverter, ["Abc", "Def"], "abcdef");
        itConvertsFromTo(LowerCaseConverter, ["Abc", "Def", "Ghi"], "abcdefghi");
    });
});
