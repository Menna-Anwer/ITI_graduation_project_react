import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Components/auth';
import { RequireAuth } from './Components/requierAuth';
import PermanentDrawerLeft from './Components/SideBar';
import Login from './FormLogin/Login';
import Store from './Store/Store';
function App() {
  const type = localStorage.getItem('type');
  return (
    <AuthProvider>
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
         <Switch>
          <Route path={"/login"} exact component={Login}/>
           {/* <Route path={"/"} component={PermanentDrawerLeft}/> */}
           <RequireAuth path='/'>
              <PermanentDrawerLeft/>
           </RequireAuth>
         </Switch>
        </BrowserRouter>
      </Provider>
    </div>
    </AuthProvider>
  );
}

export default App;
