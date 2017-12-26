import {AModelConfig} from './../../air/model/config';
import {IConfigInfo} from './../../air/interfaces/config';
import {EasyLaunch} from './../easy/launch';
import {IArgsStart} from './../../air/interfaces/args';
import {TBase, TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile, TNodeProtoProcess} from '../../tnode/index';
import { BootProgram } from '../boot/program';
import { EasyStart } from '../easy/start';
export class UpdateGo {

    static update(args : IArgsStart) {

        EasyStart.start();
         let oConfig= BootProgram.upGoConfig();


        if(oConfig.projectEnableNative){

            this.installNative(oConfig);
        }




    }

    





    private static installNative(oConfig:IConfigInfo){



        let sNativePath=EasyLaunch.upGoNativePath("");
        if(!TNodeIoFile.flagExist(sNativePath)){

            TNodeProtoProcess.spawnSync("react-native",["init",BootProgram.upGoWorkOfNative()]);
        }



        




    }




}