import React, { useState } from "react";
import './InputToDoComponent.css'
import {InputGroup, Button, FormControl} from 'react-bootstrap'
import firebase from "../firebase"

export default function InputToDoComponent() {
  const [input, setInput] = useState("")
  
  function addInputData(){
    const firestore = firebase.database().ref("todolist")

    let data = {
      todo: input
    }

    firestore.push(data)
    setInput("")
  }

  return (
    <div className="Input">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Input Task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>setInput(e.target.value)}
          value={input}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={()=>addInputData()}>Add</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}
