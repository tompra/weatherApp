import Temperature from '../Temperature/Temperature';
import { ForecastType } from '../../types';

type Props = {
    forecast: ForecastType | null;
};

const HeaderForecast: React.FC<Props> = ({ forecast }): JSX.Element => {
    const { name, country } = forecast;
    const today = forecast.list[0];
    const tempNow = today.main.temp;
    const tempMax = today.main.temp_max;
    const tempMin = today.main.temp_min;
    const description = today.weather[0].description;

    return (
        <div
            className='mx-auto w-full md:w-[300px]'
            data-testid='header-component'
        >
            <div className='text-center'>
                <h1 className='text-3xl  font-black'>
                    {name} <span className='font-thin'>{country}</span>
                </h1>
                <h2 className='text-4xl  font-extrabold'>
                    <Temperature temp={tempNow} />
                </h2>
                <p className='text-base md:text-lg capitalize'>{description}</p>
                <div className='flex justify-center gap-x-3'>
                    <p className='text-base md:text-lg'>
                        H: <Temperature temp={tempMax} />
                    </p>
                    <p className='text-base md:text-lg'>
                        L: <Temperature temp={tempMin} />
                    </p>
                </div>
            </div>
        </div>
    );
};
export default HeaderForecast;
