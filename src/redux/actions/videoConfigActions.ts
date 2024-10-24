export const updateVideoConfig = async (config: any, dispatch: (action: any) => void) => {
    try {
        dispatch({ type: 'UPDATE_VIDEO_CONFIG', payload: config });
    } catch (error) {
        return error
    }
};