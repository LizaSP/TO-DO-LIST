/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import {
  Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../../../redux/reducers/selectedReducer';

export default function OneTask({ task }) {
  const dispatch = useDispatch();
  const tasks = useSelector((s) => s.tasks);
  const user = useSelector((state) => state.user);

  const deleteHandler = async (e) => {
    // e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'FETCH_DELETE_TASK', payload: task?.id });
    dispatch({ type: 'FETCH_TASKS', payload: user?.id });
    dispatch(setSelected(tasks[0].id));
  };

  const card2 = (
    <ListItem
      disablePadding
      secondaryAction={(
        <IconButton onClick={deleteHandler} edge="end" aria-label="comments">
          <DeleteIcon />
        </IconButton>
    )}
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon onClick={() => { dispatch({ type: 'FETCH_UPDATE_CHECKED', payload: task?.id }); }}>
          <Checkbox
            edge="start"
            checked={task?.checked}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': task?.id }}
          />
        </ListItemIcon>
        <ListItemText sx={{ textDecoration: task?.checked ? 'line-through' : '' }} id={task?.id}>
          <CardContent>
            <Typography variant="h5" component="div">
              {task?.title}
            </Typography>
            <Typography variant="body2">
              {task?.body}
            </Typography>
          </CardContent>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div>
      <Box sx={{ minWidth: 275, ml: '1em' }}>
        <Card onClick={() => dispatch(setSelected(task?.id))} variant="outlined">{card2}</Card>
      </Box>
    </div>
  );
}
