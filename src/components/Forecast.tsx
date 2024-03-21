import HeaderForecast from './HeaderForecast';
import ImagesForecast from './ImagesForecast';
import VideoBackground from './VideoBackground';
import BodyForecast from './BodyForecast';
import ReturnBtn from './ReturnBtn';
import { ForecastType } from '../types';

type Props = {
    forecast: ForecastType | null;
    toggleSearchBtn: () => void;
};

const Forecast: React.FC<Props> = ({
    forecast,
    toggleSearchBtn,
}): JSX.Element => {
    const today = forecast.list[0];

    if (!forecast) {
        return <div>Loading...</div>;
    }

    return (
        <section className='relative w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 lg:max-w-[800px] xl:max-w-[1000px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <VideoBackground video={today.weather[0].main} />
            <HeaderForecast forecast={forecast} />
            <ImagesForecast forecast={forecast} />
            <BodyForecast forecast={forecast} />
            <ReturnBtn toggleSearchBtn={toggleSearchBtn} />
        </section>
    );
};
export default Forecast;
