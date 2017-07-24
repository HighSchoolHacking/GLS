/**
 * Allowed casing preferences.
 */
export enum CaseStyle {
    /**
     * Dashes in lower case, such as abc-def.
     */
    DashLowerCase,

    /**
     * Dashes in upper case, such as Abc-Def.
     */
    DashUpperCase,

    /**
     * Directories in lower case, such as abc/def.
     */
    DirectoryLowerCase,

    /**
     * Directories in upper case, such as Abc/Def.
     */
    DirectoryUpperCase,

    /**
     * Camel case, such as abcDef.
     */
    CamelCase,

    /**
     * Lower case file names case, such as ./abc/def.
     */
    FileSystemLowerCase,

    /**
     * Upper case file names case, such as ./Abc/Def.
     */
    FileSystemUpperCase,

    /**
     * Packages in lower case, such as abc.def.
     */
    PackageLowerCase,

    /**
     * Packages in upper case, such as Abc.Def.
     */
    PackageUpperCase,

    /**
     * Pascal case, such as AbcDef.
     */
    PascalCase,

    /**
     * Snake case, such as abc_def.
     */
    SnakeCase
}
