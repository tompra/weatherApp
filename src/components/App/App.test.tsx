import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import App from './App';
import * as useFetchData from '../../hooks/useFetchData';
import { mockForecastData } from '../../test/mockForecastData';

const spyFetch = vi.spyOn(useFetchData, 'default');

describe('App component test', () => {
    test('initial render of the component', () => {
        const wrapper = render(<App />);
        expect(wrapper).toBeTruthy();
    });
    test('renders the Initial component as default value of button is false', () => {
        render(<App />);
        const homeComponent = screen.getByTestId('initial-component');
        expect(homeComponent).toBeTruthy();
    });
    test('renders the loading heading when the forecast is not fetch yet', () => {
        spyFetch.mockReturnValue({
            toggleBtn: true,
            forecast: null,
            toggleSearchBtn: vi.fn(),
            userInput: '',
            inputChange: vi.fn(),
            options: [],
            onOptionSelect: vi.fn(),
            onSubmit: vi.fn(),
            isLoading: true,
        });
        const wrapper = render(<App />);
        const loadingHeader = wrapper.container.querySelector('h1');
        expect(loadingHeader?.textContent).toBe('Loading...');
    });

    test('renders the Forecast component as button value is true', () => {
        spyFetch.mockReturnValue({
            toggleBtn: true,
            forecast: mockForecastData,
            toggleSearchBtn: vi.fn(),
            userInput: '',
            inputChange: vi.fn(),
            options: [],
            onOptionSelect: vi.fn(),
            onSubmit: vi.fn(),
            isLoading: false,
        });
        render(<App />);
        const forecastComponent = screen.getByTestId('forecast-component');
        expect(forecastComponent).toBeTruthy();
    });
});
