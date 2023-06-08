interface Vehicle {
    getTotalVehicle(type:string):number;
    getTotalIncomeVehicle(type:string):number;
}

class Vehicles implements Vehicle {
    protected noPolice: string;
    protected type: string;
    protected year: number;
    protected seat: number;

    static SUVIncome: number = 0;
    static taxiIncome: number = 0;
    static privateJetIncome: number = 0;
    static totalIncome: number = 0;

    static countVehicle: number = 0;
    static countSUV: number = 0;
    static countTaxi: number = 0;
    static countPJ: number = 0;

    constructor(noPolice: string, type: string, year: number, seat: number){
        this.noPolice = noPolice;
        this.type = type;
        this.year = year;
        this.seat = seat;
        Vehicles.countVehicle++;
    }

    getTotalVehicle(type?: string): number {
        if(type == 'SUV') {
            return Vehicles.countSUV;
        } else if (type == 'Taxi') {
            return Vehicles.countTaxi;
        } else if (type == 'PrivateJet') {
            return Vehicles.countPJ;
        }
        return Vehicles.countVehicle;
    }

    getTotalIncomeVehicle(type?: string): number {
        if(type == 'SUV') {
            return Vehicles.SUVIncome;
        } else if (type == 'Taxi') {
            return Vehicles.taxiIncome;
        } else if (type == 'PrivateJet') {
            return Vehicles.privateJetIncome;
        }
        Vehicles.totalIncome += Vehicles.SUVIncome + Vehicles.taxiIncome + Vehicles.privateJetIncome;
        return Vehicles.totalIncome;
    }

    getNoPolice() : string {
        return this.noPolice;
    }

    getVehicleType() : string {
        return this.type;
    }

    getYear() : number {
        return this.year;
    }

    getSeat() : number {
        return this.seat;
    }
}

class SUV extends Vehicles {
    constructor(noPolice:string, type:string, year:number, seat:number, rent:number, driver:number){
        super(noPolice, type, year, seat);
        Vehicles.countSUV++;
        Vehicles.SUVIncome += rent + driver;
    }
}

class Taxi extends Vehicles {
    constructor(noPolice:string, type:string, year:number, seat:number, order: number, orderPerKM: number){
        super(noPolice, type, year, seat);
        Vehicles.countTaxi++;
        Vehicles.taxiIncome += order * orderPerKM;
    }
}

class PrivateJet extends Vehicles {
    constructor(noPolice:string, type:string, year:number, seat:number, rent:number, driver:number){
        super(noPolice, type, year, seat);
        Vehicles.countPJ++;
        Vehicles.privateJetIncome += rent + driver;
    }
}

const suv1 = new SUV('D 1001 UM', 'SUV', 2010, 4, 500000, 150000);
const suv2 = new SUV('D 1002 UM', 'SUV', 2010, 4, 500000, 150000);
const suv3 = new SUV('D 1003 UM', 'SUV', 2015, 5, 500000, 150000);
const suv4 = new SUV('D 1004 UM', 'SUV', 2015, 5, 500000, 150000);
const taxi1 = new Taxi('D 11 UK', 'Taxi', 2002, 4, 45, 4500);
const taxi2 = new Taxi('D 12 UK', 'Taxi', 2015, 4, 75, 4500);
const taxi3 = new Taxi('D 13 UK', 'Taxi', 2020, 4, 90, 4500);
const privateJet1 = new PrivateJet('ID8089', 'PrivateJet', 2015, 12, 35000000, 15000000);
const privateJet2 = new PrivateJet('ID8099', 'PrivateJet', 2018, 15, 55000000, 25000000);

console.log(suv1.getTotalVehicle())
console.log(suv1.getTotalVehicle('SUV'));
console.log(suv2.getTotalIncomeVehicle('SUV'));
console.log(taxi1.getTotalIncomeVehicle('Taxi'));
console.log(privateJet1.getTotalIncomeVehicle('PrivateJet'));
console.log(suv1.getTotalIncomeVehicle());

console.log(suv1.getNoPolice());
console.log(suv2.getNoPolice());
console.log(privateJet1.getSeat());
