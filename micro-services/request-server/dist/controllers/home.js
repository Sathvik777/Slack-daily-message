"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let pkg = require(__dirname + '/../../package.json');
exports.index = (req, res) => {
    res.json({
        message: 'Welcome to API sekeleton.',
        version: pkg.version,
    });
};
//# sourceMappingURL=home.js.map