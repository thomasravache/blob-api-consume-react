import { useState } from 'react';
import './App.css';
import { uploadFile, readFile, downloadFile, deleteFile } from './services';

function App() {
  const [selectedFile, setSelectedFile] = useState('');
  const [fileName, setFileName] = useState('');

  const handleChangeUpload = ({ target: { files } }) => {
    console.log(files);
    setSelectedFile(files[0]);
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const upload = async () => {
    try {
      const data = new FormData();
      data.append('MyFile', selectedFile);

      await uploadFile(data);
      setSelectedFile('');
    } catch {
      console.log('ruim');
    }

  }

  const read = async () => {
    try {
      const { request: { responseURL } } = await readFile(fileName);
      window.open(responseURL, '_blank');
    } catch {
      console.log('deu ruim');
    }
  };

  const download = async () => {
    try {
      const { request: { responseURL } } = await downloadFile(fileName);
      window.open(responseURL, '_self');
    } catch {
      console.log('ruim');
    }
  };

  const deleteResource = async () => {
    try {
      await deleteFile(fileName);
      setFileName('');
    } catch {
      console.log('ruim');
    }
  };

  return (
    <div className="App">
        <h2>React file upload Example</h2>
      <div>
        <h3>Upload</h3>
        <div>
          <label>Select File</label>
          <input type="file" name="MyFile" accept="application/pdf" onChange={handleChangeUpload} />
        </div>
        <div>
          <button type="button" onClick={upload}>
            Upload
          </button>
        </div>
      </div>
      <div>
        <h3>Read / Download / Delete</h3>
        <input type="text" placeholder='nomearquivo.pdf' value={fileName} onChange={(e) => handleChange(e, setFileName)}/>
        <br></br>
        <button type='button' onClick={read}>Visualizar</button>
        <button type='button' onClick={download}>Download</button>
        <button type='button' onClick={deleteResource}>Delete</button>
      </div>
    </div>
  );
}

export default App;
