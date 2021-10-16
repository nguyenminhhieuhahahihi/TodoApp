import './App.css';
import react, {useState, useEffect} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Todo from './components/Todo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {About} from './components/About';
import {Home} from './components/Home';
import {MenuNgang} from './components/MenuNgang';
import {NotFound} from './components/NotFound';
import {Tds} from './components/Tds';

function App() {



//   const [inputText, setInputText] = useState("");
//   const [todos, setTodos] = useState([]); 
//   const  [status, setStatus] = useState("all");  
//   const [filteredTodos, setFilteredTodos]= useState([]);


//   useEffect(() =>{
//     getLocalTodos();
//   }, []);


//   useEffect(() =>{
    
//      filterHandler();
//      saveLocalTodos();
//   }, [todos, status]);

//   const filterHandler = () => {
//     switch(status){
//       case "completed":
//         setFilteredTodos(todos.filter(todo => todo.completed === true));
//         break;
//         case  "uncompleted":
//           setFilteredTodos(todos.filter(todo => todo.completed === false));
//         break;
//         default:
//          setFilteredTodos(todos);
//          break;


//     }
//   };


// const saveLocalTodos = () =>{
    
//       localStorage.setItem("todos",JSON.stringify(todos));
        
// };

//   const getLocalTodos =  () =>{
//     if(localStorage.getItem("todos") === null){
//       localStorage.setItem("todos", JSON.stringify([]));
//     }else{
//       let todoLocal = JSON.parse(localStorage.getItem("todos"));      
//       setTodos(todoLocal);
//     }
//   };

  



  return (
    <div className="App">

    <BrowserRouter>
      <MenuNgang/>

    <Switch>
    <Route exact path="/"  component={Tds} />
    <Route path="/about"  component={About} />
    {/* <Route path="/*"  component={NotFound} /> */}
    </Switch>
    </BrowserRouter>
    
   



        
       {/* <header>
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
       setTodos={setTodos} todos={todos} />  */}
    </div>

  );
};

export default App;
