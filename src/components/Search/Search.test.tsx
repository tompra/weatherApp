import { render, screen } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import { mockOptionsData } from '../../test/mockOptionsData';

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
        await userEvent.type(input, 'L');

        rerender(
            <Search
                userInput={userInputMock}
                inputChange={inputChangeMock}
                options={[]}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );

        expect(input.value).toBe('L');
    });
    test('user fire the input field by change options items appear', () => {
        render(
            <Search
                userInput='L'
                inputChange={vi.fn()}
                options={mockOptionsData}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );

        const listItems = screen.getByTestId('option-list');
        expect(listItems.children.length).toBe(5);

        const items = Array.from(listItems.children);

        items.forEach((item: Element) => {
            expect(item.textContent?.startsWith('L')).toBeTruthy();
        });
    });
    test('user fire the input field by change options items appear and clicks in one item and submit the button', () => {
        render(
            <Search
                userInput='L'
                inputChange={vi.fn()}
                options={mockOptionsData}
                onSubmit={vi.fn()}
                onOptionSelect={vi.fn()}
            />
        );

        const listItems = screen.getByTestId('option-list');
        expect(listItems.children.length).toBe(5);

        const items = Array.from(listItems.children);

        items.forEach((item: Element) => {
            expect(item.textContent?.startsWith('L')).toBeTruthy();
        });

        userEvent.click(items[0]);

        const searchButton = screen.getByText('search');

        console.log('searchButton', searchButton);

        userEvent.click(searchButton);
    });
});
