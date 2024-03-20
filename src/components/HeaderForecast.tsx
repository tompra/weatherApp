import Temperature from './Temperature';
import { ForecastType } from '../types';

type Props = {
    forecast: ForecastType | null;
};

const HeaderForecast: React.FC<Props> = ({ forecast }) => {
    const { name, country } = forecast;
    const today = forecast.list[0];
    const tempNow = today.main.temp;
    const tempMax = today.main.temp_max;
    const tempMin = today.main.temp_min;
    const description = today.weather[0].description;

    return (
        <div className='mx-auto w-[300px]'>
            <div className='text-center'>
                <h1 className='text-3xl font-black'>
                    {name} <span className='font-thin'>{country}</span>
                </h1>
                <h2 className='text-4xl font-extrabold'>
                    <Temperature temp={tempNow} />
                </h2>
                <p className='text-sm capitalize'>{description}</p>
                <p className='text-sm'>
                    H: <Temperature temp={tempMax} />
                    L: <Temperature temp={tempMin} />
                </p>
            </div>
        </div>
    );
};
export default HeaderForecast;
