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
        <div className='flex overflow-x-auto mt-4 pb-2 mb-5 bg-white/40 backdrop-blur-lg rounded drop-shadow-lg mx-5'>
            {forecast.list.map((item, index) => (
                <div
                    key={id + index}
                    className='text-center flex-shrink-0 mr-2'
                    style={{ minWidth: '50px' }}
                >
                    <p className='text-xs md:text-sm'>
                        {index === 0
                            ? 'Now'
                            : `${getHours(item.dt)
                                  .toString()
                                  .padStart(2, '0')}hs`}
                    </p>
                    <img
                        className='mx-auto h-20'
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt={description}
                    />
                    <p className='text-xs md:text-sm font-bold'>
                        <Temperature temp={item.main.temp} />
                    </p>
                </div>
            ))}
        </div>
    );
};
export default ImagesForecast;
