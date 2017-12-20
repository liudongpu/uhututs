import {AModelConfig} from './../../air/model/config';
import {IConfigInfo} from './../../air/interfaces/config';
import {EasyLaunch} from './../easy/launch';
import {IArgsStart} from './../../air/interfaces/args';
import {TBase, TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile} from '../../tnode/index';
export class UpdateGo {

    static update(args : IArgsStart) {

        this.generateConfig();

    }

    private static generateConfig() {

        let sConfigFile = EasyLaunch.upDevPathForSetting(TBase.defineProgram().fileNameOfConfig);

        let oConfigCurrent = TCoreCommonFunc.jsonParse < IConfigInfo > (TNodeIoFile.readFile(sConfigFile));

        let oDefaultConfig = AModelConfig.upConfig();

        oConfigCurrent = TCoreHelperObject.assign(oDefaultConfig, oConfigCurrent);

        let sGenerateFile = EasyLaunch.upSubPathForGenerate(TNodeIoFile.pathJoin(TBase.defineBase().pathDevSetting, TBase.defineProgram().fileNameOfConfig));

        TNodeIoFile.writeFile(sGenerateFile, TCoreCommonFunc.jsonStringify(oConfigCurrent));


        AModelConfig.initConfig(oConfigCurrent);

        


    }
}