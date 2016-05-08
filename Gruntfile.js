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
                distribution: "Distribution",
                source: "Source"
            }
        },
        clean: [
            "<%= meta.paths.coverage.base %>",
            "<%= meta.paths.distribution %>/**",
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
                    declaration: true,
                    module: "amd",
                    removeComments: false,
                    sourceMap: true
                },
                out: "<%= meta.paths.distribution %>/GLS.js",
                src: ["<%= meta.paths.source %>/**/*.ts"]
            }
        },
        uglify: {
            distribution: {
                options: {
                    sourceMapIn: "<%= meta.paths.distribution %>/GLS.js.map",
                    sourceMap: "<%= meta.paths.distribution %>/GLS.min.map",
                    sourceMapRoot: "<%= meta.paths.source %>"
                },
                files: {
                    "<%= meta.paths.distribution %>/GLS.min.js": ["<%= meta.paths.distribution %>/GLS.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-env");
    grunt.loadNpmTasks("grunt-istanbul");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask(
        "build",
        ["tslint", "ts", "uglify"]);

    grunt.registerTask(
        "coverage",
        ["env:coverage", "instrument", "mochaTest", "storeCoverage", "makeReport"]);

    grunt.registerTask(
        "default",
        ["clean", "build", "coverage"]);
};
