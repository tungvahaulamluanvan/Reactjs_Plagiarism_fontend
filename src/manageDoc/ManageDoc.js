import React, {useCallback, useEffect, useState} from 'react'
import ListFile from '../manageDoc/ListFile';
import { getListFileByUser, uploadFile, deleteFile } from '../api/docApi'
import { useDispatch } from 'react-redux';
import './manageDoc.css';
function ManageDoc (){
    const [listFile, setListFile] = useState([]);
    const dispatch = useDispatch();

    const [selectedFile, setSelectedFile] = useState();

 //   const [upfile, setupfile] = useState();

//    const addFile = e =>{
//     setSelectedFile(e.target.files[0]);
//     console.log(selectedFile);
//   }
  const upload = (selectedFile) =>{
    console.log(selectedFile);
      uploadFile(selectedFile);
  }
    const fetchListFile = useCallback(async () =>{
        const response = await fetch('http://localhost:8080/list/' + 1)
        const data = await response.json()
        setListFile(data.listFile);
      },[])
      useEffect(() =>{
      fetchListFile();
      }, [listFile])
    return(
        <div>
            <ListFile 
                listFile = { listFile }
                addFile  = { setSelectedFile }
                uploadFile = { upload }
                deleteFile = { deleteFile }
            ></ListFile>
        </div>
    )
}
export default ManageDoc