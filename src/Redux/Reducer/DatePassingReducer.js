const initialState = {
    formattedDate: null
  };
  
  const dateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FORMATTED_DATE':
        return {
          ...state,
          formattedDate: action.payload
        };
      default:
        return state;
    }
  };
  
  export default dateReducer;
  