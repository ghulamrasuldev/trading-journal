import React from "react";
import { RiSunFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../../Redux/AllAccess";
import { RiMoonFill } from "react-icons/ri";

const SwitchMode = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const { lightMode } = bindActionCreators(actionCreator, dispatch);

  // styling
  const iconStyle = {
    marginRight:'20px'
  }
  return (
    <div style={iconStyle}>
      {mode? (
        <RiMoonFill
          onClick={() => {
            lightMode(!mode);
          }}
          size={25}
          color='#636578'
        />
      ) : (
        <RiSunFill
          onClick={() => {
            lightMode(!mode);
            }}
            size={25}
            color='#636578'
        />
      )}
    </div>
  );
};

export default SwitchMode;
