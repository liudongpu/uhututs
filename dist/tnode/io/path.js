import { IoFile } from './file';
export class IoPath {
    static upCwdPath() {
        return process.cwd();
    }
    static upBinPath() {
        return IoFile.parentTop(__dirname, 3);
    }
    static upResourcePath() {
        return IoFile.pathJoin(IoFile.parentTop(__dirname, 3), "resource");
    }
    static upTestPath() {
        return IoFile.pathJoin(IoFile.parentTop(__dirname, 3), "test");
    }
}
