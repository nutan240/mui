import { Button } from '@mui/base';
import { Stack ,TextField} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function Adduser() {
    const [name , setName] = useState('');
   

    const handleChange =(e)=>{
        e.preventDefault();
        
        setName(e.target.value);
     
      
    };

    const submitForm =(e)=>{
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/users' ,{name:name})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        });
        
        setName({name:""})
    };

  return (
    <>
        <Stack>
            <h3>Add Users</h3>
            <Stack>
            <form onSubmit={submitForm}>
         <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
        name='name'
          type="text"
          placeholder="enter username.."
          value={name.name}
          onChange={handleChange}
        />
        <Button type='submit'> Add</Button>
        </form>
  
            </Stack>
        </Stack>
    </>
  )
}

export default Adduser