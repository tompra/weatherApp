import { useState, ChangeEvent } from 'react';

const App = () => {
    const [userInput, setUserInput] = useState<string>('');

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchInput = e.target.value;
        if (searchInput === '') return;
        setUserInput(searchInput);
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

                    <button className='rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer capitalize'>
                        search
                    </button>
                </div>
            </section>
        </main>
    );
};
export default App;
