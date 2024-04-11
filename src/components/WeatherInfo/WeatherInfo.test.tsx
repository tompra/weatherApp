import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import WeatherInfo from './WeatherInfo';

describe('Test for weather info component', () => {
    test('component render initially without errors', () => {
        render(
            <WeatherInfo
                icon='wind icon test'
                info='10km/h'
                description='Test description'
                title='wind title'
            />
        );
    });
    test('component renders the correct information based on the props', () => {
        render(
            <WeatherInfo
                icon='wind icon test'
                info='10km/h'
                description='test description'
                title='wind title'
            />
        );
        const iconElement = screen.getByText('wind icon test');
        const titleElement = screen.getByText('wind title');
        const descriptionElement = screen.getByText('test description');
        const infoElement = screen.getByText('10km/h');
        expect(iconElement.textContent).toBe('wind icon test');
        expect(titleElement.textContent).toBe('wind title');
        expect(descriptionElement.textContent).toBe('test description');
        expect(infoElement.textContent).toBe('10km/h');
    });

    test('component renders firstly the icon', () => {
        render(
            <WeatherInfo
                icon='wind icon test'
                info='10km/h'
                description='test description'
                title='wind title'
            />
        );
        const weatherInfo = screen.getByTestId('weather-info');
        const firstChildIcon = weatherInfo.firstChild;

        expect(firstChildIcon.textContent).toContain('wind icon test');
    });

    test('component renders the title', () => {
        render(
            <WeatherInfo
                icon='wind icon test'
                info='10km/h'
                description='test description'
                title='wind title'
            />
        );
        const weatherInfo = screen.getByTestId('weather-info');
        const firstChildTitle = weatherInfo.children[0];

        expect(firstChildTitle.textContent).toContain('wind title');
    });
});
