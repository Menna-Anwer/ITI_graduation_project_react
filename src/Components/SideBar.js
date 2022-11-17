import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BrowserRouter, Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventIcon from '@mui/icons-material/Event';
import TableViewIcon from '@mui/icons-material/TableView';
import { Route, Switch } from 'react-router-dom';
import Lessone from './../Teacher/Lesson/Lessone';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Courses from '../Student/Courses/Courses';
import Arabic from '../Student/Courses/Subjects/Arabic';
import English from '../Student/Courses/Subjects/English';
import Mathematics from '../Student/Courses/Subjects/Mathematics';
import Sciences from '../Student/Courses/Subjects/Sciences';
import ExamsResult from '../Student/Exams Result/ExamsResult';
import SubjectsTeacher from '../Student/SubjectsTeachers/SubjectsTeachers';
import TablePage from '../Student/Time Table/TimeTablePage';
import Events from '../Student/Events/EventsPage';
import TeacherTimeTable from '../Teacher/Time Table/TeacherTimeTable';

const drawerWidth = 190;

export default function PermanentDrawerLeft() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', overflow: "visible" }}>
        <CssBaseline />
        <AppBar style={{ hight: "100Px" }}
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Nav
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer sx={{
          width: drawerWidth, flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h5> <Link className="nav-link" to="/home">
                    <AccountCircleIcon style={{ fontSize: "25px" }} /> Profile</Link></h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h5> <Link className="nav-link" to="/lessone">
                    <MenuBookIcon style={{ fontSize: "25px" }} /> Lessons</Link></h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h5> <Link className="nav-link" to="/event">
                    <EventIcon style={{ fontSize: "25px" }} />Events </Link></h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h5> <Link className="nav-link" to="/home">
                    <TableViewIcon style={{ fontSize: "25px" }} />Time Tabel </Link></h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h3> <Link className="nav-link" to="/Courses">
                    <MenuBookIcon style={{ fontSize: "30px" }} /> Courses </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h3> <Link className="nav-link" to="/TimeTable">
                    <TableViewIcon style={{ fontSize: "30px" }} /> Time Tabel </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h3> <Link className="nav-link" to="/Subject">
                    <CollectionsBookmarkIcon style={{ fontSize: "30px" }} /> Subjects </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h3> <Link className="nav-link" to="/ExamsResult">
                    <WorkspacePremiumIcon style={{ fontSize: "30px" }} /> Exams Result </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h3> <Link className="nav-link" to="/Events">
                    <EventIcon style={{ fontSize: "30px" }} /> Events </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem >
              <ListItemButton>
                <ListItemIcon>
                  <h3> <Link className="nav-link" to="/TeacherTimeTable">
                    <TableViewIcon style={{ fontSize: "30px" }} /> Teach Time Tabel </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Switch>
            <Route path={"/lessone"} exact component={Lessone} />
            <Route path={"/Courses"} exact component={Courses} />
            <Route path={"/Arabic"} exact component={Arabic} />
            <Route path={"/English"} exact component={English} />
            <Route path={"/Mathematics"} exact component={Mathematics} />
            <Route path={"/Sciences"} exact component={Sciences} />
            <Route path={"/Subject"} exact component={SubjectsTeacher} />
            <Route path={"/ExamsResult"} exact component={ExamsResult} />
            <Route path={"/TimeTable"} exact component={TablePage} />
            <Route path={"/Events"} exact component={Events} />
            <Route path={"/TeacherTimeTable"} exact component={TeacherTimeTable} />

          </Switch>

        </Box>
      </Box>
    </BrowserRouter>

  );
}