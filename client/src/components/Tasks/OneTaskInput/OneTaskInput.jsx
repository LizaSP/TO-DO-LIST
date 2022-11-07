import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../../../redux/reducers/selectedReducer';
// import { fetchNotes, updateNoteAsync } from '../../redux/actions/notesAction';
// import useDebounce from '../../useDebaunce';

export default function OneTaskInput() {
  const selected = useSelector((s) => s.selected);
  const tasks = useSelector((s) => s.tasks);
  const user = useSelector((state) => state.user);

  const [task, setTask] = useState({});
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    // console.log(selected);
    setTask(tasks.filter((el) => el.id === selected)[0]);
  }, [selected, tasks]);

  const editHandler = async (e) => {
    dispatch({ type: 'FETCH_UPDATE_TASK', payload: { task, id: task.id } });
    dispatch({ type: 'FETCH_TASKS', payload: user?.id });
  };

  const deleteHandler = async (e) => {
    e.stopPropagation();
    dispatch({ type: 'FETCH_DELETE_TASK', payload: task.id });
    dispatch({ type: 'FETCH_TASKS', payload: user?.id });
    dispatch(setSelected(tasks[0].id));
  };

  return (
    <>
      <div style={{ height: '5em' }} />
      {selected && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              className="input is-rounded"
              type="text"
              name="title"
              placeholder="Title"
              value={task?.title}
              onChange={(e) => setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              style={{
                backgroundColor: '#ededed', border: 'none', boxShadow: 'none', fontWeight: 'bold', fontSize: 'larger', width: '70%',
              }}
            />
            <div>
              <IconButton onClick={editHandler} edge="end" aria-label="comments">
                <EditIcon />
              </IconButton>
              <IconButton onClick={deleteHandler} edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
          <br />
          <br />
          <textarea
            className="textarea"
            placeholder="Type here..."
            rows="38"
            name="body"
            value={task?.body}
            onChange={(e) => {
              // console.log(3, inputs);
              setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            style={{
              backgroundColor: '#ededed', border: 'none', boxShadow: 'none', width: '90%', minWidth: '90%',
            }}
          />
        </div>
      )}
    </>
  );
}
