/**
 * Allowed casing preferences.
 */
export enum CaseStyle {
    /**
     * Dashes in lower case, such as abc-def.
     */
    DashLowerCase = "DashLowerCase",

    /**
     * Dashes in upper case, such as Abc-Def.
     */
    DashUpperCase = "DashUpperCase",

    /**
     * Directories in lower case, such as abc/def.
     */
    DirectoryLowerCase = "DirectoryLowerCase",

    /**
     * Directories in upper case, such as Abc/Def.
     */
    DirectoryUpperCase = "DirectoryUpperCase",

    /**
     * Camel case, such as abcDef.
     */
    CamelCase = "CamelCase",

    /**
     * Lower case file names case, such as ./abc/def.
     */
    FileSystemLowerCase = "FileSystemLowerCase",

    /**
     * Upper case file names case, such as ./Abc/Def.
     */
    FileSystemUpperCase = "FileSystemUpperCase",

    /**
     * Packages in lower case, such as abc.def.
     */
    PackageLowerCase = "PackageLowerCase",

    /**
     * Packages in upper case, such as Abc.Def.
     */
    PackageUpperCase = "PackageUpperCase",

    /**
     * Pascal case, such as AbcDef.
     */
    PascalCase = "PascalCase",

    /**
     * Python import case, such as .abc.def.
     */
    PythonImportCase = "PythonImportCase",

    /**
     * Snake case, such as abc_def.
     */
    SnakeCase = "SnakeCase"
}
