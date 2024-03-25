import { render, screen } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import Forecast from './Forecast';
import { mockForecastData } from '../../test/mockForecastData';

describe('Testing forecast component', () => {
    test('forecast component initially render', () => {
        const wrapper = render(
            <Forecast
                forecast={mockForecastData}
                toggleSearchBtn={vi.fn()}
                isLoading={false}
            />
        );
        expect(wrapper).toBeTruthy();
        const forecastComponent = screen.getByTestId('forecast-component');
        expect(forecastComponent).toBeInTheDocument();
    });
    test('forecast component when forecast data is not fetched loading heading', () => {
        const wrapper = render(
            <Forecast
                forecast={mockForecastData}
                toggleSearchBtn={vi.fn()}
                isLoading={true}
            />
        );
        expect(wrapper.container.textContent).toEqual('Loading...');
    });
});
