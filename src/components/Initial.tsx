import useFetchData from '../hooks/useFetchData';
import Search from './Search';

const Initial: React.FC = (): JSX.Element => {
    const { userInput, inputChange, options, onOptionSelect, onSubmit } =
        useFetchData();

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
