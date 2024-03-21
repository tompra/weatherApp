import { icons } from '../utils/icons';

export const findIcon = (name: string) => {
    const foundIcon = icons.find((icon) => icon.name === name);
    return foundIcon ? foundIcon.icon : null;
};

export const getWindDirection = (deg: number): string => {
    switch (true) {
        case deg === 0 || deg === 360:
            return 'N';
        case deg > 1 && deg <= 75:
            return 'NE';
        case deg > 76 && deg <= 150:
            return 'E';
        case deg > 105 && deg <= 165:
            return 'SE';
        case deg > 166 && deg <= 195:
            return 'S';
        case deg > 196 && deg <= 255:
            return 'SW';
        case deg > 255 && deg <= 285:
            return 'W';
        case deg > 285 && deg < 359:
            return 'NW';
        default:
            return 'Something went wrong';
    }
};

export const doesItFeelColder = (temp: number, feels: number): string =>
    Math.round(feels) < Math.round(temp) ? 'colder' : 'warmer';

export const getPrecipitation = (value: number): string => {
    switch (true) {
        case value <= 0.33:
            return 'Low Probability';
        case value > 0.33 && value <= 0.66:
            return 'Moderate Probability';
        case value > 0.67:
            return 'High Probability';
        default:
            return 'Something went wrong';
    }
};

export const getHumidityValues = (humidityLvl: number): string => {
    switch (true) {
        case humidityLvl <= 55:
            return 'Dry';
        case humidityLvl > 55 && humidityLvl <= 65:
            return 'Moisture is in the air';
        case humidityLvl > 65:
            return `It's pretty humid`;
        default:
            return 'Something went wrong';
    }
};

export const getPressureDescription = (pressureVal: number): string => {
    switch (true) {
        case pressureVal < 980:
            return 'Very Low Pressure';
        case pressureVal >= 980 && pressureVal < 1000:
            return 'Low Pressure';
        case pressureVal >= 1000 && pressureVal < 1020:
            return 'Moderate Pressure';
        case pressureVal >= 1020 && pressureVal < 1040:
            return 'High Pressure';
        case pressureVal >= 1040:
            return 'Very High Pressure';
        default:
            return 'Something went wrong';
    }
};
