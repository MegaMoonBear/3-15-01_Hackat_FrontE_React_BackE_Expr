import './App.css';
import axios from 'axios';
import { useState } from 'react';
import bannerImage from './assets/DigitalDelta_Banner2of3GIS_ComicNin.png';

function App() {
    const [serverResponse, setServerResponse] = useState('')
    const url = process.env.REACT_APP_SERVER_URL;//'https://hackathon00-api.onrender.com/';

    function callGet() {
        axios.get(url)
        .then((response) => {
            setServerResponse(response.data);
        });
    }

    function callPost() {
        //http://localhost:3001/?lang=c++
        let data = '?lang=c++';
        axios.post(url + data)
        .then((response)=>{
            setServerResponse(response.data);
        });
    }

    function callPut() {
        let data = '?lang=python&index=0';
        axios.put(url + data)
        .then((response) => {
            setServerResponse(response.data);
        })
    }
    function callDelete() {
        let data = '?index=1';
        axios.delete(url + data)
        .then((response) => {
            setServerResponse(response.data);
        });
    }
  return (
    <div className="App">
      <img src={bannerImage} alt="Digital Delta Banner" className="banner" />
      <h1>Digital Delta - Adult Education Resources</h1>
      <h3>Digital Delta - Blues & Binary</h3>
      
      {serverResponse}
      <button onClick={callGet}>GET</button>
      <button onClick={callPost}>POST</button>
      <button onClick={callPut}>PUT</button>
      <button onClick={callDelete}>DELETE</button>
    </div>
  );
}

export default App;
