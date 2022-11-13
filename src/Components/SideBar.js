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
import { Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventIcon from '@mui/icons-material/Event';
import TableViewIcon from '@mui/icons-material/TableView';


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Nav
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ width: drawerWidth,  flexShrink: 0,
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
                   <h3> <Link className="nav-link"  to="/home">
                   <AccountCircleIcon style={{fontSize:"30px"}} /> Profile</Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
        </ListItem>
        <ListItem >
              <ListItemButton>
                <ListItemIcon>
                   <h3> <Link className="nav-link"  to="/home">
                   <MenuBookIcon style={{fontSize:"30px"}} /> Lessons</Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
        </ListItem>
        <ListItem >
              <ListItemButton>
                <ListItemIcon>
                   <h3> <Link className="nav-link"  to="/home">
                   <EventIcon style={{fontSize:"30px"}} />Events </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
        </ListItem>
        <ListItem >
              <ListItemButton>
                <ListItemIcon>
                <h3> <Link className="nav-link"  to="/home">
                   <TableViewIcon style={{fontSize:"30px"}} />Time Tabel </Link></h3>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
        </ListItem>

    
        </List>
      </Drawer>
    </Box>
  );
}