import { useDispatch, useSelector } from "react-redux";
import Configuration from "./Configuration";
import Sidebar from "./Sidebar";
import { VideoPlayer } from "./VideoPlayer";
import { Player, Thumbnail } from "@remotion/player";
import Loader from "../component/Loader";
import { continueRender, delayRender } from "remotion";
import { getVideoMetadata } from "@remotion/media-utils";
import { useEffect, useState } from "react";
import { updateVideoConfig } from "../../redux/actions/videoConfigActions";

const Index: React.FC = () => {
    const [handle] = useState(() => delayRender());
    const [duration, setDuration] = useState(1);
    const [hasDuration, setHasDuration] = useState(false);
    const dispatch = useDispatch();
    const { uploadedVideo, loading } = useSelector((state: any) => state.video);
    let { width, height, length } = useSelector((state: any) => state.videoConfigReducer);
    let { minVal, maxVal } = useSelector((state: any) => state.videotrimReducer);
    width = parseInt(width);
    height = parseInt(height);
    length = parseInt(length);
    minVal *= 3;
    maxVal *= 3;


    useEffect(() => {
        if (uploadedVideo) {
            getVideoMetadata(uploadedVideo)
                .then(({ durationInSeconds }: any) => {
                    localStorage.setItem("videoDuration", (Math.round(durationInSeconds) * 30).toString());
                    setDuration(Math.round(durationInSeconds) * 30);
                    continueRender(handle);
                    setHasDuration(true);
                    console.log("durationInSeconds >:>", durationInSeconds)
                })
                .catch((err) => {
                    console.log(`Error fetching metadata: ${err}`);
                });
            const videoDuration = parseInt(localStorage.getItem("videoDuration") || '');
            let obj = {
                width,
                height,
                videoDuration
            }
            updateVideoConfig(obj, dispatch);
        }
    }, [uploadedVideo]);

    const templates = [
        { id: 1, image: 'out/VideoPlayer.mp4', text: 'Template 1' },
        { id: 2, image: 'out/VideoPlayer.mp4', text: 'Template 2' },
        { id: 3, image: 'out/VideoPlayer.mp4', text: 'Template 3' },
    ];

    console.log("duration ???>>", duration)
    // const outFrame = duration > 0 ? (duration - 1) : 1;

    // console.log("outFrame >>>", outFrame);

    return (
        <div className="app">
            <Sidebar templates={templates} />
            <div className="player">
                {/* {loading && duration ?
                    <>
                        <div style={{ position: 'relative' }}>
                            <Loader />
                            <Thumbnail
                                component={VideoPlayer}
                                compositionWidth={530}
                                compositionHeight={350}
                                frameToDisplay={200}
                                durationInFrames={120}
                                fps={30}
                                inputProps={{ uploadedVideo }}
                            />
                        </div>
                    </>
                    :
                    <Player
                        component={VideoPlayer}
                        durationInFrames={duration}
                        compositionWidth={width === 0 ? 700 : width}
                        compositionHeight={height === 0 ? 500 : height}
                        fps={30}
                        inputProps={{ uploadedVideo }}
                        controls
                        inFrame={0}
                        outFrame={outFrame}
                        style={{
                            width: 530,
                            height: 350,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '23px'
                        }}
                    />
                } */}

                {loading ? (
                    <Loader />
                ) : hasDuration ? (
                    <Player
                        component={VideoPlayer}
                        durationInFrames={duration}
                        compositionWidth={width === 0 ? 700 : width}
                        compositionHeight={height === 0 ? 500 : height}
                        fps={30}
                        inputProps={{ uploadedVideo }}
                        controls
                        inFrame={0}
                        outFrame={duration - 1}
                        style={{
                            width: 530,
                            height: 350,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '23px'
                        }}
                    />
                ) : null}
            </div>

            <Configuration />
        </div>
    );
};

export default Index;