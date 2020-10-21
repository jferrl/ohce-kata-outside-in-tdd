import { Greeter } from './greeter';
import { Informer } from './informer';

export class Ohce {
    constructor(private readonly greeter: Greeter, private readonly informer: Informer, readonly username: string = '') {}

    run(): void {
        this.greet();
        this.goodbye();
    }

    private greet(): void {
        const greeting = this.greeter.greet(this.username);
        this.informer.greetUser(greeting);
    }

    private goodbye(): void {
        this.informer.goodbye(this.username);
    }
}
