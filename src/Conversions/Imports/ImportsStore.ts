import { Import } from "../../Languages/Imports/Import";

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
     * @returns Whether any imports have been added.
     */
    public hasAnyImports(): boolean {
        return Object.keys(this.imports).length > 0;
    }

    /**
     * @returns All accumulated package import stores.
     */
    public getAllImportStores(): Import[] {
        let stores = [];

        for (let i in this.imports) {
            if ({}.hasOwnProperty.call(this.imports, i)) {
                stores.push(this.imports[i]);
            }
        }

        return stores;
    }

    /**
     * Adds new imports to the stored imports.
     * 
     * @param addedImports   New imports to store.
     */
    public addImports(addedImports: Import[]): void {
        for (let addedImport of addedImports) {
            this.addImport(addedImport);
        }
    }

    /**
     * Adds items to a package's stored imports.
     * 
     * @param addedImport   New import to store.
     */
    private addImport(addedImport: Import): void {
        let packageName: string = addedImport.relativity + addedImport.packagePath.join("/");

        if (packageName in this.imports) {
            this.imports[packageName].addItems(addedImport.items);
        } else {
            this.imports[packageName] = addedImport;
        }
    }
}
