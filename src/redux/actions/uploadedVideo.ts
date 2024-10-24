export const uploadVideo = async (formData: any, dispatch: (action: any) => void) => {
    try {
        dispatch({ type: "UPLOAD_REQUEST", loading: true });

        const response = await fetch(import.meta.env.VITE_REACT_APP_CLOUDINARY_API_URL, {
            method: "POST",
            body: formData,
        });

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Wait for the response body to be parsed
        dispatch({ type: 'UPLOAD_SUCCESS', payload: data.secure_url });

        localStorage.setItem("videoUrl", data.secure_url);
    } catch (error: any) {
        dispatch({ type: "UPLOAD_FAIL", payload: error });
    }
};
