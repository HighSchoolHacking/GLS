import { NewInstantiationSyntaxKind } from "../Languages/Properties/NewProperties";
import { LineResults } from "../LineResults";
import { RenderContext } from "../RenderContext";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { RepeatingParameters } from "./Metadata/Parameters/RepeatingParameters";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { MemberMethodRenderer } from "./NewRendering/MemberMethodRenderer";
import { MethodCallRenderer } from "./NewRendering/MethodCallRenderer";
import { NewRenderer } from "./NewRendering/NewRenderer";
import { PrefixRenderer } from "./NewRendering/PrefixRenderer";

/**
 * Instantiates a new class instance.
 */
export class NewCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.New)
        .withDescription("Instantiates a new class instance.")
        .withParameters([
            new SingleParameter("className", "Name of the class.", true),
            new RepeatingParameters(
                "Arguments to pass into the constructor",
                [
                    new SingleParameter("argument", "Argument to pass into the constructor", false)
                ])
        ]);

    /**
     * Renderers for each possible render style.
     */
    private styleRenderers: { [i: number]: NewRenderer };

    /**
     * Initializes a new instance of the Command class.
     *
     * @param context   The driving context for converting the command.
     */
    public constructor(context: RenderContext) {
        super(context);

        this.styleRenderers = {
            [NewInstantiationSyntaxKind.MemberMethodCall]: new MemberMethodRenderer(this.language),
            [NewInstantiationSyntaxKind.MethodCall]: new MethodCallRenderer(this.language),
            [NewInstantiationSyntaxKind.Prefix]: new PrefixRenderer(this.language)
        };
    }

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return NewCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        const instantationKind = this.language.properties.newProp.instantiationKind;

        return this.styleRenderers[instantationKind].render(parameters);
    }
}
