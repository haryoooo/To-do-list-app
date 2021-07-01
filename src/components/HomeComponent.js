import React, { useEffect, useState } from "react";
import "./HomeComponent.css";
import { Spinner } from "react-bootstrap";
import ListComponent from "../components/ListComponent";
import InputToDoComponent from "./InputToDoComponent";
import firebase from "../firebase";

export default function HomeComponent() {
  const [isLoading, setisLoading] = useState(false);
  const [value, setValue] = useState([]);

  function getTodoList() {
    const firestore = firebase.database().ref("todolist");
    setisLoading(true)
    firestore.on("value", (response) => {
      const data = response.val();
      let todolist = [];
      for (let id in data) {
        todolist.push({
          id: id,
          todo: data[id].todo,
        });
      }
      setisLoading(false)
      setValue(todolist);
    });
  }

  useEffect(() => {
    getTodoList();
  }, []);

  if(isLoading){
    return (
      <div className="isLoading">
        <Spinner animation="border" />
      </div>
    );
  } else {
    return (
      <div className="Home">
        <h2>To-Do-List App</h2>
        <InputToDoComponent />
        {value.map((val) => {
          return <ListComponent id={val.id} todo={val.todo} />;
        })}
      </div>
    );
  }
}
