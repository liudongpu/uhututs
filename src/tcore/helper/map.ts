export class HelperMap {

    static parseMap < T > (oAttr) : Map < string,
    T > {
        var mMap = new Map < string,
            T > ();
        for (let k in oAttr) {
            mMap.set(k, oAttr[k]);
        }
        return mMap;
    }

    static stringIsEmpty(cs) {
        return cs == undefined || cs == null || cs.length == 0;
    }
    static objectToMap(oAttr) : Map < string,
    string > {

        var mMap = new Map < string,
            string > ();
        for (let k in oAttr) {
            mMap.set(k, oAttr[k]);
        }
        return mMap;
    }
    static mapToObject < T > (oMap : Map < string, string >) : T {

        let oReturn: any = {};

        oMap.forEach((v, k) => oReturn[k] = v);
        return oReturn;

    }

    static stringToObject < T > (sParm : string) : T {
        return this.mapToObject < T > (this.stringToMap(sParm));

    }

    static stringToMapArray(sParm : string) {
        let oMap = this.stringToMap(sParm);

        let aItems = [];
        oMap.forEach((v, k) => {
            aItems.push({key: k, value: v});
        })

        return aItems;

    }

    static stringToMap(sParm : string) : Map < string,
    string > {
        let oReturn = new Map < string,
            string > ();

        if (sParm) 
            sParm.split('&').forEach((fItem) => {

                if (!this.stringIsEmpty(fItem)) {

                    let sKey = fItem.split('=')[0];
                    let sValue = fItem.substr(sKey.length + 1);
                    oReturn.set(sKey, sValue);
                }
            });
        return oReturn;
    }

    static formatMapbyObject(oObject : Object, sPropName : string) : Map < string,
    string > {

        var oMap = new Map < string,
            string > ();

        if (oObject.hasOwnProperty(sPropName)) {

            for (var sKey in oObject[sPropName]) {

                var sVal = oObject[sPropName][sKey];

                oMap.set(sKey, sVal);
            }

        }

        return oMap;
    }

    static mapAssign(oTarget : Map < string, string >, oSource : Map < string, string >) : Map < string,
    string > {

        oSource.forEach((v, k) => {
            oTarget.set(k, v);
        });
        return oTarget;
    }

    static stringToSet(sString : string) : Set < string > {
        let oSet: Set < string > = new Set < string > ();
        if (sString != undefined && sString != null) {
            sString
                .split(',')
                .forEach(s => {
                    if (s != '') {
                        oSet.add(s);
                    }
                })
        };
        return oSet;
    }

    static setToString(oSet : Set < string >) : string {

        let aString: string[] = [];
        oSet.forEach(f => aString.push(f));
        return aString.join(',');

    }

    static upChildrenMap < T > (mMap : Map < string, T >, sStart : string) : Map < string,
    T > {

        let mReturn = new Map < string,
            T > ();

        mMap.forEach((v, k) => {
            if (k.startsWith(sStart)) {
                mReturn.set(k.substr(sStart.length), v);
            }
        });
        return mReturn;

    }

}
