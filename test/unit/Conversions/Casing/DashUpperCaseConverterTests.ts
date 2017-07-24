import { expect } from "chai";
import "mocha";

import { DashUpperCaseConverter } from "../../../../lib/Conversions/Casing/DashUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DashUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DashUpperCaseConverter, ["abc"], "Abc");
        itConvertsFromTo(DashUpperCaseConverter, ["abc", "def"], "Abc-Def");
        itConvertsFromTo(DashUpperCaseConverter, ["abc", "def", "ghi"], "Abc-Def-Ghi");
    });
});
