import { GiSunset, GiSunrise, GiWindsock } from 'react-icons/gi';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { WiHumidity } from 'react-icons/wi';
import { IoRainyOutline } from 'react-icons/io5';
import { BsSpeedometer2 } from 'react-icons/bs';
import { MdVisibility } from 'react-icons/md';

export const icons = [
    {
        id: Date.now(),
        name: 'sunset',
        icon: <GiSunset className='text-2xl' />,
    },
    {
        id: Date.now(),
        name: 'sunrise',
        icon: <GiSunrise className='text-2xl' />,
    },
    {
        id: Date.now(),
        name: 'real feel',
        icon: <FaTemperatureHalf className='text-2xl' />,
    },
    {
        id: Date.now(),
        name: 'humidity',
        icon: <WiHumidity className='text-2xl' />,
    },
    {
        id: Date.now(),
        name: 'precipitation',
        icon: <IoRainyOutline className='text-2xl' />,
    },
    {
        id: Date.now(),
        name: 'pressure',
        icon: <BsSpeedometer2 className='text-2xl' />,
    },
    {
        id: Date.now(),
        name: 'visibility',
        icon: <MdVisibility className='text-2xl' />,
    },
    {
        id: Date.now(),
        name: 'wind',
        icon: <GiWindsock className='text-2xl' />,
    },
];
