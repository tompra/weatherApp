import useFetchData from './hooks/useFetchData';
import Search from './components/Search';

const App: React.FC = (): JSX.Element => {
    const {
        userInput,
        inputChange,
        options,
        onOptionSelect,
        onSubmit,
        forecast,
    } = useFetchData();

    console.log('forecast', forecast);

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

                <Search
                    userInput={userInput}
                    inputChange={inputChange}
                    options={options}
                    onOptionSelect={onOptionSelect}
                    onSubmit={onSubmit}
                />
            </section>
        </main>
    );
};
export default App;
