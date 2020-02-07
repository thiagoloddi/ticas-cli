#! /usr/bin/env node
const lib = require("../lib");
const pkg = require("../package.json");

lib.start(pkg.version);
