({
    mainConfigFile: "main.js",
    baseUrl: ".",
    paths: {
        "requirejs": "lib/require"
    },
    dir: "optimized",
    skipDirOptimize: true,
    modules: [{
            name: "main",
            include: ["requirejs", "example/example"]
        }
    ]
})
