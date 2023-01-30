import { Button } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function index() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [loading,setLoading] = useState(false)
    // const [_islast,set_IsLast] = useState(false)
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
	const handleSubmission = async() => {
        var formData = new FormData();
        formData.append("xlsx", selectedFile);
        setLoading(true)
        let start = 2;
        let done = false
        let count = 1
        while(!done){
            
            const ress = await axios.post(`http://192.168.88.212:7000/api/v1/importExcel?start=${start}&count=${count}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjVhYWFmZjA0Mjc1ODMxOWExZGIyYjQiLCJqdGkiOiIzZTQwMmQwYy1hMDZiLTQ3ZWEtYmJlMC1jNzk4ODQxZmQzYjkiLCJpYXQiOjE2NzM1OTM0MjcsImV4cCI6MTY4MjIzMzQyN30.QRTLLL7x8zbnA7dNMUyy9PURUkKhiZF4QayPZH19Sx2mSwvWUm06kUphR_hrBA98CE7EB-AbWkDywifvm4rgAjPEfWPg8CM5ozz8JM4Qi-oBt_qcOQJ104yQ8xP7q-vih-29r24K-xFSAaYGd5PVtM4EDykipALDyPLerU-CoR6dQcnpxa3srRgb_n44U3bD7U7GtcSrYZYriYidcaJq7qw0Cic1AbGSsN67OmOlP9yE0gJ-KxL2IZuC0ztqdgGbBXuKCLwuKWD4dZG4Rh9_M0t1ciYmxoBBWX-bpyCmfCQbHmAcoc1YW_V_Odw8-TRMCFfkXto7DPh-wN9zW7rFOw'
            
          }
        })
            start += 500
        done = ress.data.done
       console.log(start);
       count++;
       console.log(count,"count");
       console.log(ress.data);
        console.count("done");
        }
        setLoading(false)
	};
  return (
    <div>
    <input type="file" name="files" onChange={changeHandler} />
    <div>
        <Button loading={loading}  onClick={handleSubmission}>Submit</Button>
    </div>
</div>
  )
}
