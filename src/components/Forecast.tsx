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

    return (
        <section className='w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24  h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg'>
            <HeaderForecast forecast={forecast} />
            <ImagesForecast forecast={forecast} />
        </section>
    );
};
export default Forecast;
