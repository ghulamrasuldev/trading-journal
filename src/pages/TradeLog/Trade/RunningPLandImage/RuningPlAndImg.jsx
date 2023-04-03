import React, { useState } from "react";
import "./runingPlAndImg.css";
// import { lightTheme } from "../../../../Theme/theme";
import { Box, Grid } from "@mui/material";
import ImageUploading from "react-images-uploading";
import Chart from "react-apexcharts";
import UploadImage from "../../../../assets/uploadImage.png";
import ModeChange from "../../../../Theme/ChangeMode";

const RuningPlAndImg = () => {
  const lightTheme = ModeChange();
  const [lineChart, setLineChart] = useState({
    series: [
      {
        data: [10, 41, 35, 51, 49, 62],
      },
      {
        data: [30, 4, 25, 61, 19, 52],
      },
    ],
    options: {
      colors: [`${lightTheme.greenAreaGraph}`, `${lightTheme.redAreaGraph}`],
      chart: {
        // height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["09:00", "11:00", "01:00", "04:00", "05:00", "07:00"],
      },
    },
  });

  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    console.log("imagessss",images['data_url'])
  };

  const[toggle,setToggle]=useState(false)

  const ZoomIn = () => {
    console.log('enter');
    // document.getElementsByClassName('.large').style.height='300px'
    setToggle(!toggle)
  }
  // const ZoomOut = () => {
  //   console.log('leave')
  //   setToggle(false)
  // }

  const mainDiv = {
    // padding: "30px 25px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    marginTop: "25px",
    borderRadius:'8px'
  };
  const imgUpload = {
    // marginBottom: '20px',
    cursor: 'pointer',
    // border: '1px solid yellow',
    // width:'100%'
    backgroundColor:`${lightTheme.ComponentBackgroundColor}`
  }
  return (
    <div>
      <Box sx={mainDiv}>
        <Grid container columnGap={4} rowGap={4} py={2}>
          <Grid item lg={5} py={3} px={3} >
            <p
              style={{
                color: `${lightTheme.headingTextColor}`,
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Running P&l
            </p>
            <div>
              <Chart
                options={lineChart.options}
                series={lineChart.series}
                type="line"
                height={250}
              />
            </div>
          </Grid>
          <Grid item lg={6.5}  sx={imgUpload} >
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                  // write your building UI
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
                
                <div style={{ height: "100%"}}>
                 
                  <div
                   
                    className="ImgUploadDiv"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      // borderStyle: 'dashed',
                      borderWidth: '2px',
                      borderStyle: 'dashed',
                      borderColor: '#e2e2e2',
                      backgroundColor:`${lightTheme.ComponentBackgroundColor}`
                      
                    }}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <p>ADD IMAGE</p>
                    <img src={UploadImage} alt="uploadImage" height={50} />
                  </div>
                  &nbsp;
                  {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}


                  
                 
                  </div>
                  <div style={{display:'flex'}}>
                {imageList.map((image, index) => (
                 
                  <div key={index} className="image-item" >
                    <img src={image["data_url"]} alt=""  id={toggle? 'large':'small'}
                      onClick={() => {
                        ZoomIn();
                      }}
                    />
                    {/* <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div> */}
                    </div>
                ))}
                </div>
                </div>
              )}
            </ImageUploading>
          
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RuningPlAndImg;
