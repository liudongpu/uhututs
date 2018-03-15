export class HelperDate {


    static stringToDate(sString:string){

        return new Date(Date.parse((sString.replace(/-/g, "/"))))

    }


}