import { Import } from "../Languages/Imports/Import";
import { ImportRelativity } from "../Languages/Imports/ImportRelativity";

/**
 * Holds accumulated package imports during a conversion.
 */
export class ImportsStore {
    /**
     * Accumulated package imports, keyed by joined package name.
     */
    private imports: { [i: string]: Import };

    /**
     * Initializes a new instance of the ImportsStore class.
     */
    public constructor() {
        this.imports = {};
    }

    /**
     * Adds new imports to the stored imports.
     *
     * @param addedImports   New imports to store.
     */
    public addImports(addedImports: Import[]): void {
        for (const addedImport of addedImports) {
            this.addImport(addedImport);
        }
    }

    /**
     * @returns All accumulated package import stores.
     */
    public getAllImportStores(): Import[] {
        const stores = [];

        for (const i in this.imports) {
            if ({}.hasOwnProperty.call(this.imports, i)) {
                stores.push(this.imports[i]);
            }
        }

        return stores;
    }

    /**
     * @returns Whether any imports have been added.
     */
    public hasAnyImports(): boolean {
        return Object.keys(this.imports).length > 0;
    }

    /**
     * Adds items to a package's stored imports.
     *
     * @param addedImport   New import to store.
     */
    private addImport(addedImport: Import): void {
        const packageName: string = ImportRelativity[addedImport.relativity] + addedImport.packagePath.join("/");

        if (packageName in this.imports) {
            this.imports[packageName].addItems(addedImport.items);
        } else {
            this.imports[packageName] = addedImport;
        }
    }
}
