import axios from 'axios';
import React, { useState } from 'react';

const UploadFile = () => {

    let [uploadedFile , setUploadedFile] = useState<File | null>(null)

    function handleUpload(e :any){
        setUploadedFile(e.target.files[0])
    }

    function handleSubmit(e:any){
        e.preventDefault()
        const formData = new FormData();
 
        // // Update the formData object
        uploadedFile && formData.append(
            "file",
            uploadedFile,
        );
 
        // Details of the uploaded file
       axios.post("http://localhost:3001" , formData)
       .then((res)=>console.log(res.data))
       .catch((err)=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleUpload} />
                <button type="submit">SEND</button>
            </form>
            {/* {
                uploadedFile ? <>File uploaded : {uploadedFile} </> : <>Pas de file</>
            } */}
        </div>
    );
};

export default UploadFile;