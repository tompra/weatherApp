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
        <div className='w-[150px] h-[120px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
            <div className='flex text-sm font-bold'>
                <p>{icon}</p> <h4 className='ml-1 capitalize'>{title}</h4>
            </div>
            <h3 className='mt-2 text-lg'>{info}</h3>
            <p className='text-xs font-bold'>{description}</p>
        </div>
    );
};
export default WeatherInfo;
