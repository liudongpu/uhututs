"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var childProcess = require("child_process");
var index_1 = require("../../tcore/index");
var ProtoProcess = /** @class */ (function () {
    function ProtoProcess() {
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
    ProtoProcess.spawnSync = function (sCommand, aArgs, oOption) {
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
    ProtoProcess.spawn = function (sCommand, aArgs, oOption) {
        oOption.stdio = 'inherit';
        childProcess.spawn(sCommand, aArgs, oOption);
    };
    ProtoProcess.exitProcess = function (iState, oError) {
        if (!oError) {
            oError = "undefined error from exit";
        }
        process
            .stderr
            .write(oError);
        process.exit(iState);
    };
    return ProtoProcess;
}());
exports.ProtoProcess = ProtoProcess;
