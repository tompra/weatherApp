import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import ImagesForecast from './ImagesForecast';
import { imagesForecastDataMock } from '../../test/mockImageForecastData';

describe('test for image forecast', () => {
    test('render the component without errors', () => {
        render(<ImagesForecast forecast={imagesForecastDataMock} />);
    });
    test('renders 16 items from the list', () => {
        render(<ImagesForecast forecast={imagesForecastDataMock} />);
        const imageForecast = screen.getByTestId('image-forecast');

        expect(imageForecast.children.length).toBe(16);
    });
    test('item renders text with image and temperature', () => {
        render(<ImagesForecast forecast={imagesForecastDataMock} />);

        const textElement = screen.getByText('Now');
        expect(textElement.textContent).toBe('Now');

        const imageElement = screen.getAllByRole('img');
        expect(imageElement).toHaveLength(16);
        imageElement.forEach((img) => {
            expect(img).toHaveAttribute('src');
            expect(img).toHaveAttribute('alt');
        });

        const temperatureElement = screen.getAllByTestId(
            'temperature-component'
        );
        expect(temperatureElement).toHaveLength(16);

        temperatureElement.forEach((temp) => {
            expect(temp.textContent).toBe(temp.textContent);
        });
    });
});
