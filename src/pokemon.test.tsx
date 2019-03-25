import {Pokemon} from './pokemon';

describe("Simples tests on 'Pokemon' class", () => {
    beforeEach(()=> {
        Math.random = jest.fn(() => 1);
    });
    //expect(Math.random).toHaveBeenCalled();

    test("test who attack first", () => {
        const p1 = new Pokemon("low", 10);
        const p2 = new Pokemon("medium", 50);
        const p3 = new Pokemon("rapid", 88);
        expect(Pokemon.whoAttack(p1, p2)).toBe(p2);
        expect(Pokemon.whoAttack(p3, p2)).toBe(p3);
        expect(Pokemon.whoAttack(p1, p3)).toBe(p3);
    });

    test("test whoAttack parameters order", () => {
        const p1 = new Pokemon("low", 10);
        const p2 = new Pokemon("medium", 50);
        expect(Pokemon.whoAttack(p1, p2)).toBe(p2);
        expect(Pokemon.whoAttack(p2, p1)).toBe(p2);
    });
});
