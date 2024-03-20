type Props = {
    title: React.ReactNode;
    value: number;
};

const getSunTime = (time: number): string => {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();

    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};

const InfoSuntime: React.FC<Props> = ({ title, value }) => {
    return (
        <div className='w-[150px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5'>
            {title}
            <span>{getSunTime(value)}</span>
        </div>
    );
};
export default InfoSuntime;
