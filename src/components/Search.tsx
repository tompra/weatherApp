import { ChangeEvent } from 'react';
import { OptionType } from '../types/index';

type Props = {
    userInput: string;
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    options: [];
    onSubmit: () => void;
    onOptionSelect: (option: OptionType) => void;
};

const Search: React.FC<Props> = ({
    userInput,
    inputChange,
    options,
    onOptionSelect,
    onSubmit,
}): JSX.Element => {
    return (
        <div className='relative mt-6'>
            <input
                type='text'
                value={userInput}
                onChange={inputChange}
                className='px-2 py-2 border-2 border-white rounded-l-md sm:w-48 md:w-56 lg:w-64 xl:w-72 h-9'
            />
            <ul className='absolute top-full bg-white ml-1 rounded-b-md w-[80%]'>
                {options.map((option: OptionType, index: number) => {
                    const { name, country } = option;
                    return (
                        <li key={`${name}-${index}`}>
                            <button
                                className='text-left text-sm w-full hover:bg-sky-700 hover:text-white px-2 py-1 cursor-pointer'
                                onClick={() => onOptionSelect(option)}
                            >
                                {name}, {country}
                            </button>
                        </li>
                    );
                })}
            </ul>

            <button
                className='rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer capitalize'
                onClick={onSubmit}
            >
                search
            </button>
        </div>
    );
};
export default Search;
