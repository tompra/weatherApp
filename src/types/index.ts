import { ChangeEvent } from 'react';

export type OptionType = {
    name: string;
    country: string;
    lat: number;
    lon: number;
};

export interface ForecastType {
    id: number;
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
    list: ForecastDay[];
}

export interface ForecastDay {
    dt: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    clouds: {
        all: number;
    };
    visibility: number;
    pop: number;
}

export type InitialSearch = {
    userInput: string;
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    options: OptionType[];
    onSubmit: () => void;
    onOptionSelect: (option: OptionType) => void;
};
