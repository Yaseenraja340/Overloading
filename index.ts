// Function overloading

// function sub (a:number):number
// function sub (a:string,b:string):string

// function sub(a:any,b?:any):any{
//     return a+b
// }
// console.log(sub(21,12));
// console.log(sub("nice","yaseen"));

// =================================================================

// number array

// let array:number[]=[435,4345,645] 

// Tuples

// let tuple:[string,number,boolean]=["yaseen",88,true]
// let thirdelement = tuple[2];

// ===================================================================

// Structural Tying

// class Human {
//     name:string;

//     constructor(username:string){
//      this.name=username;
//     }
// }

// let humanObj= new Human("yaseen");
// humanObj.name;


// class Human1 {
//     name:string;

//     constructor(name:string){
//         this.name=name;
        
//  }
//     // eat(){
//     //      console.log(this.name+ "is a Human and is eating");
        
//     // }
// }

// class animal1 {
//     name:string;

//     constructor(user:string){
//         this.name=user
//     }
//     // eat(){
//     //     console.log(this.name+ "is a animal and is eating");
        
//     // }
    
// }

// class wildanimal {
//     title:string;

//     constructor(name:string){
//         this.title=name;
//     }

//     // eat(){
//     //     console.log(this.title+ "is a wildanimal and is eating");
        
//     // }
// }

// class robot {
//     name:string;

//     constructor(nameuser:string){
//         this.name=nameuser
//     }
// }

// let h:Human1 = new Human("tom");
// let a:animal1 = new Human("goat");
// let r:robot = new Human("R2-D2");

// let h2=h
// h2=a
// // h2.eat();

// let r2=r
// r=a

// // a=r2

// let hum :Human = new animal1('dog');

// // let wild : animal1 = new wildanimal('deer')

// let r0: robot = new animal1("Donkey");

// var isItRobot = r0 instanceof robot;

// console.log("R0 instance of ", isItRobot);


// ========================================================

class Animal {
    name:string

    constructor (theName:string){
     this.name=theName
    }     
    move(meters=53){
        console.log(this.name, "moved" + meters+ "m.");
        
    }
}
// const myanimal= new Animal("dog")
// myanimal.move(98)

class snake extends Animal {
    constructor(name:string){
        super(name)
    }
    move(meters=4){
        console.log("slithering..");
        
        super.move(meters)
    }
    bite(){
        console.log("bites");
        
    }
}
// const mysnake= new snake("anakonda")
// mysnake.move(43)

class horse extends Animal {
   constructor(name:string){
    super(name)
   }
   move(meters= 43) {
       console.log("globing..");
       
       super.move(meters)
   }
}
// const myHorse= new horse("gujjar")
// myHorse.move(49)


// ===================================================================

// public
// private
// protected

var passcode = "secret code";


class employ {
    private _fullName: string | undefined

    get fullName(): string | undefined{
        return this._fullName;
    }

    set fullName(newName:string | undefined){
        this._fullName=newName
    }
}
var employee = new employ()
employee.fullName="Yaseen"

if (employee.fullName) {
    console.log(employee.fullName);
    
}