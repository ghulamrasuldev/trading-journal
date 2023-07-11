import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Box } from "@mui/material";
import ModeChange from "../../Theme/ChangeMode";
import { useState } from "react";
import Upload from "../../assets/uploadImage.png";
import apiService from "../../services/api/api";


const UserCsv = () => {
  const lightTheme = ModeChange();


  const [selectedFile, setSelectedFile] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
      setErrorMessage(" ");
    } else {
      setSelectedFile(null);
      setErrorMessage("Invalid file format. Please select a CSV file.");
    }
  };



  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    const authToken = localStorage.getItem('AuthToken');
    console.log(authToken)
    try {
      const response = await apiService('post', '/usercsv', { "Content-Type": "multipart/form-data", "x-usertoken": authToken }, formData)
      console.log("fileUpload Response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const isCSVFile = selectedFile && selectedFile.type === "text/csv";
  const submitDisabled = !isCSVFile;

  // styling
  const mainDiv = {
    padding: "30px 25px",
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
  };

  const fileMain = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    marginTop: "20px",
    borderRadius: "8px",
    padding: "35px 15px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
  const inputMain = {
    padding: "35px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid gray",
    borderStyle: "dashed",
    width: "70%",
  };
  const submitButton = {
    border: "none",
    borderRadius: "5px",
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: "white",
    width: "10%",
    padding: "7px 5px",
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "17px",
    fontWeight: "bold",
    margin: "10px 0",
  };
  const csvFileStyle = {
    color: `${lightTheme.lightDarkBlue}`,
    fontSize: "18px",
    fontWeight: "700",
    margin: "5px 0",
    margin: "10px 0",
  };
  const inputStyle = {
    color: `${lightTheme.lightDarkBlue}`,
    // border: "1px solid red",
    textAlign: "center",
    width: "25%",
    margin: "10px 0",
  };
  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={"UserCsv"} />
        <div style={fileMain}>
          <div style={inputMain}>
            <img src={Upload} alt="upload" height={100} />
            <p style={csvFileStyle}>Upload your CSV file</p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <input
              type="file"
              onChange={(e) => {
                handleFile(e);
              }}
              style={inputStyle}
            />
            <button
              onClick={() => uploadFile()}
              style={submitButton}
              disabled={submitDisabled}
            >
              upload
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default UserCsv;
