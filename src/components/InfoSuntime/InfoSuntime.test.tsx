import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import InfoSuntime from './InfoSuntime';
import { getSunTime } from '../../utils/helpers';

describe('Test for info suntime component', () => {
    test('render the component without errors', () => {
        render(<InfoSuntime icon='test icon' value={600} title='Sunset' />);
    });

    test('render the component with the passed props', () => {
        render(<InfoSuntime icon='test icon' value={600} title='Sunset' />);

        const infoTime = screen.getAllByTestId('info-suntime');

        infoTime.forEach((info) => {
            expect(info).toHaveTextContent('test icon');

            expect(info).toHaveTextContent(getSunTime(600));

            expect(info).toHaveTextContent('Sunset');
        });
    });
});
