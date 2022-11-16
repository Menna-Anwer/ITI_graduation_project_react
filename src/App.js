import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PermanentDrawerLeft from './Components/SideBar';
import Login from './FormLogin/Login';
import Store from './Store/Store';


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
         <Switch>
           <Route path={"/"} component={PermanentDrawerLeft}/>
    
           <Route path={"/login"} exact component={Login}/>
         </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
