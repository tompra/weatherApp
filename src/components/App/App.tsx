import useFetchData from '../../hooks/useFetchData';
import Forecast from '../Forecast';
import Home from '../Home/Home';

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
        isLoading,
    } = useFetchData();

    return (
        <main className='flex justify-center items-center bg-sky-500 min-h-[100vh]'>
            <section className='bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded flex flex-col text-center items-center py-6 justify-center md:px-10 w-full max-w-[800px]'>
                {toggleBtn ? (
                    <Forecast
                        forecast={forecast}
                        toggleSearchBtn={toggleSearchBtn}
                        isLoading={isLoading}
                    />
                ) : (
                    <Home
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
