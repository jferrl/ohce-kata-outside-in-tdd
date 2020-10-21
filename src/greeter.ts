import { IClock } from './clock';

enum TimeThreshols {
    Morning = 6,
    Afternoon = 12,
    Evening = 20
}

export interface IGreeter {
    greet(username: string): string;
}

export class Greeter implements IGreeter {
    constructor(private readonly clock: IClock) {}

    greet(username: string): string {
        const hour = this.clock.hour();
        if (this.isMorningTime(hour)) {
            return `¡Buenos días ${username}!`;
        }
        if (this.isAfternoonTime(hour)) {
            return `¡Buenas tardes ${username}!`;
        }
        if (this.isEveningTime(hour)) {
            return `¡Buenas noches ${username}!`;
        }
        return '';
    }

    private isMorningTime(time: number): boolean {
        return time >= TimeThreshols.Morning && time < TimeThreshols.Afternoon;
    }

    private isAfternoonTime(time: number): boolean {
        return time >= TimeThreshols.Afternoon && time < TimeThreshols.Evening;
    }

    private isEveningTime(time: number): boolean {
        return time >= TimeThreshols.Evening || time < TimeThreshols.Morning;
    }
}
