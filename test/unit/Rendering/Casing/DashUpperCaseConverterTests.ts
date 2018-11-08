import { expect } from "chai";
import "mocha";

import { DashUpperCaseConverter } from "../../../../lib/Rendering/Casing/DashUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DashUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DashUpperCaseConverter, ["Abc"], "Abc");
        itConvertsFromTo(DashUpperCaseConverter, ["Abc", "Def"], "Abc-Def");
        itConvertsFromTo(DashUpperCaseConverter, ["Abc", "Def", "Ghi"], "Abc-Def-Ghi");
    });
});
