import {AModelConfig} from './../../air/model/config';
import {IConfigInfo} from './../../air/interfaces/config';
import {EasyLaunch} from './launch';
import {TBase, TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile} from '../../tnode/index';

export class EasyStart {

    static start() {
        this.generateConfig();
    }

    public static refreshConfig() {


        let sGenerateFile = EasyLaunch.upSubPathForGenerate(TNodeIoFile.pathJoin(TBase.defineBase().pathDevSettings, TBase.defineProgram().fileNameOfConfig));


        let sContent=TNodeIoFile.readFile(sGenerateFile);

        let oConfigCurrent = TCoreCommonFunc.jsonParse(sContent);
        AModelConfig.initConfig(oConfigCurrent);
    }

    /**
     * 生成配置文件
     *
     * @private
     * @static
     * @memberof UpdateGo
     */
    private static generateConfig() {

        let sConfigFile = EasyLaunch.upDevPathForSettings(TBase.defineProgram().fileNameOfConfig);

        let oConfigCurrent = TCoreCommonFunc.jsonParse < IConfigInfo > (TNodeIoFile.readFile(sConfigFile));

        let oDefaultConfig = AModelConfig.upConfig();

        oConfigCurrent = TCoreHelperObject.assign(oDefaultConfig, oConfigCurrent);

        oConfigCurrent.badgeFlagGenerate = true;

        let sGenerateFile = EasyLaunch.upSubPathForGenerate(TNodeIoFile.pathJoin(TBase.defineBase().pathDevSettings, TBase.defineProgram().fileNameOfConfig));

        TNodeIoFile.writeFile(sGenerateFile, TCoreCommonFunc.jsonStringifyBeautify(oConfigCurrent));

        this.refreshConfig();

    }





    


}