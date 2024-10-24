export const videoTrimRange = async (range: any, dispatch: (action: any) => void) => {
    try {
        dispatch({ type: 'VIDEO_TRIM_VALUE', payload: range });
    } catch (error) {
        return error
    }
};