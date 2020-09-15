class Parks {      //this is a class declaration, and the way that the class declaration works is that all classes have to have the constructor method
    
    static reportParks() {             
        console.log( '----PARKS REPORT----');
    }
    
    constructor(parkName, numberOfTrees, parkArea, parkYear) {
        this.parkName = parkName;
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
        this.parkYear = parkYear;
    }   
    
    calcTreeDensity() {       
        var treeDensity = this.numberOfTrees / this.parkArea;
        console.log(treeDensity);
    }
    
    calcParkAge(year) {
        var parkAge = new Date().getFullYear() - year;
        console.log(parkAge);         
    }    
}

Parks.reportParks();

const oakPark = new Parks('Oak Park', 23000, 1000, 1970);
const nationalPark = new Parks('National Park', 55000, 2500, 1860);
const peterPark = new Parks('Peter Park, 3200', 32000, 1500, 1990);

var oak, national, peter;

oak = oakPark.calcTreeDensity();
national = nationalPark.calcTreeDensity();
peter = peterPark.calcTreeDensity();


const yearPark = [1970, 1860, 1990];
       

agePark = yearPark.map((el) => {
    var ageArr = [];            
    const age = ageArr.push(new Date().getFullYear() - el);
    return ageArr;       
});
