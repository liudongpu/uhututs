"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var childProcess = require("child_process");
var index_1 = require("../../tcore/index");
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    /**
     * 同步执行命令
     *
     * @param {string} sCommand
     * @param {string[]} aArgs
     * @param {IHelperSpawSyncOption} oOption
     *
     * @memberOf MutilsHelper
     */
    default_1.spawnSync = function (sCommand, aArgs, oOption) {
        var result = childProcess.spawnSync(sCommand, aArgs, index_1.TcoreHelperObject.assign({
            stdio: 'inherit'
        }, oOption));
        if (result.status !== 0) {
            //process.exit(result.status);
            this.exitProcess(result.status, result.stderr
                ? result.stderr
                : 'spawn error "' + sCommand + ' "');
        }
        else {
            if (result.stdout) {
                process
                    .stdout
                    .write(result.stdout);
                process
                    .stderr
                    .write(result.stderr);
            }
        }
        //console.log(free.stdout.toString()); free.stdout.pipe(process.stdout);
    };
    /**
     * 异步执行命令
     *
     * @param {string} sCommand
     * @param {string[]} aArgs
     * @param {IHelperSpawSyncOption} oOption
     *
     * @memberOf MutilsHelper
     */
    default_1.spawn = function (sCommand, aArgs, oOption) {
        oOption.stdio = 'inherit';
        childProcess.spawn(sCommand, aArgs, oOption);
    };
    default_1.exitProcess = function (iState, oError) {
        if (!oError) {
            oError = "undefined error from exit";
        }
        process
            .stderr
            .write(oError);
        process.exit(iState);
    };
    return default_1;
}());
exports.default = default_1;
