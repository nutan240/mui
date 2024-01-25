
import React from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchapi } from '../redux/slice/Apislice';

function Apicall() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api);
  console.log('state', state);

  return (
    <Box>
      <Button onClick={() => dispatch(fetchapi())} variant="contained">
        Fetch data
      </Button>
      {state.data.map((e) => (
        <li key={e.id}>{` name : ${e.name}`}</li>
      ))}

    </Box>
  );
}

export default Apicall;
