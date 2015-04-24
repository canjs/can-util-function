module.exports = function(grunt) {

    grunt.initConfig({
        "steal-export": {
            transpile: {
                system: {
                    main: "src/function",
                    config: "package.json!npm"
                },
                options: {
                    debug: true
                },
                outputs: {
                    amd: {
                        graphs: ["src/function"],
                        format: "amd",
                        ignore: ['can/util']
                    },
                    cjs: {
                        graphs: ["src/function"],
                        format: "cjs",
                        ignore: ['can/util']
                    },
                    global: {
                        graphs: ["src/function"],
                        format: "global",
                        ignore: ['can/util']
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('steal-tools');

    // Default task(s).
    grunt.registerTask('default', ['steal-export']);

};
