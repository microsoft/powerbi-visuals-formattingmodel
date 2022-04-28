const semver = require('semver');

let packageVersion = require('./package.json').version;
let apiVersion = `${semver.major(packageVersion)}.${semver.minor(packageVersion)}.0`;

exports.version = apiVersion;
