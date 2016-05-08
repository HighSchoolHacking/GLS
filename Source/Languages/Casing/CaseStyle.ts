/**
 * Allowed casing preferences.
 */
export enum CaseStyle {
    /**
     * No preference on casing.
     */
    None,

    /**
     * Camel case, such as myVariable.
     */
    CamelCase,

    /**
     * File system case, such as "my/variable.
     */
    FileSystem,

    /**
     * Packages in lower case, such as "my.variable".
     */
    PackageLowerCase,

    /**
     * Packages in upper case, such as "My.Variable".
     */
    PackageUpperCase,

    /**
     * Pascal case, such as MyVariable.
     */
    PascalCase,

    /**
     * Snake case, such as my_variable.
     */
    SnakeCase
}
