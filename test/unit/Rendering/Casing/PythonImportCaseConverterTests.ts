import "mocha";

import { PythonImportCaseConverter } from "../../../../lib/Rendering/Casing/PythonImportCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("PythonImportCaseConverter", () => {
    describe("convert", () => {
        // Internal directories
        itConvertsFromTo(PythonImportCaseConverter, ["abc"], "abc");
        itConvertsFromTo(PythonImportCaseConverter, ["abc", "def"], "abc.def");
        itConvertsFromTo(PythonImportCaseConverter, ["abc", "def", "ghi"], "abc.def.ghi");

        // Parent directories
        itConvertsFromTo(PythonImportCaseConverter, ["..", "ghi"], ".ghi");
        itConvertsFromTo(PythonImportCaseConverter, ["..", "..", "ghi"], "..ghi");
    });
});
