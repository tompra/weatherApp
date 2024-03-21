import HeaderForecast from './HeaderForecast';
import ImagesForecast from './ImagesForecast';
import InfoSuntime from './InfoSuntime';
import WeatherInfo from './WeatherInfo';
import Temperature from './Temperature';
import VideoBackground from './VideoBackground';
import { ForecastType } from '../types';
import {
    findIcon,
    getWindDirection,
    doesItFeelColder,
    getPrecipitation,
    getHumidityValues,
    getPressureDescription,
    getVisibilityValue,
} from '../utils/helpers';

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
        )}, Gusts: ${today.wind.gust.toFixed(1)} km/h`,
        info: `${Math.round(today.wind.speed)} km/h`,
    };

    const realFeel = {
        description: `Feels ${doesItFeelColder(
            today.main.temp,
            today.main.feels_like
        )}`,
        info: <Temperature temp={Math.round(today.main.feels_like)} />,
    };

    const precipitation = {
        description: `${getPrecipitation(today.pop)}, Clouds at ${
            today.clouds.all
        }`,
        info: `${Math.round(today.pop * 100)}%`,
    };

    const humidity = {
        description: `${getHumidityValues(today.main.humidity)}`,
        info: `${today.main.humidity}%`,
    };

    const pressure = {
        description: `${getPressureDescription(today.main.pressure)}`,
        info: `${today.main.pressure} hPa`,
    };

    const visibility = {
        description: getVisibilityValue(today.visibility),
        info: `${Math.round(today.visibility / 1000).toFixed()} km`,
    };

    return (
        <section className='relative w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24  h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <VideoBackground video={today.weather[0].main} />
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
                <WeatherInfo
                    icon={findIcon('real feel')}
                    title='real feel'
                    info={realFeel.info}
                    description={realFeel.description}
                />
                <WeatherInfo
                    icon={findIcon('precipitation')}
                    title='precipitation'
                    info={precipitation.info}
                    description={precipitation.description}
                />
                <WeatherInfo
                    icon={findIcon('humidity')}
                    title='humidity'
                    info={humidity.info}
                    description={humidity.description}
                />
                <WeatherInfo
                    icon={findIcon('pressure')}
                    title='pressure'
                    info={pressure.info}
                    description={pressure.description}
                />
                <WeatherInfo
                    icon={findIcon('visibility')}
                    title='visibility'
                    info={visibility.info}
                    description={visibility.description}
                />
            </div>
        </section>
    );
};
export default Forecast;
