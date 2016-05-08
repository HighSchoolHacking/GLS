module.exports = grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        meta: {
            paths: {
                coverage: {
                    base: "Coverage",
                    instrument: "Coverage/Instrument",
                    reports: "Coverage/Reports"
                },
                dist: "Distribution",
                source: "Source"
            }
        },
        clean: [
            "<%= meta.paths.coverage.base %>",
            "<%= meta.paths.dist %>/**",
            "<%= meta.paths.source %>/**/*.js.*"
        ],
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
            options: {
                reporter: "Nyan"
            },
            unit: {
                src: ["Tests/Unit/**/*.js"]
            },
            integration: {
                src: ["Tests/IntegrationTests.js"]
            },
            "end-to-end": {
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
            },
            distribution: {
                options: {
                    module: "amd",
                    sourceMap: false
                },
                out: "<%= meta.paths.dist %>/GLS.js",
                src: ["<%= meta.paths.source %>/**/*.ts"]
            }
        }
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
