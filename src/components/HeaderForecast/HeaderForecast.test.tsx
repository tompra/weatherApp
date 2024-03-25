import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import HeaderForecast from './HeaderForecast';
import { mockForecastData } from '../../test/mockForecastData';

describe('Test for header forecast component', () => {
    test('component renders initially', () => {
        const wrapper = render(<HeaderForecast forecast={mockForecastData} />);
        expect(wrapper).toBeTruthy();

        const headerComponent = screen.getByTestId('header-component');
        expect(headerComponent).toBeInTheDocument();
    });
});
