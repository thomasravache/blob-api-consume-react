import { useState } from 'react';
import './App.css';
import { upload } from './services';

function App() {
  const [selectedFile, setSelectedFile] = useState('');

  
  const handleChange = ({ target: { files } }) => {
    console.log(files);
    setSelectedFile(files[0]);
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
        <label>Select File</label>
        <input type="file" name="MyFile" onChange={handleChange} />
      </div>
      <div>
        <button type="button" onClick={submit}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default App;
