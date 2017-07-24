import { expect } from "chai";
import "mocha";

import { SnakeCaseConverter } from "../../../../lib/Conversions/Casing/SnakeCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("SnakeCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(SnakeCaseConverter, ["abc"], "abc");
        itConvertsFromTo(SnakeCaseConverter, ["abc", "def"], "abc_def");
        itConvertsFromTo(SnakeCaseConverter, ["abc", "def", "ghi"], "abc_def_ghi");
    });
});
