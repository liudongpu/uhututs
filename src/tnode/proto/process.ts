import childProcess = require("child_process");

import {TcoreHelperObject} from '../../tcore/index';

interface IHelperSpawSyncOption {
    cwd : string
    stdio?: string
}

export  class ProtoProcess {

    /**
     * 同步执行命令
     *
     * @param {string} sCommand
     * @param {string[]} aArgs
     * @param {IHelperSpawSyncOption} oOption
     *
     * @memberOf MutilsHelper
     */
    static spawnSync(sCommand : string, aArgs : string[], oOption
        ?
        : IHelperSpawSyncOption) {

        var result = childProcess.spawnSync(sCommand, aArgs, TcoreHelperObject.assign({
            stdio: 'inherit'
        }, oOption));

        if (result.status !== 0) {

            //process.exit(result.status);

            this.exitProcess(result.status, result.stderr
                ? result.stderr
                : 'spawn error "' + sCommand + ' "');
        } else {
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
    }

    /**
     * 异步执行命令
     *
     * @param {string} sCommand
     * @param {string[]} aArgs
     * @param {IHelperSpawSyncOption} oOption
     *
     * @memberOf MutilsHelper
     */
    static spawn(sCommand : string, aArgs : string[], oOption : IHelperSpawSyncOption) {
        oOption.stdio = 'inherit';
        childProcess.spawn(sCommand, aArgs, oOption);
    }

    static exitProcess(iState : number, oError : string | Buffer) {

        if (!oError) {
            oError = "undefined error from exit";
        }

        process
            .stderr
            .write(oError);

        process.exit(iState);

    }

}