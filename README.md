# ide-settings

Settings for various IDEs that I use for development

## Settings for Visual Studio development using C\#

- **.editorconfig** - Contains all of the default settings for C# projects. Visual Studio 2017+, Visual Studio Code, and
  many other IDEs use these settings by default. This should go into the root directory for your source code.
- **.gitattributes** - Uses whatever the platform decides for line endings (CR/LF for Windows, LF for Linux).
- **.gitignore** - Customized for Visual Studio files.
- **CodeMaid.config** - Place in the same directory as the .sln file.
- **Directory.Build.Props** - Contains default settings for .NET Core/Standard projects. Make sure to change your
  project name.
- **GlobalAssemblyInfo.cs** - Used for .NET Framework projects. It should be included as a link in all projects.
- **Settings.XamlStyler** - Used only for XAML-based projects (UWP and WPF). Place in the same directory as the .sln
  file.
- **SolutionName.sln.DotSettings** - Default settings for ReSharper. Change the name of the file to be the same as your
  .sln file and it should sit next to the .sln file.

## Settings for Visual Studio Code using TypeScript

- **.vscode** - The whole directory should be copied over. Contains default settings and extensions.
- **.eslintrc**, **.prettierrc**, and **tsconfig.json** - These should be used as a group to control formatting of the
  code. Make sure to also add the following packages to your package.json file (via yarn) as `devDependencies`:
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`
  - `eslint`
  - `eslint-config-prettier`
  - `eslint-plugin-prettier`
  - `prettier`
- **.gitattributes** - Uses LF for all files.
- **.gitignore** - Ignores the build directories for TypeScript projects.
- **.markdownlint.json** - Markdown Lint settings (install the extension)
- **.npmignore** - Ignores extraneous files and directories not needed for NPM package publishing
- **jasmine.json** - Settings for Jasmine (if used)
- **wallaby.js** - Settings for Wallaby. This is a piece of software that I can't live without.
