import { expect } from "chai";
import "mocha";

import { CaseStyleConverter } from "../../../../lib/Languages/Casing/CaseStyleConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("CaseStyleConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(CaseStyleConverter, ["abc"], "abc");
        itConvertsFromTo(CaseStyleConverter, ["abc", "def"], "abcdef");
        itConvertsFromTo(CaseStyleConverter, ["abc", "def", "ghi"], "abcdefghi");
    });
});
