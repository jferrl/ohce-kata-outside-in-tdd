import { Greeter } from './greeter';
import { Informer } from './informer';

export class Ohce {
    constructor(private readonly greeter: Greeter, private readonly informer: Informer) {}

    run(username: string): void {
        const greeting = this.greeter.greet(username);
        this.informer.greetUser(greeting);
    }
}
