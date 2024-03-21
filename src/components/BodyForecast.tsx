import InfoSuntime from './InfoSuntime';
import WeatherInfo from './WeatherInfo';
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

type Props = {
    forecast: ForecastType;
};

const BodyForecast: React.FC<Props> = ({ forecast }): JSX.Element => {
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
    );
};
export default BodyForecast;
