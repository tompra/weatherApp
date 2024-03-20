import { useState, ChangeEvent } from 'react';
import { REACT_APP_API_KEY } from '../secret.json';
import { OptionType } from './types';

const App: React.FC = (): JSX.Element => {
    const [userInput, setUserInput] = useState<string>('');
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<OptionType | null>(null);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchInput = e.target.value.trim();
        if (searchInput === '') return;
        setUserInput(searchInput);
        getSearch(searchInput);
    };

    const getSearch = async (value: string) => {
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${REACT_APP_API_KEY}`
            );
            if (!response.ok) {
                console.error(`Error the fetch data is not OK`);
            }
            const data = await response.json();
            setOptions(data);
        } catch (error) {
            console.log(`Error happened by fetching data: ${error}`);
        }
    };

    const onOptionSelect = async (option: OptionType) => {
        setCity(option);
        setOptions([]);
    };

    return (
        <main className='flex justify-center items-center bg-sky-500 h-[100vh]'>
            <section className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded w-full md:max-w-[500px] flex flex-col text-center items-center p-4 justify-center md:px-10 lg:p-24 h-full lg:h-[500px]'>
                <h1 className='text-4xl font-light'>
                    Weather <span className='font-bold'>Forecast</span>
                </h1>
                <p className='mt-2 text-sm'>
                    Enter a place you want to know the weather and select an
                    option
                </p>
                <div className='flex mt-10 md:mt-4 relative'>
                    <input
                        type='text'
                        value={userInput}
                        onChange={inputChange}
                        className='px-2 py-2 border-2 border-white rounded-l-md '
                    />
                    <ul className='absolute top-11 bg-white ml-1 rounded-b-md'>
                        {options.map((option: OptionType, index) => {
                            const { name, country } = option;
                            return (
                                <li key={`${name}-${index}`}>
                                    <button
                                        className='text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer'
                                        onClick={() => onOptionSelect(option)}
                                    >
                                        {name}, {country}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <button className='rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer capitalize'>
                        search
                    </button>
                </div>
            </section>
        </main>
    );
};
export default App;
