const Gls = require("require("./dist/commonjs/Gls.js")".Gls;

const gls = new Gls();
gls.setLanguage("CSharp");

// System.Console.WriteLine("Hello world!");
console.log(gls.convert([`print : ("Hello world!")`]));
