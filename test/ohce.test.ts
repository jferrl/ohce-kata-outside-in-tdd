import { mock, mockReset } from 'jest-mock-extended';

import { Greeter } from '../src/greeter';
import { Informer } from '../src/informer';
import { Ohce } from '../src/ohce';

// tslint:disable: no-unbound-method

describe('Ohce', (): void => {
    const user = 'Pepe';
    const greeter = mock<Greeter>();
    const informer = mock<Informer>();

    beforeEach((): void => {
        mockReset(greeter);
    });

    it('should greet the user with good morning', (): void => {
        const greeting = '¡Buenos días Pepe!';

        greeter.greet.calledWith(user).mockReturnValue(greeting);

        const sut = new Ohce(greeter, informer, user);
        sut.run(user);
        expect(greeter.greet).toHaveBeenCalledWith(user);
        expect(informer.greetUser).toHaveBeenCalledWith(greeting);
    });

    it('should say good bye', (): void => {
        const greeting = '¡Buenos días Pepe!';

        greeter.greet.calledWith(user).mockReturnValue(greeting);

        const sut = new Ohce(greeter, informer, user);
        sut.run(user);
        expect(greeter.greet).toHaveBeenCalledWith(user);
        expect(informer.greetUser).toHaveBeenCalledWith(greeting);
        expect(informer.goodbye).toHaveBeenCalledWith(user);
    });
});

// Card: Role - Responsabilities, Colaborators
// Orchestrate
// 1. Greeting (we need the hour)
// 2. obtain the word
// 3. Send reverse output (algo que haga el reverse)
// 4. Say goodbye
