import { getBackgroundVideo } from '../../utils/helpers';
import { useEffect, useRef } from 'react';

type Props = {
    video: string;
};

const VideoBackground: React.FC<Props> = ({ video }): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const videoSource = getBackgroundVideo(video);
            if (videoSource !== 'none') {
                videoElement.src = videoSource;
                videoElement.load();
            }
        }
    }, [video]);

    return (
        <video
            ref={videoRef}
            loop
            muted
            autoPlay
            className='absolute inset-0 w-full h-full object-cover -z-10'
            data-testid='video-component'
        >
            <source src='' type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    );
};
export default VideoBackground;
