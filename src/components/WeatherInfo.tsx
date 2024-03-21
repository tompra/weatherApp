type Props = {
    icon: React.ReactNode;
    title: string;
    info: string | JSX.Element;
    description: string;
};

const WeatherInfo: React.FC<Props> = ({
    icon,
    title,
    info,
    description,
}): JSX.Element => {
    return (
        <div className='w-full md:w-[45%] h-[120px] text-xs md:text-sm font-bold flex flex-col justify-center items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-2 hover:bg-white/40 hover:backdrop-blur-lg hover:drop-shadow-lg hover:rounded'>
            <div className='flex text-sm font-bold'>
                <p>{icon}</p> <h4 className='ml-1 capitalize'>{title}</h4>
            </div>
            <div className='flex text-sm font-bold'>
                <h3 className='mt-2 text-lg'>{info}</h3>
            </div>
            <div className='flex text-sm font-bold mt-2'>
                <p className='text-xs font-bold'>{description}</p>
            </div>
        </div>
    );
};
export default WeatherInfo;
