class Vehicle {
    // public drive(): void {
    //     console.log("Vrooom!")
    // }

    protected honk(): void {
        console.log("Beep!")
    }
}

class Van extends Vehicle {
    private drive(): void {
        console.log("Chaga chaga!")
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const van = new Van();

const vehicle = new Vehicle();
van.startDrivingProcess();
van.honk();
