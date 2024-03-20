import { ForecastType } from '../types';
import Temperature from './Temperature';

type Props = {
    forecast: ForecastType | null;
};

const Forecast: React.FC<Props> = ({ forecast }): JSX.Element => {
    if (!forecast) {
        return <div>Loading...</div>;
    }

    const today = forecast.list[0];
    const tempNow = today.main.temp;
    const tempMax = today.main.temp_max;
    const tempMin = today.main.temp_min;
    const description = today.weather[0].description;

    console.log('forecast', forecast);
    return (
        <section className='w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24  h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <div className='mx-auto w-[300px]'>
                <div className='text-center'>
                    <h1 className='text-3xl font-black'>
                        {forecast.name}{' '}
                        <span className='font-thin'>{forecast?.country}</span>
                    </h1>
                    <h2 className='text-4xl font-extrabold'>
                        <Temperature temp={tempNow} />
                    </h2>
                    <p className='text-sm'>{description}</p>
                    <p className='text-sm'>
                        H: <Temperature temp={tempMax} />
                        L: <Temperature temp={tempMin} />
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Forecast;
