import { RedisService } from './RedisService';

export class CounterService {

    public static getCounter() {
        return RedisService.get('counter');
    }

    public static incrementsCounter() {
        return RedisService.increment('counter');
    }
}
