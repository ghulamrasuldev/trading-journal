import React, { useState,useEffect } from "react";
import { Box } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parser from "html-react-parser";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "./TextEditor.css";
import ModeChange from "../../../../Theme/ChangeMode";
import PrimaryButton from "../../../../components/common/PrimaryButton";
import { useSelector } from "react-redux";




// to get notes from local storage
const getLocalStorageData = () => {
  
  const Notes = localStorage.getItem('notes')
  if (Notes) {
    return JSON.parse(localStorage.getItem('notes'))
  } else {
    return []
  }
}


const TextEditor = () => {
  const lightTheme = ModeChange();
    const [editorData, setEditorData] = useState('');
  const [save, setSave] = useState(getLocalStorageData());
    const [toggle, setToggle] = useState(false);
  const [showSave, setShowSave] = useState(false);
  
useEffect(() => {
  localStorage.setItem('notes', JSON.stringify(save));
},[ ])

  const mode=useSelector(state=>state.mode)
    
// styling
  const mainDiv = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "10px",
    marginTop: "25px",
    padding: "20px 20px",
  };

  // handle functions
    const handleData = () => {
      // localStorage.setItem("data", editorData)
      // const localStorageData = localStorage.getItem("data");
      // localStorage.removeItem('notes')
      if (editorData.length==0) {
        alert('Enter Note!!')
      } else {
        setSave([...save,editorData]);
        setEditorData(" ")
      setToggle(true);
      }
    };
  const setEditorValue = (data) => {
      setEditorData(data)
    console.log(data)
        setShowSave(!showSave)
  }
  
  return (
    <div>
      <Box sx={mainDiv}>
        <div className="addNoteDiv">
          <div >
          <p>{toggle ? <div className="documentDiv">
          {
            save.map((data, index) => {
              return (
                <p onClick={() => setEditorValue(data)} key={index} className="Document" style={{border:`1px solid ${lightTheme.lightDarkBlue}`,color:`${lightTheme.textColor}`}}>{(data.length > 15) ? parser(`${data.slice(0, 10)}...`) :parser(`${data}`)}</p>
              )
            })
          }
                 
                  {/* <p>{parser(save)}</p> */}
            </div> : ''}</p>
          </div>
            <PrimaryButton buttonTitle={"+ Note"} onClick={() => handleData()}/>
        </div>
        <div >
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorData(data);
            }}
            // className={mode? 'ck':'ckk'}
            
          />
          {/* <ReactQuill
            theme="snow"
            value={editorData}
            onChange={setEditorData}
            placeholder={"Write something awesome..."} */}
          {/* // modules={modules}
        // formats={formats}
        //   /> */}
        </div>
       
      </Box>
    </div>
  );
};

export default TextEditor;
