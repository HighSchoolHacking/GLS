import "mocha";

import { CamelCaseConverter } from "../../../../lib/Rendering/Casing/CamelCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("CamelCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(CamelCaseConverter, ["Abc"], "abc");
        itConvertsFromTo(CamelCaseConverter, ["Abc", "Def"], "abcDef");
        itConvertsFromTo(CamelCaseConverter, ["Abc", "Def", "Ghi"], "abcDefGhi");
    });
});
