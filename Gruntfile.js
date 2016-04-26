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
        "concat": {
            "base": {
                "src": [
                    "<%= meta.paths.dist %>/<%= pkg.name %>.js",
                    "<%= meta.paths.source %>/exports.js"
                ],
                "dest": "<%= meta.paths.dist %>/<%= pkg.name %>.js"
            }
        },
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
        "typescript": {
            "base": {
                "src": [
                    "<%= meta.paths.source %>/Languages/*.ts",
                    "<%= meta.paths.source %>/*.ts",
                    "<%= meta.paths.source %>/**/*.ts"
                ],
                "dest": "<%= meta.paths.dist %>/<%= pkg.name %>.js",
                "options": {
                    "declaration": true
                }
            }
        },
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-typescript");
    grunt.registerTask("default", [
        "clean", "tslint", "typescript", "concat", "mochaTest"
    ]);
};
