import HeaderForecast from './HeaderForecast';
import ImagesForecast from './ImagesForecast';
import InfoSuntime from './InfoSuntime';
import WeatherInfo from './WeatherInfo';
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
import Temperature from './Temperature';
import ReturnBtn from './ReturnBtn';

type Props = {
    forecast: ForecastType | null;
    toggleSearchBtn: () => void;
};

const Forecast: React.FC<Props> = ({
    forecast,
    toggleSearchBtn,
}): JSX.Element => {
    if (!forecast) {
        return <div>Loading...</div>;
    }

    const today = forecast.list[0];

    const weatherInfo = [
        {
            icon: findIcon('wind'),
            title: 'wind',
            description: `${getWindDirection(
                Math.round(today.wind.deg)
            )}, Gusts: ${today.wind.gust.toFixed(1)} km/h`,
            info: `${Math.round(today.wind.speed)} km/h`,
        },
        {
            icon: findIcon('real feel'),
            title: 'real feel',
            description: `Feels ${doesItFeelColder(
                today.main.temp,
                today.main.feels_like
            )}`,
            info: <Temperature temp={Math.round(today.main.feels_like)} />,
        },
        {
            icon: findIcon('precipitation'),
            title: 'precipitation',
            description: `${getPrecipitation(today.pop)}`,
            info: `${today.pop}%`,
        },
        {
            icon: findIcon('humidity'),
            title: 'humidity',
            description: `${getHumidityValues(today.main.humidity)}`,
            info: `${today.main.humidity}%`,
        },
        {
            icon: findIcon('pressure'),
            title: 'pressure',
            description: `${getPressureDescription(today.main.pressure)}`,
            info: `${today.main.pressure} hPa`,
        },
        {
            icon: findIcon('visibility'),
            title: 'visibility',
            description: getVisibilityValue(today.visibility),
            info: `${Math.round(today.visibility / 1000).toFixed()} km`,
        },
    ];

    return (
        <section className='relative w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 lg:max-w-[800px] xl:max-w-[1000px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <VideoBackground video={today.weather[0].main} />
            <HeaderForecast forecast={forecast} />
            <ImagesForecast forecast={forecast} />
            <div className='flex flex-wrap justify-center flex-1 gap-x-2 text-gray-800'>
                <InfoSuntime
                    icon={findIcon('sunrise')}
                    value={forecast.sunrise}
                    title={'sunrise'}
                />

                <InfoSuntime
                    icon={findIcon('sunset')}
                    value={forecast.sunset}
                    title={'sunset'}
                />
                {weatherInfo.map((item, index) => {
                    const { icon, title, info, description } = item;
                    return (
                        <WeatherInfo
                            key={`${title}-${index}`}
                            icon={icon}
                            info={info}
                            description={description}
                            title={title}
                        />
                    );
                })}
            </div>
            <ReturnBtn toggleSearchBtn={toggleSearchBtn} />
        </section>
    );
};
export default Forecast;
