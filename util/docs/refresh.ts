import * as fs from "fs";
// @ts-ignore
import * as glob from "glob";

import { CaseStyleConverterBag } from "../../src/Rendering/Casing/CaseStyleConverterBag";
import { CommandsBagFactory } from "../../src/Rendering/Commands/CommandsBagFactory";
import { CommandMetadata } from "../../src/Rendering/Commands/Metadata/CommandMetadata";
import { KeywordParameter } from "../../src/Rendering/Commands/Metadata/Parameters/KeywordParameter";
import { IParameter } from "../../src/Rendering/Commands/Metadata/Parameters/Parameter";
import { RepeatingParameters } from "../../src/Rendering/Commands/Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "../../src/Rendering/Commands/Metadata/Parameters/SingleParameter";
import { CaseStyle } from "../../src/Rendering/Languages/Casing/CaseStyle";
import { TypeScript } from "../../src/Rendering/Languages/TypeScript";
import { RenderContext } from "../../src/Rendering/RenderContext";

const prefixAndJoin = (prefix: string, lines: string[]) => {
    return lines.map((line) => `${prefix}${line}`).join("\n");
};

const createParameterMarkdown = (prefix: string, parameter: IParameter): string => {
    if (parameter instanceof SingleParameter) {
        return prefixAndJoin(prefix, [`* \`${parameter.name}\`: ${parameter.description}`]);
    }

    if (parameter instanceof RepeatingParameters) {
        return prefixAndJoin(prefix, [`* ${parameter.description}:`, createParametersMarkdown(prefix + "  ", parameter.parameters)]);
    }

    if (parameter instanceof KeywordParameter) {
        return prefixAndJoin(prefix, [`* Keyword: \`${Array.from(parameter.literals).join(" | ")}\``]);
    }

    return "Unknown parameter type... 😦";
};

const createParametersMarkdown = (prefix: string, parameters: IParameter[]): string => {
    if (parameters.length === 0) {
        return "None.";
    }

    return parameters.map((parameter) => createParameterMarkdown(prefix, parameter)).join("\n");
};

const createExample = (examplePath: string, exampleText: string): string => {
    const exampleName = examplePath.substring(examplePath.lastIndexOf("/") + 1, examplePath.lastIndexOf(".gls"));
    const exampleCode = exampleText
        .replace(/\r\n/g, "\n")
        .replace("-\n", "")
        .replace("\n-", "")
        .trim();

    return [`${exampleName[0].toUpperCase() + exampleName.substring(1)}:`, "", "```gls", exampleCode, "```", ""].join("\n");
};

const createExamples = (metadataName: string) => {
    const pascalCaseName = new CaseStyleConverterBag().convertToCase(CaseStyle.PascalCase, metadataName.split(" "));
    const examples: string[] = [];

    for (const exampleName of glob.sync(`./test/integration/${pascalCaseName}/**/*.gls`)) {
        examples.push(createExample(exampleName, fs.readFileSync(exampleName).toString()));
    }

    return examples.join("\n");
};

const createCommandMarkdown = (metadata: CommandMetadata) => `# \`${metadata.name}\`

${metadata.description}.

## Parameters

${createParametersMarkdown("", metadata.parameters)}

## Examples

${createExamples(metadata.name)}
`;

const createTableOfContents = (commandNames: [string, string][]): string => {
    return commandNames
        .map(([commandName]) => commandName)
        .map((commandName) => `* [\`${commandName}\`](#${commandName.replace(/ /g, "-")})`)
        .join("\n");
};

const createAllCommandsMarkdown = (commandNamesAndMarkdowns: [string, string][]): string => {
    const allcommandNamesAndMarkdowns = commandNamesAndMarkdowns
        .map(
            ([commandName, commandMarkdown]) =>
                `${commandMarkdown}See [${commandName}.md](./commands/${commandName.replace(/ /g, "%20")}.md).\n\n`,
        )
        .join("\n")
        .replace(/\# /g, "## ");

    return `# All Commands

This is an auto-generated listing of all GLS commands.
For files per command, see the links under each file.

${createTableOfContents(commandNamesAndMarkdowns)}

${allcommandNamesAndMarkdowns}`;
};

const refreshCommands = () => {
    const commandsBag = CommandsBagFactory.forContext(new RenderContext(new TypeScript()));
    const commands = commandsBag.getCommands();
    const commandNamesAndMarkdowns: [string, string][] = [];

    for (const commandName of Object.keys(commands)) {
        const metadata = commands[commandName].getMetadata();
        const commandMarkdown = createCommandMarkdown(metadata);

        commandNamesAndMarkdowns.push([commandName, commandMarkdown]);
        fs.writeFileSync(`./docs/commands/all/${commandName}.md`, commandMarkdown);
    }

    fs.writeFileSync(`./docs/commands/all-commands.md`, createAllCommandsMarkdown(commandNamesAndMarkdowns));
};

for (const directory of ["./docs/commands", "./docs/commands/all"]) {
    try {
        fs.mkdirSync(directory);
    } catch {
        /* The directory will almost always already exist */
    }
}

refreshCommands();
