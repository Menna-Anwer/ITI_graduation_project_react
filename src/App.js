import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PermanentDrawerLeft from './Components/SideBar';
import Store from './Store/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
         <PermanentDrawerLeft/>  
        </BrowserRouter>
      </Provider>
       
    </div>
  );
}

export default App;
