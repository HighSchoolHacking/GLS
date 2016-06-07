const path = require("path");

const originalSourcePath = "/src/";
const sourcePath = path
    .normalize(process.env.INSTRUMENTED_SOURCE || originalSourcePath)
    .replace(/\\/g, "/");

module.exports = function (rawPath) {
    return require(rawPath.replace(originalSourcePath, sourcePath));
};
