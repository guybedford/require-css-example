#!/bin/bash

# require traverses all directories before building - example dir poses a problem
rm -r lib/require-css/example

echo "running build with node `node --version` ..."
node lib/r.js -o build.js
