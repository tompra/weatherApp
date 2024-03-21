import { icons } from '../utils/icons';

export const findIcon = (name: string) => {
    const foundIcon = icons.find((icon) => icon.name === name);
    return foundIcon ? foundIcon.icon : null;
};
