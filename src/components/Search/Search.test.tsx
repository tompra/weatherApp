import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, test, expect } from 'vitest';
import Search from './Search';
import * as useFetchData from '../../hooks/useFetchData';

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
    });
});
