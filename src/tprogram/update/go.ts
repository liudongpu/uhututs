import {AModelConfig} from './../../air/model/config';
import {IConfigInfo} from './../../air/interfaces/config';
import {EasyLaunch} from './../easy/launch';
import {IArgsStart} from './../../air/interfaces/args';
import {TBase, TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile, TNodeProtoProcess} from '../../tnode/index';
import { BootProgram } from '../boot/program';
export class UpdateGo {

    static update(args : IArgsStart) {

        this.generateConfig();
         let oConfig= BootProgram.upGoConfig();


        if(oConfig.projectEnableNative){

            this.installNative(oConfig);
        }




    }

    /**
     * 生成配置文件
     * 
     * @private
     * @static
     * @memberof UpdateGo
     */
    private static generateConfig() {

        let sConfigFile = EasyLaunch.upDevPathForSetting(TBase.defineProgram().fileNameOfConfig);

        let oConfigCurrent = TCoreCommonFunc.jsonParse < IConfigInfo > (TNodeIoFile.readFile(sConfigFile));

        let oDefaultConfig = AModelConfig.upConfig();

        oConfigCurrent = TCoreHelperObject.assign(oDefaultConfig, oConfigCurrent);

        let sGenerateFile = EasyLaunch.upSubPathForGenerate(TNodeIoFile.pathJoin(TBase.defineBase().pathDevSetting, TBase.defineProgram().fileNameOfConfig));

        TNodeIoFile.writeFile(sGenerateFile, TCoreCommonFunc.jsonStringify(oConfigCurrent));


        AModelConfig.initConfig(oConfigCurrent);

        


    }





    private static installNative(oConfig:IConfigInfo){



        let sNativePath=EasyLaunch.upGoNativePath("");
        if(!TNodeIoFile.flagExist(sNativePath)){

            TNodeProtoProcess.spawnSync("react-native",["init",BootProgram.upGoWorkOfNative()]);
        }


    }




}