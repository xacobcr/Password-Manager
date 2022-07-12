
import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {

  const [title, setTitle] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', {
      title: title,
      username: username,
      password: password
    })
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Password Input</h1>
        <div className="addPassword">
          <h5>Account: </h5>
          <input type="text"
            placeholder="Ex: Github"
            onChange={(event) => {
              setTitle(event.target.value)
            }} />
        </div>
        <div className="addPassword">
          <h5>Username:</h5>
          <input type="text"
            placeholder="Ex: JohnDoe"
            onChange={(event) => {
              setUsername(event.target.value)
            }} />
        </div>
        <div className="addPassword">
          <h5>Password:</h5>
          <input type="text"
            placeholder="Ex: 12qwaszx"
            onChange={(event) => {
              setPassword(event.target.value)
            }} />
        </div>
        <div className="button">
          <button className="btn"
            onClick={addPassword} >
            Add Password
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;
