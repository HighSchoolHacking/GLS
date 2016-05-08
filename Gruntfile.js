module.exports = grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        meta: {
            paths: {
                coverage: {
                    instrument: "Coverage/Instrument",
                    reports: "Coverage/Reports"
                },
                dist: "Distribution",
                source: "Source"
            }
        },
        clean: ["<%= meta.paths.dist %>/**"],
        env: {
            coverage: {
                INSTRUMENTED_SOURCE: "/<%= meta.paths.coverage.instrument %>/<%= meta.paths.source %>/"
            }
        },
        instrument: {
            files: "Source/**/*.js",
            options: {
                lazy: true,
                basePath: "<%= meta.paths.coverage.instrument %>"
            }
        },
        makeReport: {
            src: "<%= meta.paths.coverage.reports %>/**/*.json",
            options: {
                type: "lcov",
                dir: "<%= meta.paths.coverage.reports %>",
                print: "detail"
            }
        },
        mochaTest: {
            unit: {
                options: {
                    reporter: "spec"
                },
                src: ["Tests/Unit/**/*.js"]
            },
            integration: {
                options: {
                    reporter: "spec"
                },
                src: ["Tests/IntegrationTests.js"]
            },
            "end-to-end": {
                options: {
                    reporter: "spec"
                },
                src: ["Tests/EndToEndTests.js"]
            }
        },
        storeCoverage: {
            options: {
                dir: "<%= meta.paths.coverage.reports %>"
            }
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: "<%= meta.paths.source %>/*/**.ts"
        },
        ts: {
            default: {
                tsconfig: true
            }
        },
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-env");
    grunt.loadNpmTasks("grunt-istanbul");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask(
        "build",
        ["tslint", "ts"]);

    grunt.registerTask(
        "coverage",
        ["env:coverage", "instrument", "mochaTest", "storeCoverage", "makeReport"]);

    grunt.registerTask(
        "default",
        ["clean", "build", "coverage"]);
};
