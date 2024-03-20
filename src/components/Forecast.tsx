import { ForecastType } from '../types';
import HeaderForecast from './HeaderForecast';
import ImagesForecast from './ImagesForecast';

type Props = {
    forecast: ForecastType | null;
};

const Forecast: React.FC<Props> = ({ forecast }): JSX.Element => {
    if (!forecast) {
        return <div>Loading...</div>;
    }

    const getSunTime = (time: number): string => {
        const date = new Date(time * 1000);
        const hours = date.getHours().toString();
        const minutes = date.getMinutes().toString();

        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    };

    return (
        <section className='w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24  h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <HeaderForecast forecast={forecast} />
            <ImagesForecast forecast={forecast} />
            <div className='flex justify-between text-zinc-700'>
                <div className='w-[150px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
                    <p>Sunrise</p>
                    <span>{getSunTime(forecast.sunrise)}</span>
                </div>
                <div className='w-[150px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
                    <p>Sunset</p>
                    <span>{getSunTime(forecast.sunset)}</span>
                </div>
            </div>
        </section>
    );
};
export default Forecast;
