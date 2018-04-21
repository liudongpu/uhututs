import { EasyLaunch } from "../easy/launch";
import { TBase } from "../../tdaemon";
import { TNodeIoFile } from "../../tnode";
import { KProgramFeatureStatus } from "../../air/keep/program";
import { TCoreCommonFunc, TCoreHelperMap } from "../../tcore";





export class FeatureStatus{


    /**
     * 
     * 
     * @static
     * @param {string} sKey 
     * @param {string} sValue 
     * @returns {boolean} 返回是否更新
     * @memberof FeatureStatus
     */
    static  checkSignAndUpdate(sKey:string,sValue:string):boolean{


        let oStatus=this.upStatusContent();

        

        let bFlag=false;

        
        if(oStatus.sign[sKey]==undefined||oStatus.sign[sKey]!=sValue){

            oStatus.sign[sKey]=sValue;
            this.saveStatus(oStatus);
            bFlag=true;
        }

        


        return bFlag;
    }



    static upStatusContent():KProgramFeatureStatus{


        let sConfigFile = EasyLaunch.upSubPathForGenerate( TNodeIoFile.pathJoin(TBase.defineBase().pathDevSettings, TBase.defineProgram().fileNameOfStatus)  );

        let oStatus:KProgramFeatureStatus=null;

        if(TNodeIoFile.flagExist(sConfigFile)){

            oStatus= TCoreCommonFunc.jsonParse(TNodeIoFile.readFile(sConfigFile)) ;
        }
        else{
            oStatus=new KProgramFeatureStatus();
            this.saveStatus(oStatus);
        }


        return oStatus;


    }


    static saveStatus(oStatus:KProgramFeatureStatus){
        let sConfigFile = EasyLaunch.upDevPathForSettings(TNodeIoFile.pathJoin(TBase.defineBase().pathDevSettings, TBase.defineProgram().fileNameOfStatus)  );
        TNodeIoFile.writeFile(sConfigFile,TCoreCommonFunc.jsonStringifyBeautify(oStatus));
    }





}