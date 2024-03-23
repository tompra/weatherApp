import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Home from './Home';

describe('Home component test', () => {
    test('initial render of the home component', () => {
        const container = render(
            <Home
                userInput=''
                inputChange={vi.fn()}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );
        expect(container).toBeTruthy();
    });
    test('the component render a heading and text', () => {
        const container = render(
            <Home
                userInput=''
                inputChange={vi.fn()}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );
        const initialComponent = screen.getByTestId('initial-component');
        expect(initialComponent).toBeTruthy();

        const h1 = container.container.querySelector('h1');
        expect(h1?.textContent).toBe('Weather Forecast');

        const p = container.container.querySelector('p');
        expect(p?.textContent).toBe(
            'Enter a place you want to know the weather and select an option'
        );
    });
    test('the home component renders the search component', () => {
        render(
            <Home
                userInput=''
                inputChange={vi.fn()}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );

        const searchComponent = screen.getByTestId('search-component');
        expect(searchComponent).toBeTruthy();
    });
});
