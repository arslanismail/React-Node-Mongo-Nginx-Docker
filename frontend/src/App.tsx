import * as React from "react";
import { render } from "react-dom";
// Import components
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/ToDoList";
import ToDoDataService from './components/service'
// Import interfaces
import { TodoInterface } from "./interface";
import "./style.css";
const App: React.FC = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  React.useEffect(() => {
    // Update the document title using the browser API
      ToDoDataService.getAll().then((res)=>{
        setTodos(res.data)
      }).catch((err)=>{
        console.log('error',err)
      })
  },[setTodos]);

  // Creating new todo item
  function handleTodoCreate(todo: TodoInterface) {
    console.log('TODO:CREATE_CALL')
    const newTodosState: TodoInterface[] = [...todos];
    ToDoDataService.create(todo).then((res)=>{
      newTodosState.push(res.data.data);
      setTodos(newTodosState);
    }).catch((err)=>{
      console.log('response is error',err)
    });
    
   
  }
  // Update existing todo item
  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string | undefined
  ) {
    console.log('TODO:UPDATE_CALL')
    const newTodosState: TodoInterface[] = [...todos];
    console.log('update data',newTodosState);
    newTodosState.find((todo: TodoInterface) => todo._id === id)!.title =
      event.target.value;
    setTodos(newTodosState);
  }
  // Remove existing todo item
  function handleTodoRemove(id: string | undefined) {
    console.log('TODO:REMOVE_CALL')
    ToDoDataService.delete(id).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log('error',err)
    })
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo._id !== id
    );
    setTodos(newTodosState);
  }
  // Check existing todo item as completed
  function handleTodoComplete(id: string | undefined) {
    console.log('TODO:COMPLETE_CALL')
    const newTodosState: TodoInterface[] = [...todos];
    // Find the correct todo item and update its ‘isCompleted’ key
    const data ={
      isCompleted:!newTodosState.find((todo: TodoInterface) => todo._id === id)!.isCompleted
    };
    newTodosState.find((todo: TodoInterface) => todo._id === id)!.isCompleted =
      !newTodosState.find((todo: TodoInterface) => todo._id === id)!.isCompleted;
    ToDoDataService.update(id,data).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log('error in completing task', err)
    })
    setTodos(newTodosState);
  }
  return (
    <div className="App">
      <React.Fragment>
        <h2>ToDo APP</h2>
        <ToDoForm todos={todos} handleTodoCreate={handleTodoCreate} />
        <ToDoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={handleTodoComplete}
        />
      </React.Fragment>
    </div>
  );
};
export default App;
