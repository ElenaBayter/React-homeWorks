import "./App.css";
import CommentsList from "./components/CommentsList";
import TemperatureConverter from "./components/TemperarureConverter";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <CommentsList />
      <TemperatureConverter />
      <ToDoList />
    </div>
  );
}

export default App;
