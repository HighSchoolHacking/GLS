/**
 * Resolves absolute import paths to file-relative import paths.
 */
export class ImportPathResolver {
    /**
     * Resolves an absolute import path to a file-relative import path.
     *
     * @param filePath   File path to resolve from.
     * @param importPath   Import path to resolve to.
     */
    public resolve(filePath: string[], importPath: string[]): string[] {
        const resolvedPath: string[] = [];
        let i = 0;

        while (i < filePath.length && i < importPath.length) {
            if (filePath[i] !== importPath[i]) {
                break;
            }

            i += 1;
        }

        while (i < filePath.length && i < importPath.length) {
            resolvedPath.unshift("..");
            resolvedPath.push(importPath[i]);

            i += 1;
        }

        while (i < filePath.length && i >= importPath.length) {
            resolvedPath.unshift("..");
            i += 1;
        }

        while (i >= filePath.length && i < importPath.length) {
            resolvedPath.push(importPath[i]);
            i += 1;
        }

        return resolvedPath;
    }
}
