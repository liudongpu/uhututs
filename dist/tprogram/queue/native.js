import { TNodeProtoProcess } from '../../tnode/index';
import { BootProgram } from '../boot/program';
export class QueueNative {
    static run(oConfig) {
        TNodeProtoProcess.spawn("npm", ["start"], { cwd: BootProgram.upGoWorkOfNative() });
    }
}
