import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Temperature from './Temperature';

describe('Test the temperature component', () => {
    test('render the component without an error', () => {
        render(<Temperature temp={10} />);
    });
    test('render the component the temperature text', () => {
        render(<Temperature temp={10} />);

        const temperature = screen.getByTestId('temperature-component');

        expect(temperature.textContent).toBe('10oC');
    });
});
