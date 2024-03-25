import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Testing search component', () => {
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
        const inputChangeMock = vi.fn();
        let userInputMock = '';
        const { rerender } = render(
            <Search
                userInput={userInputMock}
                inputChange={inputChangeMock}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input).toBeInTheDocument();

        userInputMock = 'L';
        fireEvent.change(input, { target: { value: userInputMock } });

        rerender(
            <Search
                userInput={userInputMock}
                inputChange={inputChangeMock}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );

        console.log('input after rerender', input.value);

        expect(input.value).toBe('L');
    });
});
