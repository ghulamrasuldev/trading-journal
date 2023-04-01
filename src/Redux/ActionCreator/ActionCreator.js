

export const lightMode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'light',
            payload: mode
        })
    }
}

export const darkMode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'dark',
            payload:mode
        })
    }
}