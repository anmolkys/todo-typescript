import { useRef, useState } from "react";
import {item} from "./components/item"
import "./app.css"

const App:React.FC = () =>{

  const inputRef = useRef<HTMLInputElement>(null);

  const [todo,setTodo] = useState<string>("");
  const [list,setList] = useState<item[]>([]);
  

  const handler = (e:any) =>{
    setTodo(e.target.value);
  }

  const handleAdd = (event:React.FormEvent) => {
    event.preventDefault();
    if(todo){
      setList([...list,{id:Date.now(),todo:todo,isDone:false}]);
    }
    setTodo("");
  }

  return (
  <>
    <div className="main">
      <div className="container">
        <h1>Welcome to Todo</h1>
        <input ref={inputRef} type="text" placeholder="Enter Task" value={todo} onChange={handler}></input>
        <button onClick={(e)=> handleAdd(e)}>Save</button>
        <ul>
        {list.map((e)=>(
          <li>{e.todo}</li>
        ))}
        </ul>
      </div>
    </div>
  </>
  )
};

export default App;
