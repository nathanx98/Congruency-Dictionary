import './App.css';
import React, {useEffect, useState} from 'react';
import logo from './img/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import profileImg from './img/myself.jpg'
import data from './data.csv';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Papa from "papaparse"

function App() {
  const[word, setWord] = useState("")
  const[message, setMessage] = useState("")
  

  var dict = {}
  Papa.parse(data, {
    download: true,
    header: false, 
    skipEmptyLines: true,
    complete: function(results) {
      results["data"].forEach((val, i) => {
        Object.assign(dict, {[val[0]]:val[1]})
      })

      var csv = Papa.unparse(dict, {
        header: false, 
        skipEmptyLines: true, 
      })
    }
  })


  const search = (e) => {
    if (e.key === 'Enter') {
      if (dict[word] === undefined) {
        setMessage("The word \'" + word + "' Is Not In Our Dictionary")
      }
      else {
        let val = dict[word]
        val = val.trim().split(/\s+/);
        let key = word.trim().split(/\s+/);
        
        if (key[0] === 'make' && val[0] === 'faire'){
          setMessage(word + ' is congruent.' + "\n" + 'It\'s French translation is ' + dict[word])
        }
        else {
          setMessage(word + ' is not congruent')
        }
      }
    }
  }


  

  return (
    <div className='App'>
      <div className="navbar navbar-light" style={{display: "flex", justifyContent: "center"}}>
        <img src = {logo} id='logo'></img>
      </div>

      <div className='content'>
        {/* <h2> Creator: 大聪明</h2>
        <p> ⬇️</p> */}
        {/* <img src = {profileImg} id='profile'></img> */}

        <h2>Enter an English Word</h2>
        <input 
          className="form-control" 
          placeholder={"Press Enter to Search"}
          value={word}
          onChange = {(e) => {setWord(e.target.value)}}
          onKeyDown = {search}
        ></input>
        <div>{message}</div>
      </div>
    </div>
    
  );
}

export default App;
