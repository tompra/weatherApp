import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import App from './App';

describe('App component test', () => {
    test('initial render of the component', () => {
        render(<App />);
    });
});
