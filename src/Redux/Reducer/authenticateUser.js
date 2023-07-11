
const initialState = false;

const RouteReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'authticateUser':
            return (state = action.payload);
        default:
            return state;
    }
}
 export default RouteReducer