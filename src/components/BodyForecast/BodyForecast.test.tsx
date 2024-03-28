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
    });
});
