import React, {useState} from 'react';
import axios from 'axios';


const UploadFile = () => {
  const [file, setFile] = useState('');

  //upload file with axios
  const uploadFile = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', e.target[0].files[0]);
    try {
      const res = await axios.post('http://localhost:4000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={uploadFile}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default UploadFile