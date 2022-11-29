import React from 'react';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import OneTask from '../OneTask';

export default function TasksList() {
  const tasks = useSelector((s) => s.tasks);
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={1}>
          {tasks?.map((task) => <OneTask key={task.id} task={task} />)}
        </Stack>
      </Box>
    </div>
  );
}
