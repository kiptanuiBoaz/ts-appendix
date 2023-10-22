class Vehicle {


    constructor(public color: string) { }


    protected honk(): void {
        console.log("Beep!")
    }
}

class Van extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log("Chaga chaga!")
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const van = new Van(4, "Orange");

const vehicle = new Vehicle("Orange");
van.startDrivingProcess();
console.log(vehicle.color)
