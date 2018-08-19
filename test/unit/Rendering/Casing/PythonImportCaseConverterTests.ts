import "mocha";

import { PythonImportCaseTransformer } from "../../../../lib/Rendering/Casing/PythonImportCaseTransformer";
import { itConvertsFromTo } from "./ConverterTests";

describe("PythonImportCaseTransformer", () => {
    describe("convert", () => {
        // Internal directories
        itConvertsFromTo(PythonImportCaseTransformer, ["abc"], "abc");
        itConvertsFromTo(PythonImportCaseTransformer, ["abc", "def"], "abc.def");
        itConvertsFromTo(PythonImportCaseTransformer, ["abc", "def", "ghi"], "abc.def.ghi");

        // Parent directories
        itConvertsFromTo(PythonImportCaseTransformer, ["..", "ghi"], ".ghi");
        itConvertsFromTo(PythonImportCaseTransformer, ["..", "..", "ghi"], "..ghi");
    });
});
