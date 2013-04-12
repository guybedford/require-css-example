({
    mainConfigFile: "config.js",
    baseUrl: ".",
    paths: {
        "requirejs": "lib/require"
    },
    dir: "optimized",
    optimize: "none",
    skipDirOptimize: true,
    modules: [{
            name: "main",
            include: ["requirejs", "example/example", "css"],
            excludeShallow: ["less", "lib/require-less/less-builder", "lib/require-less/lessc", "lib/require-less/lessc-server"]
        }
    ]
})
