import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const reader = new FileReader();

  const handleFileUpload = (event) => {
    try {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e) => {
        setFile(e.target.result);
      };
    } catch (error) {
      setFile(null);
      setMessage("Choose An Image");
      console.log("Choose Image");
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={(event) => handleFileUpload(event)} />

      {file ? (
        <a href={file} download>
          <button>Download</button>
          <img src={file} alt="stuff" />
        </a>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default App;
