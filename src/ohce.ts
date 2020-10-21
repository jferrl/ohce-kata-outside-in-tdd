import { Greeter } from './greeter';
import { Informer } from './informer';

export class Ohce {
    constructor(private readonly greeter: Greeter, private readonly informer: Informer, readonly username: string = '') {}

    run(username: string): void {
        this.greet(username);
        this.goodbye(username);
    }

    private greet(username: string): void {
        const greeting = this.greeter.greet(username);
        this.informer.greetUser(greeting);
    }

    private goodbye(username: string): void {
        this.informer.goodbye(username);
    }
}
