import { useState } from 'react';
import './App.css';
import { upload } from './services';

function App() {
  const [selectedFile, setSelectedFile] = useState('');
  const [fileToRead, setFileToRead] = useState('');

  const handleChangeUpload = ({ target: { files } }) => {
    console.log(files);
    setSelectedFile(files[0]);
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const submit = async () => {
    const data = new FormData();
    data.append('MyFile', selectedFile);

    await upload(data);
  }

  return (
    <div className="App">
        <h2>React file upload Example</h2>
      <div>
        <h3>Upload</h3>
        <div>
          <label>Select File</label>
          <input type="file" name="MyFile" onChange={handleChangeUpload} />
        </div>
        <div>
          <button type="button" onClick={submit}>
            Upload
          </button>
        </div>
      </div>
      <div>
        <h3>Read</h3>
        <input type="text" placeholder='informe o nome' onChange={(e) => handleChange(e, setFileToRead)}/>
        <a href={`https://localhost:7241/file/read?fileName=${fileToRead}`} target='_blank' rel='noreferrer'>Ler Arquivo</a>
      </div>
    </div>
  );
}

export default App;
