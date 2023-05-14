import logo from './logo.svg';
import './App.css';
import  AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {
  return (
    <div className="App">
     <h1>To do list </h1>
     <AddTask />
     <ListTask />
    </div>
  );
}

export default App;
