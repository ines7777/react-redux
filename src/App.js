
import './App.css';
import  AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import { Card } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Card variant="outlined">
      <h1>To do list </h1>
     <AddTask />
     <ListTask />
    </Card>
    
    </div>
   
  );
}

export default App;
