import { expect } from "chai";

import { ICaseStyleConverter } from "../../../../lib/Rendering/Casing/CaseStyleConverter";

interface ICaseStyleConverterCreator {
    new (): ICaseStyleConverter;
}

export const itConvertsFromTo = (transformerType: ICaseStyleConverterCreator, words: string[], expected: string): void => {
    let descriptor = `converts ${words.length} word`;
    if (words.length > 1) {
        descriptor += "s";
    }

    it(descriptor, () => {
        // Arrange
        const converter = new transformerType();

        // Act
        const actual = converter.convert(words);

        // Assert
        expect(actual).to.be.equal(expected);
    });
};
