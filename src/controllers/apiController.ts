import { Request, Response } from 'express';
import { CounterService } from '../services/CounterService';
import { ForecastService } from '../services/ForecastService';

export const helloWord = (req: Request, res: Response) => {
    res.json({
        message: 'Hello World',
    });
};

export const getWeather = async (req: Request, res: Response) => {
    const location = {
        lat: req.query.lat,
        lon: req.query.lon,
    };

    let report;

    try {
        report = await ForecastService.getWeather(location);

        if (report !== undefined) {
            res.json(report);
        } else {
            res.status(400).json({
                error: 'undefined',
            });
        }
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
};

export const getCounter = async (req: Request, res: Response) => {
    let counter;

    try {
        counter = await CounterService.getCounter();

        res.json({
            counter,
        });
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
};

export const increaseCounter = async (req: Request, res: Response) => {
    let counter;

    try {
        counter = await CounterService.incrementsCounter();

        res.json({
            counter,
        });
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
};
