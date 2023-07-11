import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="3"
        animationDuration="0.75"
        width="46"
        visible={true}
      />{" "}
    </div>
  );
}

export default Loading;
