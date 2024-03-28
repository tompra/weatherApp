import HeaderForecast from '../HeaderForecast/HeaderForecast';
import ImagesForecast from '../ImagesForecast';
import VideoBackground from '../VideoBackground/VideoBackground';
import BodyForecast from '../BodyForecast/BodyForecast';
import ReturnBtn from '../ReturnBtn';
import { ForecastType } from '../../types';

type Props = {
    forecast: ForecastType | null;
    toggleSearchBtn: () => void;
    isLoading: boolean;
};

const Forecast: React.FC<Props> = ({
    forecast,
    toggleSearchBtn,
    isLoading,
}): JSX.Element => {
    if (isLoading) {
        return <h1 className='font-bold text-3xl'>Loading...</h1>;
    }
    const today = forecast.list[0];

    return (
        <section
            className='relative w-full md:max-w-[500px] py-6 md:py-4 md:px-10 lg:px-24 lg:py-4 lg:max-w-[800px] xl:max-w-[1000px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'
            data-testid='forecast-component'
        >
            <VideoBackground video={today.weather[0].main} />
            <HeaderForecast forecast={forecast} />
            <ImagesForecast forecast={forecast} />
            <BodyForecast forecast={forecast} />
            <ReturnBtn toggleSearchBtn={toggleSearchBtn} />
        </section>
    );
};
export default Forecast;
