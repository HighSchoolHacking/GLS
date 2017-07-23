import { expect } from "chai";
import "mocha";

import { PascalCaseConverter } from "../../../../lib/Languages/Casing/PascalCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PascalCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(PascalCaseConverter, ["abc"], "Abc");
        itConvertsFromTo(PascalCaseConverter, ["abc", "def"], "AbcDef");
        itConvertsFromTo(PascalCaseConverter, ["abc", "def", "ghi"], "AbcDefGhi");
    });
});
