const add = (a: number, b: number): number => {
    return a + b;
}

// 2) function that returns a "void" type

const log = (message: string): void => {
    console.log(message);
}

// 3) function that returns a "never" type      

const logError = (message: string): never => {
    throw new Error(message);
}

// 4) function that returns a "void" or "never" type

const logError2 = (message: string): void | never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: "sunny"
};

const logWeather = ({ date, weather }: { date: Date, weather: string }) => {
    console.log(weather);
    console.log(date);
}

// 5) function that returns a "void" or "never" type