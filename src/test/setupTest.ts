import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

Object.defineProperty(HTMLMediaElement.prototype, 'load', {
    value: () => {},
});
