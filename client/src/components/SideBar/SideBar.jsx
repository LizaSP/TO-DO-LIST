import * as React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SideBar({ drawerWidth }) {
  const menu = [
    { text: 'All Tasks', icon: <InboxIcon />, link: '/allTasks' },
    { text: 'Albums', icon: <InboxIcon />, link: '/albums' },
    { text: 'Favourites', icon: <InboxIcon />, link: '/favourites' },
    { text: 'Tags', icon: <InboxIcon />, link: '/tags' },
  ];
  const menu2 = [
    { text: 'Create Task', icon: <EditIcon />, link: '/tasks/new' },
    { text: 'Create Album', icon: <EditIcon />, link: '/albums/new' },
    { text: 'Create Tag', icon: <EditIcon />, link: '/tags/new' },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
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
        {menu.map((el) => (
          <ListItem component={Link} to={el.link} key={el.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {el.icon}
              </ListItemIcon>
              <ListItemText primary={el.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menu2.map((el) => (
          <ListItem component={Link} to={el.link} key={el.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {el.icon}
              </ListItemIcon>
              <ListItemText primary={el.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
