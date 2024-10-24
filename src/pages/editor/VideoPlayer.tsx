import { AbsoluteFill, OffthreadVideo } from "remotion";
import './style.css';
// import flvjs from 'flv.js';

type VideoProps = {
    uploadedVideo: any;
};

export const VideoPlayer: React.FC<VideoProps> = ({ uploadedVideo }) => {

    return (
        <div className="main-content">
            <div className="video-container">
                <AbsoluteFill>
                    <OffthreadVideo
                        src={uploadedVideo}
                        className="video"
                    />
                </AbsoluteFill>
            </div>
        </div>
    );
};