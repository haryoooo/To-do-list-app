import React, { useState } from "react";
import "./ListComponent.css";
import { Button } from "react-bootstrap";
import firebase from "../firebase"

export default function ListComponent(props) {
  const [value, setValue] = useState("");
  const [id, setId] = useState("")
  const [show, setShow] = useState(false);

  function updateTodo(){
    const firestore = firebase.database().ref("todolist").child(id)
    firestore.update({
      todo: value
    })
    setShow(false)
    setValue("")
  }

  function deleteTodo(id) {
    const firestore = firebase.database().ref("todolist").child(id)
    firestore.remove()
  }

  function handleClick() {
    setShow(true);
    setValue(props.todo)
    setId(props.id)
  }

  if (show === true) {
    return (
      <div className="ListComponent">
        <div className="Text">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
        <div className="Buttons">
          <Button size="sm" variant="dark" onClick={updateTodo}>
            Save
          </Button>
          {"  "}
          <Button size="sm" variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="ListComponent">
          <h6 className="Text" onChange={(e) => setValue(e.target.value)}>{props.todo}</h6>
          <div className="Buttons">
            <Button size="sm" variant="success" onClick={handleClick}>
              Edit
            </Button>
            {"  "}
            <Button size="sm" variant="danger" onClick={()=>deleteTodo(props.id)}>
              Delete
            </Button>
          </div>
        </div>
      </>
    );
  }
}
