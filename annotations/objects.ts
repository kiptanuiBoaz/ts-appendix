const profile = {
    name: "alex",
    age: 25,
    coords: {
        lat: 23,
        long: 232
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profile;

const { coords: { lat, long } }: { coords: { lat: number, long: number } } = profile;