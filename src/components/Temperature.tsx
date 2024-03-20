import { TemperatureType } from '../types';

type Props = {
    today: TemperatureType;
};

const Temperature: React.FC<Props> = ({ today }) => {
    return (
        <h2 className='text-4xl font-extrabold'>
            <span>
                {Math.round(today.main.temp)}
                <sup>o</sup>
            </span>
        </h2>
    );
};
export default Temperature;
