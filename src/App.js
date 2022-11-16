import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PermanentDrawerLeftStudent from './Components/SideBarStudent';
import PermanentDrawerLeft from './Components/SideBar';
import Courses from './Student/Courses/Courses';
import Arabic from './Student/Courses/Subjects/Arabic';
import English from './Student/Courses/Subjects/English';
import Mathematics from './Student/Courses/Subjects/Mathematics';
import Sciences from './Student/Courses/Subjects/Sciences';
import ExamsResult from './Student/Exams Result/ExamsResult';
import SubjectsTeacher from './Student/SubjectsTeachers/SubjectsTeachers';
import TablePage from './Student/Time Table/TimeTablePage';
import Store from './Store/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
     <Provider store={Store}>
      <BrowserRouter>
        <PermanentDrawerLeft></PermanentDrawerLeft>
        <PermanentDrawerLeftStudent></PermanentDrawerLeftStudent>
        <Switch>
          <Route path={"/Courses"} exact component={Courses} />
          <Route path={"/Arabic"} exact component={Arabic} />
          <Route path={"/English"} exact component={English} />
          <Route path={"/Mathematics"} exact component={Mathematics} />
          <Route path={"/Sciences"} exact component={Sciences} />
          <Route path={"/Subject"} exact component={SubjectsTeacher} />
          <Route path={"/ExamsResult"} exact component={ExamsResult} />
          <Route path={"/TimeTable"} exact component={TablePage} />
        </Switch>
      </BrowserRouter>
     </Provider>
      {/* <Buttons/> */}
    </div>
  );
}

export default App;
