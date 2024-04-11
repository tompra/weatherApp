import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import ReturnBtn from './ReturnBtn';

describe('Test cases for the Return Button component', () => {
    const toggleSearchBtnMock = vi.fn();
    test('render the component without any errors', () => {
        render(<ReturnBtn toggleSearchBtn={toggleSearchBtnMock} />);
    });
    test('render the button with the go back text', () => {
        render(<ReturnBtn toggleSearchBtn={toggleSearchBtnMock} />);

        const returnBtn = screen.getByTestId('return-btn-component');

        expect(returnBtn.textContent).toBe('Go back');
    });
    test('user can click on the button and call the function to return home', () => {
        render(<ReturnBtn toggleSearchBtn={toggleSearchBtnMock} />);

        const returnBtn = screen.getByRole('button');

        fireEvent.click(returnBtn);

        expect(toggleSearchBtnMock).toHaveBeenCalled();
    });
});
