import { useState, ChangeEvent } from 'react';
import { REACT_APP_API_KEY } from '../../secret.json';
import { OptionType, ForecastType } from '../types/index';

const useFetchData = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<OptionType | null>(null);
    const [forecast, setForecast] = useState<ForecastType | null>(null);
    const [toggleBtn, setToggleBtn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchInput = e.target.value;
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

    const toggleSearchBtn = () => {
        setToggleBtn(!toggleBtn);
    };

    const onSubmit = () => {
        if (!city) return;
        getForecast(city);
        toggleSearchBtn();
    };

    const getForecast = async (city: OptionType) => {
        const { lat, lon } = city;
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${REACT_APP_API_KEY}`
            );
            if (!response.ok) {
                console.error(`Error the fetch data is not OK`);
            }
            const data = await response.json();
            setUserInput('');
            const forecastData = {
                ...data.city,
                list: data.list.slice(0, 16),
            };
            console.log('forecast', forecastData);
            setForecast(forecastData);
            setIsLoading(false);
        } catch (error) {
            console.log(`Error happened by fetching data: ${error}`);
        }
    };

    const onOptionSelect = (option: OptionType) => {
        setCity(option);
        setUserInput(`${option.name}, ${option.country}`);
        setOptions([]);
    };
    return {
        userInput,
        inputChange,
        options,
        onOptionSelect,
        onSubmit,
        forecast,
        toggleBtn,
        toggleSearchBtn,
        isLoading,
    };
};
export default useFetchData;
