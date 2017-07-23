import { expect } from "chai";

import { CaseStyleConverter } from "../../../../lib/Languages/Casing/CaseStyleConverter";

export const itConvertsFromTo = (converterType: typeof CaseStyleConverter, input: string[], expected: string): void => {
    let descriptor = `converts ${input.length} word`;
    if (input.length > 1) {
        descriptor += "s";
    }

    it(descriptor, () => {
        // Arrange
        const converter = new converterType();
        const original = "abcDefGhi";

        // Act
        const actual = converter.convert(input);

        // Assert
        expect(actual).to.be.equal(expected);
    });
};
