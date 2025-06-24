
interface Car{
    make: string,
    model: string
}

type Bus = {
    make: string;
    model: string;
    payLoadCapacity: number;
}

type vehicle = Car | Bus;