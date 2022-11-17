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
import {  Route, Switch } from 'react-router-dom';
import Lessone from './../Teacher/Lesson/Lessone';
import Points from './../Teacher/Points/Points';




const drawerWidth = 190;

export default function PermanentDrawerLeft() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex',overflow:"visible"  }}>
      <CssBaseline />
      <AppBar style={{hight:"100Px"}}
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Nav
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ width: drawerWidth, flexShrink: 0,
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
                   <h5> <Link className="nav-link"  to="#">
                   <AccountCircleIcon style={{fontSize:"25px"}} /> Profile</Link></h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
        </ListItem>
        <ListItem >
              <ListItemButton>
                <ListItemIcon>
                   <h5> <Link className="nav-link"  to="/lessone">
                   <MenuBookIcon style={{fontSize:"25px"}} /> Lessons</Link></h5>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
        </ListItem>
        <ListItem >
              <ListItemButton>
                <ListItemIcon>
                <h5> <Link className="nav-link"  to="/points">
                   <TableViewIcon style={{fontSize:"25px"}} /> Points </Link></h5>
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
         <Route path={"/lessone"} exact component={Lessone}/>
         <Route path={"/points"} exact component={Points}/>
      </Switch>
        
      </Box>
    </Box>
  </BrowserRouter>
    
  );
}