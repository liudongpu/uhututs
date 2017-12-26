import { EasyFile } from './../easy/file';
import { ProcessPackage } from './../process/package';
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




        ProcessPackage.checkOrUpdate( TNodeIoFile.pathJoin(BootProgram.upGoWorkOfNative(),TBase.defineProgram().fileNameOfPackage),oConfig.plugListNative  );




        EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/macros/native.mustache"), EasyLaunch.upDevPathForResources("macro/native.mustache"));


        EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/indexs/App.js"), EasyLaunch.upGoNativePath("App.js"));

    }




}