import { ProcessGulp } from './../process/gulp';
import { QueueNative } from './../queue/native';
import { IArgsStart } from './../../air/interfaces/args';
import { EasyStart } from '../easy/start';
import { BootProgram } from '../boot/program';
export class  RunGo {
   

    static run(arg:IArgsStart){

        EasyStart.start();

        let oConfig= BootProgram.upGoConfig();



        if(oConfig.projectEnableNative){

            QueueNative.run(oConfig);


        }




        let oProcessGulp=new ProcessGulp();
        oProcessGulp.initStart();




    }



}

