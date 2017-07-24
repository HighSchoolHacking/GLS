import { ImportRelativity } from "./ImportRelativity";

/**
 * Marks an import from an absolute package or local file.
 */
export class Import {
    /**
     * Package path to import from.
     */
    public packagePath: string[];

    /**
     * Items to import from the package path.
     * 
     * @todo Use a Set once the source tsconfig.json allows it.
     */
    public items: string[];

    /**
     * Whether this is from an absolute package or local file.
     */
    public relativity: ImportRelativity;

    /**
     * Initializes a new instance of the Import class.
     *
     * @param packagePath   Package path to import from.
     * @param items   Items to import from the package path.
     * @param relativity   Whether this is from an absolute package or local file.
     */
    public constructor(packagePath: string[], items: string[], relativity: ImportRelativity) {
        this.packagePath = packagePath;
        this.items = items;
        this.relativity = relativity;
    }

    /**
     * Adds items to the unique accumulated items.
     * 
     * @param items   Items to add.
     */
    public addItems(items: string[]) {
        for (let item of items) {
            if (this.items.indexOf(item) !== -1) {
                this.items.push(item);
            }
        }
    }
}
