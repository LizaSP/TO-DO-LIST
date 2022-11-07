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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Route, Routes } from 'react-router-dom';
import SideBar from '../SideBar';
import MUINavBar from '../NavBar/MUINavBar';
import TasksPage from '../Tasks/TasksPage';
import CreateTask from '../Tasks/CreateTask';
import NoPage from '../NoPage';

const drawerWidth = 200;

export default function MainPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MUINavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1, bgcolor: 'background.default',
        }}
      >
        <Routes>
          <Route path="/allTasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<CreateTask />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        {/* <Typography paragraph>
          to dos will be here
        </Typography> */}
      </Box>
    </Box>
  );
}
