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
import { BrowserRouter, Link, NavLink, useHistory, useLocation } from "react-router-dom";
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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from "./auth";
import ProfileHolder from "../Profile/Profile";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";

const drawerWidth = 240;



const teacherRoutes = [
  {
    url: 'profile',
    title: 'Profile',
    icon: <AccountCircleIcon style={{ fontSize: "25px" }} />,
    comp: ProfileHolder
  },
  {
    url: 'lessones',
    title: 'Lessones',
    icon: <MenuBookIcon style={{ fontSize: "25px" }} />,
    comp: Lessone
  },
  {
    url: 'grades',
    title: 'Grades',
    icon: <GradingIcon style={{ fontSize: "25px" }} />,
    comp: Points
  },
  {
    url: 'timetable',
    title: 'Timetable',
    icon: <TableViewIcon style={{ fontSize: "25px" }} />,
    comp: TeacherTimeTable
  },
  {
    url: 'events',
    title: 'Events',
    icon: <EventIcon style={{ fontSize: "25px" }} />,
    comp: Events
  }
]

const studentRoutes = [
  {
    url: 'profile',
    title: 'Profile',
    icon: <AccountCircleIcon style={{ fontSize: "25px" }} />,
    comp: ProfileHolder
  },
  {
    url: 'lessones',
    title: 'Lessones',
    icon: <MenuBookIcon style={{ fontSize: "25px" }} />,
    comp: Courses
  },
  {
    url: 'results',
    title: 'Exam results',
    icon: <WorkspacePremiumIcon style={{ fontSize: "25px" }} />,
    comp: ExamsResult
  },
  {
    url: 'events',
    title: 'Events',
    icon: <EventIcon style={{ fontSize: "25px" }} />,
    comp: Events
  },
  {
    url: 'timetable',
    title: 'Timetable',
    icon: <TableViewIcon style={{ fontSize: "25px" }} />,
    comp: TablePage
  }
]

export default function PermanentDrawerLeft(props) {
  const [page, setPage] = React.useState('');
  const type = localStorage.getItem('type');
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  useEffect(() => {
    if(location.pathname === "/" ){
      history.push('/profile');
    }
  },[])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h5" noWrap component="div">
              {page}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          variant="temporary"
          anchor="left"
        >
          <Toolbar >
          <Typography variant="h3" noWrap component="div" className="text-center w-100 text-primary">
              Agial
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {
              type === 'teacher' ?
                teacherRoutes.map((rout, index) => (
                  <NavLink className="nav-link" activeClassName="active" to={`/${rout.url}`} key={index}>
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
                  </NavLink>
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
              <ListItemButton onClick={() => {
                auth.logout();
                history.replace('/login')
              }}>
                <ListItemIcon>
                  <LogoutIcon style={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <Toolbar >
          <Typography variant="h3" noWrap component="div" className="text-center w-100 text-primary">
              Agial
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {
              type === 'teacher' ?
                teacherRoutes.map((rout, index) => (
                  <NavLink className="nav-link" activeClassName="active" to={`/${rout.url}`} key={index}>
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
                  </NavLink>
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
              <ListItemButton onClick={() => {
                auth.logout();
                history.replace('/login')
              }}>
                <ListItemIcon>
                  <LogoutIcon style={{ fontSize: "25px" }} />
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 , width: { sm: `calc(100% - ${drawerWidth}px)` }}}
        >
          <Toolbar />
          {/* <Switch> */}
            {
              type === 'teacher' ?
                teacherRoutes.map((rout, index) => (
                  <Route path={`/${rout.url}`} exact component={rout.comp} key={index} />
                )) :
                studentRoutes.map((rout, index) => (
                  <Route path={`/${rout.url}`} exact component={rout.comp} key={index} />
                ))
            }
          {/* </Switch> */}
        </Box>
      </Box>
  );
}
