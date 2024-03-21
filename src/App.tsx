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
            <section className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded w-full max-w-[500px] flex flex-col text-center items-center p-4 justify-center px-4 md:px-10 lg:px-24 h-full lg:h-[500px]'>
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
                        <p className='mt-2 text-sm'>
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
