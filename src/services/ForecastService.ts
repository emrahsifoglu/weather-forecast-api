import * as YrNo from 'yr.no-forecast';

export class ForecastService {

    public static async getWeather(location) {
        const forecast = YrNo({
            request: {
                timeout: 15000,
            },
            version: '1.9',
        });

        const weather = await forecast.getWeather(location);
        const fiveDaySummary = await weather.getFiveDaySummary();
        const forecastForTime = await weather.getForecastForTime(new Date());

        return {
            fiveDaySummary,
            forecastForTime,
        };
    }
}
