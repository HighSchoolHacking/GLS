import "mocha";

import { DashLowerCaseConverter } from "../../../../lib/Rendering/Casing/DashLowerCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DashLowerCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DashLowerCaseConverter, ["Abc"], "abc");
        itConvertsFromTo(DashLowerCaseConverter, ["Abc", "Def"], "abc-def");
        itConvertsFromTo(DashLowerCaseConverter, ["Abc", "Def", "Ghi"], "abc-def-ghi");
    });
});
