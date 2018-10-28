/**
 * Name and directory path for a rendering file.
 */
export class FileMetadata {
    public static defaultFileMetadata = new FileMetadata("Program", []);

    private fileName: string;

    private packagePath: string[];

    public constructor(fileName: string, packagePath: string[]) {
        this.fileName = fileName;
        this.packagePath = packagePath;
    }

    public getFileName(): string {
        return this.fileName;
    }

    public getPackagePath(): string[] {
        return this.packagePath;
    }
}
