import HeaderForecast from './HeaderForecast';
import ImagesForecast from './ImagesForecast';
import InfoSuntime from './InfoSuntime';
import WeatherInfo from './WeatherInfo';
import { ForecastType } from '../types';
import { findIcon, getWindDirection } from '../utils/helpers';

type Props = {
    forecast: ForecastType | null;
};

const Forecast: React.FC<Props> = ({ forecast }): JSX.Element => {
    if (!forecast) {
        return <div>Loading...</div>;
    }

    const today = forecast.list[0];

    const wind = {
        description: `${getWindDirection(
            Math.round(today.wind.deg)
        )}, gusts: ${today.wind.gust.toFixed(1)} km/h`,
        info: `${Math.round(today.wind.speed)} km/h`,
    };

    return (
        <section className='w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24  h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <HeaderForecast forecast={forecast} />
            <ImagesForecast forecast={forecast} />
            <div className='flex justify-between flex-wrap text-zinc-700'>
                <InfoSuntime
                    title={findIcon('sunrise')}
                    value={forecast.sunrise}
                />
                <InfoSuntime
                    title={findIcon('sunset')}
                    value={forecast.sunset}
                />
                <WeatherInfo
                    icon={findIcon('wind')}
                    title='wind'
                    info={wind.info}
                    description={wind.description}
                />
            </div>
        </section>
    );
};
export default Forecast;
