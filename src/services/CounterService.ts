
export class CounterService {

    public static counter: number = 0;

    public static getCounter() {
        return CounterService.counter;
    }

    public static incrementsCounter() {
        return ++CounterService.counter;
    }
}
