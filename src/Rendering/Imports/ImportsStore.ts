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
        const namespaceStores: Import[] = [];
        const otherStores: Import[] = [];

        for (const i in this.imports) {
            if ({}.hasOwnProperty.call(this.imports, i)) {
                if (this.imports[i].relativity === ImportRelativity.Namespace) {
                    namespaceStores.push(this.imports[i]);
                } else {
                    otherStores.push(this.imports[i]);
                }
            }
        }

        return namespaceStores.concat(...otherStores);
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
        const internalPackageNameKey: string = addedImport.relativity + addedImport.packagePath.join("/");

        if (internalPackageNameKey in this.imports) {
            this.imports[internalPackageNameKey].addItems(addedImport.items);
        } else {
            this.imports[internalPackageNameKey] = addedImport;
        }
    }
}
