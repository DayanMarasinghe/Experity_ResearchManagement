<<<<<<< HEAD
import React from "react";
// import 'react-dropzone-uploader/dist/styles.css'
// import Dropzone from 'react-dropzone-uploader'
=======
import React ,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useState } from 'react';
>>>>>>> 0408896 (request supervisor BE and UI)

const DocumentSubmission = () => {

    const [progress, setProgress] = useState(0);
    
    formHandler = (e)=>{
      e.preventDefault();

      const file = e.target[0].files[0]; 
      uploadFiles(file);
    }

    const uploadFiles = (file) => {
      //
      if (!file) return;
      const sotrageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);

            let obj = {document : downloadURL }

            fetch("http://localhost:4000/documentupload/createdoc", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(obj),
            }).then(() => {
              console.log(obj);
              alert("successfully added");
            });


          });
        }
      );
    }; 
  
    return (
      
      <div>

        <Form onSubmit={formHandler}>
          <input type="file" className="input"/>
          <Button type="submit">Upload</Button>

        </Form>
        <hr />
      <h2>Uploading done {progress}%</h2>
      
    </div>
     

    )
  }
export default DocumentSubmission;
