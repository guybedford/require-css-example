require.config({
    baseUrl: ".",
    paths: {
        "require-css": "lib/require-css"
    },
    map: {
        "*": {
            "css": "require-css/css"
        }
    }
})

require(["example/example"])