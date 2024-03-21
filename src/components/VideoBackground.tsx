import { getBackgroundVideo } from '../utils/helpers';

type Props = {
    video: string;
};

const VideoBackground: React.FC<Props> = ({ video }): JSX.Element => {
    return (
        <video
            loop
            muted
            autoPlay
            className='absolute inset-0 w-full h-full object-cover -z-10'
        >
            <source src={`${getBackgroundVideo(video)}`} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    );
};
export default VideoBackground;
