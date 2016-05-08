module.exports = function (grunt) {
    grunt.initConfig({
        "pkg": grunt.file.readJSON("package.json"),
        "meta": {
            "paths": {
                "source": "Source",
                "dist": "Distribution"
            }
        },
        "clean": ["<%= meta.paths.dist %>"],
        "mochaTest": {
            "unit": {
                "src": ["Tests/Unit/**/*.js"]
            },
            "integration": {
                "src": ["Tests/IntegrationTests.js"]
            },
            "end-to-end": {
                "src": ["Tests/EndToEndTests.js"]
            }
        },
        "tslint": {
            "options": {
                "configuration": grunt.file.readJSON("tslint.json")
            },
            "files": "<%= meta.paths.source %>/*/**.ts"
        },
        "ts": {
            default: {
                tsconfig: true
            }
        },
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", [
        "clean", "tslint", "ts", "mochaTest"
    ]);
};
