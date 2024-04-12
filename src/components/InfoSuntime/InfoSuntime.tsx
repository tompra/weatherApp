import { getSunTime } from '../../utils/helpers';

type Props = {
    icon: React.ReactNode;
    value: number;
    title: string;
};

const InfoSuntime: React.FC<Props> = ({ icon, value, title }): JSX.Element => {
    return (
        <div
            className='w-full md:w-[45%] h-[120px] text-xs md:text-sm font-bold flex flex-col justify-center items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-2 hover:bg-white/40 hover:backdrop-blur-lg hover:drop-shadow-lg hover:rounded'
            data-testid='info-suntime'
        >
            {icon}
            <span>{getSunTime(value)}</span>
            <p className='capitalize mt-1'>{title}</p>
        </div>
    );
};
export default InfoSuntime;
