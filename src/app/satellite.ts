export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;
    showWarning: boolean = true;
    
 
    
    constructor ({ name, type, launchDate, orbitType, operational }: { name: string; type: string; launchDate: string; orbitType: string; operational: boolean; }) {
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
    }

    shouldShowWarning () {    
        if (this.type === "Space Debris") {
          return true; 
       } else {
           return ;
       }
    }


}
