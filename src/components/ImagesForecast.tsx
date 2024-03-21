import Temperature from './Temperature';
import { ForecastType } from '../types';

type Props = {
    forecast: ForecastType | null;
};

const ImagesForecast: React.FC<Props> = ({ forecast }): JSX.Element => {
    const id = forecast.id;
    const today = forecast.list[0];
    const description = today.weather[0].description;

    const getHours = (item: number): number => new Date(item * 1000).getHours();
    return (
        <div className='flex overflow-x-scroll mt-4 pb-2 mb-5'>
            {forecast.list.map((item, index) => (
                <div
                    key={id + index}
                    className='inline-block text-center w-[50px] flex-shrink-0'
                >
                    <p className='text-sm'>
                        {index === 0
                            ? 'Now'
                            : `${getHours(item.dt)
                                  .toString()
                                  .padStart(2, '0')}hs`}
                    </p>
                    <img
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt={description}
                    />
                    <p className='text-sm font-bold'>
                        <Temperature temp={item.main.temp} />
                    </p>
                </div>
            ))}
        </div>
    );
};
export default ImagesForecast;
