import { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import './multiRangeSlider.css';
import { useDispatch, useSelector } from 'react-redux';
import { videoTrimRange } from '../../redux/actions/videoTrimAction';

interface MultiRangeSliderProps {
    min: number;
    max: number;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ min, max }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    let { videoDuration } = useSelector((state: any) => state.videoConfigReducer);

    // Update state when props change
    useEffect(() => {
        setMinVal(min);
        setMaxVal(max);
    }, [min, max]);

    // Convert to percentage
    const getPercent = useCallback((value: number) =>
        Math.round(((value - min) / (max - min)) * 100), [min, max]);

    // Update range style
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }

        const rangevalue = {
            minVal,
            maxVal
        }
        videoTrimRange(rangevalue, dispatch)
    }, [minVal, maxVal, getPercent]);

    return (
        <div className='video-range'>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(Number(event.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="thumb thumb--left"
                style={minVal > max - 100 ? { zIndex: 5 } : undefined}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(Number(event.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="thumb thumb--right"
            />

            <div className="slider">
                <div ref={range} className="slider__range"></div>
                <div className="slider__left-value">{minVal}</div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;