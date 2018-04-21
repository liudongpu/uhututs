"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require('crypto');
var ProtoCrypto = /** @class */ (function () {
    function ProtoCrypto() {
    }
    ProtoCrypto.cryptoMd5 = function (sInput) {
        var md5 = crypto.createHash("md5");
        return md5.update(sInput).digest('hex');
    };
    return ProtoCrypto;
}());
exports.ProtoCrypto = ProtoCrypto;
