import './App.css';
import react, {useState, useEffect} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Todo from './components/Todo';




function App() {



  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); 
  const  [status, setStatus] = useState("all");  
  const [filteredTodos, setFilteredTodos]= useState([]);


  useEffect(() =>{
    getLocalTodos();
  }, []);


  useEffect(() =>{
    
     filterHandler();
     saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case  "uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
         setFilteredTodos(todos);
         break;


    }
  };


const saveLocalTodos = () =>{
    
      localStorage.setItem("todos",JSON.stringify(todos));
        
};

  const getLocalTodos =  () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));      
      setTodos(todoLocal);
    }
  };

  



  return (
    <div className="App">


        
       <header>

      
      <h1>TO DO APP</h1>
      </header> 
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      
      />
      <TodoList filteredTodos={filteredTodos}
       setTodos={setTodos} todos={todos} /> 
    </div>

  );
}

export default App;
