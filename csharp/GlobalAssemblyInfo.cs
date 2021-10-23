// ---------------------------------------------------------------------------------------------------------------------
// <copyright file="GlobalAssemblyInfo.cs" company="Justin Rockwood">
//   Copyright (c) Justin Rockwood. All Rights Reserved. See LICENSE.txt in the project root for license information.
// </copyright>
// ---------------------------------------------------------------------------------------------------------------------

using System.Reflection;
using System.Resources;
using System.Runtime.InteropServices;

// Company and Product
[assembly: AssemblyCompany("Justin Rockwood")]
[assembly: AssemblyProduct("INSERT PRODUCT") // uncomment to compile ]
[assembly: AssemblyCopyright("Copyright © 2021 Justin Rockwood. All rights reserved.")]
[assembly: AssemblyTrademark("")]

// Localization
[assembly: AssemblyCulture("")]
[assembly: NeutralResourcesLanguage("en-US")]

// Version Information
[assembly: AssemblyInformationalVersion("1.0")]
[assembly: AssemblyVersion("1.0.0.0")]
[assembly: AssemblyFileVersion("1.0.0.0")]

// Other
#if DEBUG
[assembly: AssemblyConfiguration("Debug")]
#else
[assembly: AssemblyConfiguration("")]
#endif
[assembly: ComVisible(false)]
