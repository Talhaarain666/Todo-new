import logo from './logo.svg';
import './App.css';
import { setState, useState } from "react";

function App() {

  const [todochk, setTodo] = useState("");
  const [todoall, setTodoAll] = useState([]);


  let addTodo = () => {
    if (!todochk) {

    } else {
      setTodoAll([...todoall, todochk])
      setTodo("");
    }

  }

  let delTodo = (id) => {

    const updatedItems = todoall.filter((elem, ind) => {
      return ind != id;

    })
    setTodoAll(updatedItems)
  }

  let deleteAll = () => {

    setTodoAll([]);

  }

  let editTodo = (val, id) => {

    let a = prompt("Edit Value", val)
    
    setTodoAll([a])

  }

  return (
    <div className="App">
      <header className="App-header">
  
        <input placeholder='Write Something' onChange={(e) => setTodo(e.target.value)} value={todochk} />
        <button onClick={addTodo}>AddTodo</button>
        <button onClick={deleteAll}>DeleteAll</button>

        <p>{todochk}</p>

        {
          todoall.map((val, ind) => {
            return (
              <div key={ind}>
                <p>{val}</p>
                <button onClick={() => editTodo(val, ind)}>Edit</button>
                <button onClick={() => delTodo(ind)}>Delete</button>
              </div>
            )

          })
        }


      </header>
    </div>
  );
}

export default App;
