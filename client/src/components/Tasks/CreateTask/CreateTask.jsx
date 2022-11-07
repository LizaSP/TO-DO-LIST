import { IconButton } from '@mui/material';
import React, { useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function CreateTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const submitHandler = async (e, input) => {
    e.preventDefault();
    dispatch({ type: 'FETCH_ADD_TASK', payload: input });
    navigate('/allTasks');
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            ADD NEW TASK
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => submitHandler(e, Object.fromEntries(new FormData(e.target)))}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  type="text"
                  label="Title"
                  name="title"
                  // value={inputs.title}
                  // onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="body"
                  label="Task..."
                  type="text"
                  id="body"
                  // value={inputs.body}
                  // onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
// <>
//   <div style={{ height: '5em' }} />
//   <from onSubmit={(e) => submitHandler(e, inputs)}>
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       <input
//         className="input is-rounded"
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={inputs.title}
//         onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
//         style={{
//           backgroundColor: '#ededed', border: 'none', boxShadow: 'none', fontWeight: 'bold', fontSize: 'larger', width: '70%',
//         }}
//       />
//       <IconButton type="submit" edge="end" aria-label="comments">
//         <EditIcon />
//       </IconButton>
//     </div>
//     <br />
//     <br />
//     <textarea
//       className="textarea"
//       placeholder="Type here..."
//       rows="38"
//       name="body"
//       value={inputs.body}
//       onChange={(e) => {
//       // console.log(3, inputs);
//         setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//       }}
//       style={{
//         backgroundColor: '#ededed', border: 'none', boxShadow: 'none', width: '90%', minWidth: '90%',
//       }}
//     />
//   </from>
// </>
