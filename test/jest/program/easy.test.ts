import {TprogramEasyLanch} from "../../../src/tprogram/index";
import {Tbase} from "../../../src/tcore/index";

test('upSubPath', () => {
    expect(TprogramEasyLanch.upSubPath(
        Tbase
            .defineBase()
            .pathOfTempDir
    )).toBe('uhutu_ts_root/temp');
});
