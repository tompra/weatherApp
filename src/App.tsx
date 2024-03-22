import useFetchData from './hooks/useFetchData';
import Forecast from './components/Forecast';
import Initial from './components/Initial';

const App: React.FC = (): JSX.Element => {
    const {
        forecast,
        toggleBtn,
        toggleSearchBtn,
        userInput,
        inputChange,
        options,
        onOptionSelect,
        onSubmit,
    } = useFetchData();

    return (
        <main className='flex justify-center items-center bg-sky-500 min-h-[100vh]'>
            <section className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded flex flex-col text-center items-center py-6 justify-center md:px-10 w-full max-w-[800px]'>
                {toggleBtn ? (
                    <Forecast
                        forecast={forecast}
                        toggleSearchBtn={toggleSearchBtn}
                    />
                ) : (
                    <Initial
                        userInput={userInput}
                        inputChange={inputChange}
                        options={options}
                        onOptionSelect={onOptionSelect}
                        onSubmit={onSubmit}
                    />
                )}
            </section>
        </main>
    );
};
export default App;
