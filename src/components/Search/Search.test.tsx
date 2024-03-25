import { render, screen } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import Search from './Search';

describe('Testing search component', () => {
    const inputChangeMock = vi.fn();
    test('search component render initially', () => {
        const wrapper = render(
            <Search
                userInput=''
                inputChange={vi.fn()}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );
        expect(wrapper).toBeTruthy();
        const searchComponent = screen.getByTestId('search-component');
        expect(searchComponent).toBeInTheDocument();
    });
    test('user fire the input field by change', async () => {
        render(
            <Search
                userInput=''
                inputChange={inputChangeMock}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input).toBeInTheDocument();
    });
});
