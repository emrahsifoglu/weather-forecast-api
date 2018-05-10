import * as Redis from 'ioredis';

const redis = new Redis();

export class RedisService {

    public static async get(key) {
        try {
            return await redis.get(key);
        } catch (error) {
            return error;
        }
    }

    public static async increment(key) {
        try {
            return await redis.incr(key);
        } catch (error) {
            return error;
        }
    }
}
