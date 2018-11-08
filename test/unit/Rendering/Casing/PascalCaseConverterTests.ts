import { expect } from "chai";
import "mocha";

import { PascalCaseConverter } from "../../../../lib/Rendering/Casing/PascalCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PascalCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(PascalCaseConverter, ["Abc"], "Abc");
        itConvertsFromTo(PascalCaseConverter, ["Abc", "Def"], "AbcDef");
        itConvertsFromTo(PascalCaseConverter, ["Abc", "Def", "Ghi"], "AbcDefGhi");
    });
});
