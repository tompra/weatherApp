import Search from './Search';
import { InitialSearch } from '../types';

const Initial: React.FC<InitialSearch> = ({
    userInput,
    inputChange,
    options,
    onOptionSelect,
    onSubmit,
}): JSX.Element => {
    return (
        <>
            <h1 className='text-4xl font-light'>
                Weather <span className='font-bold'>Forecast</span>
            </h1>
            <p className='mt-2 text-sm sm:max-w-sm'>
                Enter a place you want to know the weather and select an option
            </p>
            <Search
                userInput={userInput}
                inputChange={inputChange}
                options={options}
                onOptionSelect={onOptionSelect}
                onSubmit={onSubmit}
            />
        </>
    );
};
export default Initial;
