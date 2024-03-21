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
            return '';
    }
};
