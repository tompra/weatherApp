import useFetchData from './hooks/useFetchData';
import Search from './components/Search';
import Forecast from './components/Forecast';
import ReturnBtn from './components/ReturnBtn';

const App: React.FC = (): JSX.Element => {
    const {
        userInput,
        inputChange,
        options,
        onOptionSelect,
        onSubmit,
        forecast,
        toggleBtn,
        toggleSearchBtn,
    } = useFetchData();

    return (
        <main className='flex justify-center items-center bg-sky-500 min-h-screen'>
            <section className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded flex flex-col text-center items-center py-4 justify-center md:px-10 w-full max-w-[800px]'>
                {toggleBtn ? (
                    <>
                        <Forecast forecast={forecast} />
                        <ReturnBtn toggleSearchBtn={toggleSearchBtn} />
                    </>
                ) : (
                    <>
                        <h1 className='text-4xl font-light'>
                            Weather <span className='font-bold'>Forecast</span>
                        </h1>
                        <p className='mt-2 text-sm sm:max-w-sm'>
                            Enter a place you want to know the weather and
                            select an option
                        </p>
                        <Search
                            userInput={userInput}
                            inputChange={inputChange}
                            options={options}
                            onOptionSelect={onOptionSelect}
                            onSubmit={onSubmit}
                        />
                    </>
                )}
            </section>
        </main>
    );
};
export default App;
