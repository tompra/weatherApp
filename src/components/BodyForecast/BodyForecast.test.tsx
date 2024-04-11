import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import BodyForecast from './BodyForecast';
import { mockForecastData } from '../../test/mockForecastData';

describe('Test for body forecast component', () => {
    test('component render initially without errors', () => {
        render(<BodyForecast forecast={mockForecastData} />);
    });

    test('renders correctly with forecast data', () => {
        render(<BodyForecast forecast={mockForecastData} />);

        const infoSuntime = screen.getAllByTestId('info-suntime');

        infoSuntime.forEach((element) => {
            expect(element).toBeInTheDocument();
        });

        const weatherInfo = screen.getAllByTestId('weather-info');
        expect(weatherInfo).toHaveLength(6);

        weatherInfo.forEach((element) => {
            expect(element).toBeInTheDocument();
        });
    });

    test('displays correct weather information', () => {
        render(<BodyForecast forecast={mockForecastData} />);

        const wind = screen.getByText('wind');
        const realFeel = screen.getByText('real feel');
        const precipitation = screen.getByText('precipitation');
        const humidity = screen.getByText('humidity');
        const pressure = screen.getByText('pressure');
        const visibility = screen.getByText('visibility');

        expect(wind).toBeInTheDocument();
        expect(realFeel).toBeInTheDocument();
        expect(precipitation).toBeInTheDocument();
        expect(humidity).toBeInTheDocument();
        expect(pressure).toBeInTheDocument();
        expect(visibility).toBeInTheDocument();
    });

    test('pass correct props to Weather Info component', () => {
        render(<BodyForecast forecast={mockForecastData} />);

        const weatherInfo = screen.getAllByTestId('weather-info');
        expect(weatherInfo).toHaveLength(6);

        weatherInfo.forEach((component) => {
            const childrenArray = Array.from(component.children);
            const childrenContent = childrenArray.map(
                (child) => child.innerHTML
            );
            expect(childrenContent).toHaveLength(3);
        });
    });
});
