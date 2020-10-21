import { Ohce } from '../src/ohce';

describe('Ohce', (): void => {
    const user = 'Pepe';

    it('should greet the user with good morning', (): void => {
        const greeting = '¡Buenos días Pepe!';
        const sut = new Ohce();

        expect(sut.start()).toBe(greeting);
    });

    it('should greet the user with good afternoon', (): void => {
        const greeting = '¡Buenos tardes Pepe!';
        const sut = new Ohce();

        expect(sut.start()).toBe(greeting);
    });

    it('should greet the user with good evening', (): void => {
        const greeting = '¡Buenos noches Pepe!';
        const sut = new Ohce();

        expect(sut.start()).toBe(greeting);
    });
});

// Card: Role - Responsabilities, Colaborators
// Orchestrate
// 1. Greeting (we need the hour)
// 2. obtain the word
// 3. Send reverse output (algo que haga el reverse)
// 4. Say goodbye
