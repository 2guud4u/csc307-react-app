// src/MyApp.js
import React, {useState, useEffect} from "react";
import Table from "./Table";
import Form from "./Form";
  
  function MyApp() {
    const [characters, setCharacters] = React.useState([
    ]);
    function removeOneCharacter(index) {
      let id = characters[index].id;
      console.log("deleting",id )
      deleteUser(id)
        .then((res) => {
          if(res.status === 204) {
            const updated = characters.filter((character) => {
              return character.id !== id;
            });
            setCharacters(updated);
          }
          return res.json();
        }).then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    function updateList(person) {
      postUser(person)
      .then((res) => {
        if(res.status === 201) {
          return res.json();
        }
      })
      .then((json) => {
        person.id = json.id;
        setCharacters([...characters, person])
      })
      .catch((error) => {
        console.log(error);
      })
    }
    function fetchUsers() {
      const promise = fetch("http://localhost:8000/users");
      return promise;
    }

    function deleteUser(id) {
      const promise = fetch(`Http://localhost:8000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
  
      return promise;
    }

    function postUser(person) {
      const promise = fetch("Http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
  
      return promise;
    }
    useEffect(() => {
      fetchUsers()
        .then((res) => res.json())
        .then((json) => setCharacters(json["users_list"]))
        .catch((error) => { console.log(error); });
    }, [] );

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={removeOneCharacter}/>
        <Form handleSubmit={updateList}/>
      </div>
    );
  }
export default MyApp;