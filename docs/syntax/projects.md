# Projects

Output languages commonly define the group of files in a repository as a bundled package, also known as a module or project.
Those projects will normally contain a metadata file at the root to describe the project, such as with JavaScript's `package.json`.
GLS allows defining a `gls.json` at the root of a project to define fields common to those metadata files.

## Fields

Projects may define each of the following fields:

| Field | Example | Description |
| :--- | :--- | :--- |
| `author` | `"Josh Goldberg"` | Name of the overall project author. |
| `description` | `"A unified syntax that compiles into your favorite OOP languages."` | Friendly sentence describing the project. |
| `email` | `"me@joshuakgoldberg.com"` | Contact email for the project. |
| `license` | `"MIT"` | Shorthand name for the license type. |
| `name` | `"Gls"` | Upper.Camel.Case name of the project. |
| `repositoryType` | `"git"` | Source control system storing file history. |
| `url` | `"https://github.com/general-language-syntax/GLS"` | Website where the project is hosted. |
| `version` | `"1.2.3"` | Major.Minor.Patch semantic verison. |
