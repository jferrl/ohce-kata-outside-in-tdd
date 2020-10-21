import { mock, mockReset } from 'jest-mock-extended';

import { IClock } from '../src/clock';
import { Greeter } from '../src/greeter';
import { Informer } from '../src/informer';
import { Ohce } from '../src/ohce';

// tslint:disable: no-unbound-method

describe('Ohce', (): void => {
    const user = 'Pepe';
    const informerMock = mock<Informer>();
    const clockMock = mock<IClock>();

    beforeEach((): void => {
        mockReset(informerMock);
        mockReset(clockMock);
    });

    it('should greet the user and say good bye', (): void => {
        const greeting = '¡Buenos días Pepe!';

        clockMock.hour.mockReturnValue(7);

        const greeter = new Greeter(clockMock);

        const sut = new Ohce(greeter, informerMock, user);
        sut.run();
        expect(informerMock.greetUser).toHaveBeenCalledWith(greeting);
        expect(informerMock.goodbye).toHaveBeenCalledWith(user);
    });

    it('should greet the user with good afternoon and say good bye', (): void => {
        const greeting = '¡Buenas tardes Pepe!';

        clockMock.hour.mockReturnValue(17);

        const greeter = new Greeter(clockMock);

        const sut = new Ohce(greeter, informerMock, user);
        sut.run();
        expect(clockMock.hour).toHaveBeenCalled();
        expect(informerMock.greetUser).toHaveBeenCalledWith(greeting);
        expect(informerMock.goodbye).toHaveBeenCalledWith(user);
    });

    it('should greet the user with good evening and say good bye', (): void => {
        const greeting = '¡Buenas noches Pepe!';

        clockMock.hour.mockReturnValue(21);

        const greeter = new Greeter(clockMock);

        const sut = new Ohce(greeter, informerMock, user);
        sut.run();
        expect(clockMock.hour).toHaveBeenCalled();
        expect(informerMock.greetUser).toHaveBeenCalledWith(greeting);
        expect(informerMock.goodbye).toHaveBeenCalledWith(user);
    });
});

// Card: Role - Responsabilities, Colaborators
// Orchestrate
// 1. Greeting (we need the hour)
// 2. obtain the word
// 3. Send reverse output (algo que haga el reverse)
// 4. Say goodbye
