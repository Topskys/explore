import Test from "../models/Test";

export interface Warrior {
    fight(): string;
    sneak(): string;
}

export interface Weapon {
    hit(): string;
    use(): void;
}

export interface ThrowableWeapon {
    throw(): string;
}


export interface TestService {
    getHello(n: number): number;
    findTestByUsername(username: string): Promise<Test | null>;
}
