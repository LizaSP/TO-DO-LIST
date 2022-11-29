import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import OneTaskInput from '../OneTaskInput/OneTaskInput';
import TasksList from '../TasksList/TasksList';
// import { fetchNotes } from '../../redux/actions/notesAction';

export default function TasksPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  React.useEffect(() => {
    dispatch({ type: 'FETCH_TASKS', payload: user?.id });
  }, []);
  const tasks = useSelector((s) => s.tasks);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={16}>
        <Grid item xs={7} sx={{ mt: '5em', pr: '1em' }}>
          <TasksList />
        </Grid>
        {tasks?.length
          ? (
            <Grid item xs={9} sx={{ backgroundColor: '#ededed', height: '101vh' }}>
              <Box sx={{ p: '1em 1em 0 1em' }}>
                <OneTaskInput />
              </Box>
            </Grid>
          ) : (
            <div style={{ position: 'relative', minHeight: 'calc(100vh - 70px)' }}>
              <h2
                style={{
                  width: '10em', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                }}
              >
                You have no tasks.
              </h2>
            </div>
          )}
      </Grid>
    </Box>
  );
}
