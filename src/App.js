import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PermanentDrawerLeft from './Components/SideBar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <PermanentDrawerLeft></PermanentDrawerLeft>
            <Switch>
          
            </Switch>
        </BrowserRouter>
       {/* <Buttons/> */}
       
    </div>
  );
}

export default App;
