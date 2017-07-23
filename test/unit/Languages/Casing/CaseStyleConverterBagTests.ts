import { expect } from "chai";
import "mocha";

import { CaseStyle } from "../../../../lib/Languages/Casing/CaseStyle";
import { CaseStyleConverter } from "../../../../lib/Languages/Casing/CaseStyleConverter";
import { CaseStyleConverterBag } from "../../../../lib/Languages/Casing/CaseStyleConverterBag";

describe("CaseStyleConverterBag", () => {
    describe("getConverter", () => {
        it("retrieves a case style by its enum", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();

            // Act
            const command = caseStyleConverterBag.getConverter(CaseStyle.None);

            // Assert
            expect(command).that.be.instanceof(CaseStyleConverter);
        });

        it("throws an error for an unknown case style", () => {
            // Arrange
            const caseStyleConverterBag = new CaseStyleConverterBag();

            // Act
            const action = () => caseStyleConverterBag.getConverter(-1);

            // Assert
            expect(action).to.throw();
        });
    });
});
