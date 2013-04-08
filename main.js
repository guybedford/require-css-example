require.config({
    baseUrl: ".",
    paths: {
        "require-css": "lib/require-css"
    },
    optimize: "none",
    map: {
        "*": {
            "css": "require-css/css"
        }
    }
})

require(["example/example"])