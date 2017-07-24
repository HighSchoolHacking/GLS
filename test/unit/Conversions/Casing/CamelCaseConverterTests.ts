import { expect } from "chai";
import "mocha";

import { CamelCaseConverter } from "../../../../lib/Conversions/Casing/CamelCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("CamelCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(CamelCaseConverter, ["abc"], "abc");
        itConvertsFromTo(CamelCaseConverter, ["abc", "def"], "abcDef");
        itConvertsFromTo(CamelCaseConverter, ["abc", "def", "ghi"], "abcDefGhi");
    });
});
