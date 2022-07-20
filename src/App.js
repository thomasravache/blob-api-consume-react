import { useState } from 'react';
import './App.css';
import { uploadFile, readFile, downloadFile } from './services';

function App() {
  const [selectedFile, setSelectedFile] = useState('');
  const [fileToReadOrDownload, setFileToReadOrDownload] = useState('');

  const handleChangeUpload = ({ target: { files } }) => {
    console.log(files);
    setSelectedFile(files[0]);
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const upload = async () => {
    const data = new FormData();
    data.append('MyFile', selectedFile);

    await uploadFile(data);
  }

  const read = async () => {
    try {
      const { request: { responseURL } } = await readFile(fileToReadOrDownload);
      window.open(responseURL, '_blank');
    } catch {
      console.log('deu ruim');
    }
  };

  const download = async () => {
    try {
      const { request: { responseURL } } = await downloadFile(fileToReadOrDownload);
      window.open(responseURL, '_self');
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
          <input type="file" name="MyFile" onChange={handleChangeUpload} />
        </div>
        <div>
          <button type="button" onClick={upload}>
            Upload
          </button>
        </div>
      </div>
      <div>
        <h3>Read or Download</h3>
        <input type="text" placeholder='nomearquivo.pdf' value={fileToReadOrDownload} onChange={(e) => handleChange(e, setFileToReadOrDownload)}/>
        <br></br>
        <button type='button' onClick={read}>Visualizar</button>
        <button type='button' onClick={download}>Download</button>
      </div>
    </div>
  );
}

export default App;
