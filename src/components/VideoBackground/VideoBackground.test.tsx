import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import VideoBackground from './VideoBackground';

vi.mock('../../utils/helpers', () => ({
    getBackgroundVideo: vi.fn().mockImplementation((weatherCondition) => {
        switch (weatherCondition) {
            case 'Cloudy':
                return 'cloudy.mp4';
            case 'Thunderstorm':
                return 'thunderstorm.mp4';
            default:
                return 'none';
        }
    }),
}));

describe('Test videobackground component', () => {
    test('renders video element with correct source and attributes', () => {
        render(<VideoBackground video='Cloudy' />);

        const videoElement = screen.getByTestId(
            'video-component'
        ) as HTMLVideoElement;

        expect(videoElement).toBeInTheDocument();
        expect(videoElement.src.endsWith('cloudy.mp4')).toBeTruthy();
        expect(videoElement).toHaveAttribute('loop');
        expect(videoElement).toHaveAttribute('autoplay');
    });

    test('renders video after the prop video changes value', async () => {
        const { rerender } = render(<VideoBackground video='Cloudy' />);
        const videoElement = screen.getByTestId(
            'video-component'
        ) as HTMLVideoElement;

        expect(videoElement).toBeInTheDocument();

        expect(videoElement.src.endsWith('cloudy.mp4')).toBeTruthy();

        rerender(<VideoBackground video='Thunderstorm' />);

        await waitFor(() => {
            expect(videoElement.src.endsWith('thunderstorm.mp4')).toBeTruthy();
        });
    });
});
