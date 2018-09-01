import { expect } from "chai";
import "mocha";

import { KeywordParameter } from "../../../lib/Rendering/Commands/Metadata/Parameters/KeywordParameter";
import { IParameter } from "../../../lib/Rendering/Commands/Metadata/Parameters/Parameter";
import { RepeatingParameters } from "../../../lib/Rendering/Commands/Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "../../../lib/Rendering/Commands/Metadata/Parameters/SingleParameter";
import { ParametersValidator } from "../../../lib/Rendering/ParametersValidator";
import { CommandNode } from "../../../lib/Tokenization/Nodes/CommandNode";
import { TextNode } from "../../../lib/Tokenization/Nodes/TextNode";

interface IValidation {
    expectation: string;
    failure?: string;
    input: CommandNode;
    requirements: IParameter[];
}

describe("ParametersValidator", () => {
    describe("validate", () => {
        const validations: IValidation[] = [
            {
                expectation: "rejects a missing required single parameter",
                failure: "Missing parameter: 'first'",
                input: new CommandNode("command", []),
                requirements: [new SingleParameter("first", "", true)],
            },
            {
                expectation: "accepts an available required single parameter",
                input: new CommandNode("command", [new TextNode("abc")]),
                requirements: [new SingleParameter("first", "", true)],
            },
            {
                expectation: "rejects a missing required second parameter",
                failure: "Missing parameter: 'second'",
                input: new CommandNode("command", [new TextNode("abc")]),
                requirements: [new SingleParameter("first", "", true), new SingleParameter("second", "", true)],
            },
            {
                expectation: "accepts an available required second parameter",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("def")]),
                requirements: [new SingleParameter("first", "", true), new SingleParameter("first", "", true)],
            },
            {
                expectation: "accepts a matched required keyword parameter before an optional single parameter",
                input: new CommandNode("command", [new TextNode("first")]),
                requirements: [new KeywordParameter(["first"], "", true), new SingleParameter("second", "", false)],
            },
            {
                expectation: "accepts a matched required keyword parameter and a single parameter",
                input: new CommandNode("command", [new TextNode("first"), new TextNode("second")]),
                requirements: [new KeywordParameter(["first"], "", true), new SingleParameter("second", "", true)],
            },
            {
                expectation: "accepts an unmatched optional keyword parameter before a required single parameter",
                input: new CommandNode("command", [new TextNode("abc")]),
                requirements: [new KeywordParameter(["first"], "", false), new SingleParameter("second", "", true)],
            },
            {
                expectation: "rejects an unmatched required keyword parameter before an optional single parameter",
                failure: "Missing required parameter: must be one of: 'first'",
                input: new CommandNode("command", [new TextNode("abc")]),
                requirements: [new KeywordParameter(["first"], "", true), new SingleParameter("second", "", false)],
            },
            {
                expectation: "rejects an unmatched required keyword parameter and a matched single parameter",
                failure: "Missing required parameter: must be one of: 'first'",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("second")]),
                requirements: [new KeywordParameter(["first"], "", true), new SingleParameter("second", "", true)],
            },
            {
                expectation: "accepts zero matched repeating parameters",
                input: new CommandNode("command", []),
                requirements: [new RepeatingParameters("", [new SingleParameter("first", "", true)])],
            },
            {
                expectation: "accepts one matched repeating parameter",
                input: new CommandNode("command", [new TextNode("abc")]),
                requirements: [new RepeatingParameters("", [new SingleParameter("first", "", true)])],
            },
            {
                expectation: "accepts two matched repeating parameters",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("def")]),
                requirements: [new RepeatingParameters("", [new SingleParameter("first", "", true)])],
            },
            {
                expectation: "rejects one repeating parameter when two are required",
                failure: "Expected a multiple of 2 repeating parameters but got 1.",
                input: new CommandNode("command", [new TextNode("abc")]),
                requirements: [
                    new RepeatingParameters("", [new SingleParameter("first", "", true), new SingleParameter("second", "", true)]),
                ],
            },
            {
                expectation: "accepts repeating parameters without a subsequent optional keyword",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("def")]),
                requirements: [
                    new RepeatingParameters("", [new SingleParameter("first", "", true), new SingleParameter("second", "", true)]),
                    new KeywordParameter(["literal"], "", false),
                ],
            },
            {
                expectation: "accepts repeating parameters with a subsequent optional keyword",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("def"), new TextNode("literal")]),
                requirements: [
                    new RepeatingParameters("", [new SingleParameter("first", "", true), new SingleParameter("second", "", true)]),
                    new KeywordParameter(["literal"], "", false),
                ],
            },
            {
                expectation: "accepts repeating parameters with a subsequent optional keyword and repeating parameters",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("def"), new TextNode("literal"), new TextNode("ghi")]),
                requirements: [
                    new RepeatingParameters("", [new SingleParameter("first", "", true), new SingleParameter("second", "", true)]),
                    new KeywordParameter(["literal"], "", false),
                    new RepeatingParameters("", [new SingleParameter("third", "", true)]),
                ],
            },
            {
                expectation: "rejects repeating parameters of the wrong count with a subsequent optional keyword and repeating parameters",
                failure: "Expected a multiple of 2 repeating parameters but got 1.",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("literal"), new TextNode("def")]),
                requirements: [
                    new RepeatingParameters("", [new SingleParameter("first", "", true), new SingleParameter("second", "", true)]),
                    new KeywordParameter(["literal"], "", false),
                    new RepeatingParameters("", [new SingleParameter("third", "", true)]),
                ],
            },
            {
                expectation: "rejects repeating parameters with a subsequent optional keyword and repeating parameters of the wrong count",
                failure: "Expected a multiple of 2 repeating parameters but got 1.",
                input: new CommandNode("command", [new TextNode("abc"), new TextNode("literal"), new TextNode("def")]),
                requirements: [
                    new RepeatingParameters("", [new SingleParameter("first", "", true)]),
                    new KeywordParameter(["literal"], "", false),
                    new RepeatingParameters("", [new SingleParameter("second", "", true), new SingleParameter("third", "", true)]),
                ],
            },
        ];

        for (const validation of validations) {
            const { failure, input, requirements } = validation;

            it(validation.expectation, () => {
                // Arrange
                const validator = new ParametersValidator();

                // Act
                const action = () => {
                    validator.validate(input, requirements);
                };

                // Act
                if (failure !== undefined) {
                    expect(action).to.throw(failure);
                } else {
                    expect(action).to.not.throw();
                }
            });
        }
    });
});
