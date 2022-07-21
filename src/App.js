import './App.css';
import React, {useEffect, useState} from 'react';
import profileImg from './img/myself.jpg'
import logo from './img/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as d3 from 'd3';
import data from './data.csv'
import Papa from 'papaparse'

function App() {
  // let d = {}
  // d3.csv(data, function(data) {
  //   // dict[[data['make a choice']]] = data['faire un choix']
  //   let key = "make a choice"
  //   let val = 'faire un choix'
  //   Object.assign(d, {[data[key]]: data[val]})
  //   setDict(d)
  // })

  const[word, setWord] = useState("")
  const[message, setMessage] = useState("")
  
  let dict = {
    "make a choice": "faire un choix",
    'make an offer':'faire une offre',
    'make a commitment':'prendre un engagement',
    'make one\'s escape':'prendre la fuite',
    'make a promise':'faire une promesse',
    'make a step':'faire un pas',
    'have an experience':'faire une expérience',
    'make a gain':'faire un gain',
    'are part of':'faire partie de',
    'make a decision': 'prendre une décision'
  }

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
