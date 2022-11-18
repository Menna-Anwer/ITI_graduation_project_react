import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventIcon from "@mui/icons-material/Event";
import TableViewIcon from "@mui/icons-material/TableView";
import GradingIcon from '@mui/icons-material/Grading';
import { Route, Switch } from "react-router-dom";
import Lessone from "./../Teacher/Lesson/Lessone";
import Points from "./../Teacher/Points/Points";
import LogoutIcon from '@mui/icons-material/Logout';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Courses from "../Student/Courses/Courses";
import ExamsResult from "../Student/Exams Result/ExamsResult";
import TablePage from "../Student/Time Table/TimeTablePage";
import Events from "../Student/Events/EventsPage";
import TeacherTimeTable from "../Teacher/Time Table/TeacherTimeTable";
import "./sidebar.css"
import { useEffect } from "react";
import { axiosinstance } from "../Network/axiosinstance";
import { useDispatch } from "react-redux";
import { getUserAction } from "../Store/Actions/getUserAction";
import { useAuth } from "./auth";
const drawerWidth = 240;



const teacherRoutes = [
  {
    url:'lessones',
    title: 'Lessones',
    icon: <MenuBookIcon style={{ fontSize: "25px" }} />,
    comp: Lessone
  },
  {
    url:'grades',
    title: 'Grades',
    icon: <GradingIcon style={{ fontSize: "25px" }} />,
    comp: Points
  },
  {
    url:'timetable',
    title: 'Timetable',
    icon: <TableViewIcon style={{ fontSize: "25px" }} />,
    comp: TeacherTimeTable
  },
  {
    url:'events',
    title: 'Events',
    icon: <EventIcon style={{ fontSize: "25px" }} />,
    comp: Events
  }
]

const studentRoutes = [
  {
    url:'lessones',
    title: 'Lessones',
    icon: <MenuBookIcon style={{ fontSize: "25px" }} />,
    comp: Courses
  },
  {
    url:'results',
    title: 'Exam results',
    icon: <WorkspacePremiumIcon style={{ fontSize: "25px" }} />,
    comp: ExamsResult
  },
  {
    url:'events',
    title: 'Events',
    icon: <EventIcon style={{ fontSize: "25px" }} />,
    comp: Events
  },
  {
    url:'timetable',
    title: 'Timetable',
    icon: <TableViewIcon style={{ fontSize: "25px" }} />,
    comp: TablePage
  }
]

export default function PermanentDrawerLeft() {
  const [page, setPage] = React.useState('');
  const type = localStorage.getItem('type');
  const dispatch = useDispatch();
  const auth = useAuth();
  const history = useHistory();
  useEffect(() => {
    // try {
    //   const type = localStorage.getItem('type');
    //   const id = localStorage.getItem('id');

    //   if(type === 'student'){
    //     axiosinstance.get('/student/id/',{
    //       params:{
    //         id: id
    //       }
    //     }).then(res =>{
    //     dispatch(getUserAction(res.data))
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }, [])
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", overflow: "visible" }}>
        <CssBaseline />
        <AppBar
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h4" noWrap component="div">
              {page}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {
            type === 'teacher' ? 
            teacherRoutes.map((rout, index) => (
              <Link className="nav-link" to={`/${rout.url}`} key={index}>
              <ListItem>
                <ListItemButton onClick={() => {
                  setPage(rout.title);
                }}>
                  <ListItemIcon>
                    {rout.icon}
                  </ListItemIcon>
                  <ListItemText primary={rout.title} />
                </ListItemButton>
              </ListItem>
            </Link> 
            )) :
            studentRoutes.map((rout, index) => (
              <Link className="nav-link" to={`/${rout.url}`} key={index}>
              <ListItem>
                <ListItemButton onClick={() => {
                  setPage(rout.title);
                }}>
                  <ListItemIcon>
                    {rout.icon}
                  </ListItemIcon>
                  <ListItemText primary={rout.title} />
                </ListItemButton>
              </ListItem>
            </Link> 
            ))
          }
          <ListItem>
                <ListItemButton onClick={()=>{
                  auth.logout();
                  history.replace('/login')
                }}>
                  <ListItemIcon>
                  <LogoutIcon style={{ fontSize: "25px" }} />
                  </ListItemIcon>
                  <ListItemText primary={'Logout'} />
                </ListItemButton>
              </ListItem>
            {/* <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <h5>
                    <Link className="nav-link" to="/points">
                      <TableViewIcon style={{ fontSize: "25px" }} /> Points
                    </Link>
                  </h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <h5>
                    <Link className="nav-link" to="/event">
                      <EventIcon style={{ fontSize: "25px" }} />
                      Events
                    </Link>
                  </h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <h5>
                    <Link className="nav-link" to="/Courses">
                      <MenuBookIcon style={{ fontSize: "25px" }} /> Courses
                    </Link>
                  </h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <h5>
                    <Link className="nav-link" to="/TimeTable">
                      <TableViewIcon style={{ fontSize: "25px" }} /> Time Tabel
                    </Link>
                  </h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <h5>
                    <Link className="nav-link" to="/ExamsResult">
                      <WorkspacePremiumIcon style={{ fontSize: "25px" }} />
                      Exams Result
                    </Link>
                  </h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <h5>
                    <Link className="nav-link" to="/Events">
                      <EventIcon style={{ fontSize: "25px" }} /> Events
                    </Link>
                  </h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <h5>
                    <Link className="nav-link" to="/TeacherTimeTable">
                      <TableViewIcon style={{ fontSize: "25px" }} /> tTime
                      Tabel
                    </Link>
                  </h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem> */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />
          <Switch>
            {
            type === 'teacher' ? 
            teacherRoutes.map((rout, index) => (
              <Route path={`/${rout.url}`} exact component={rout.comp} key={index}/>
            )) : 
            studentRoutes.map((rout, index) => (
              <Route path={`/${rout.url}`} exact component={rout.comp} key={index}/>
            ))
            }
            {/* <Route path={"/lessones"} exact component={Lessone} />
            <Route path={"/grades"} exact component={Points} />
            <Route path={"/Courses"} exact component={Courses} />
            <Route path={"/ExamsResult"} exact component={ExamsResult} />
            <Route path={"/TimeTable"} exact component={TablePage} />
            <Route path={"/events"} exact component={Events} />
            <Route
              path={"/TeacherTimeTable"}
              exact
              component={TeacherTimeTable}
            /> */}
          </Switch>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
