const initialState = {
    selectedDate:null
}

const selectedDateReducer = (state=initialState,action) => {
    switch (action.type) {
        case "selectedDate":
            return {
                ...state,
                selectedDate: action.payload
            };
        default:
            return state;
        
    }
}

export default selectedDateReducer