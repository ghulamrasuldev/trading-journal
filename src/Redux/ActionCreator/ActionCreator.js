// for mode change
export const lightMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "light",
      payload: mode,
    });
  };
};

export const darkMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "dark",
      payload: mode,
    });
  };
};

// for passing date
export const setFormattedDate = (date) => {
  return (dispatch) => {
    dispatch({
      type: "SET_FORMATTED_DATE",
      payload: date,
    });
  };
};

// for selectedDate
export const selectedDate = (SelectDate) => {
  return (dispatch) => {
    dispatch({
      type: "selectedDate",
      payload:SelectDate,
    })
  }
}

// authenticate route
export const authenticateRoute = (setUser) => {
  return (dispatch) => {
    dispatch({
      type: "authticateUser",
      payload:setUser
    })
  }
}