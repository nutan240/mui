import { Padding } from "@mui/icons-material";
import { Box, Button, Stack ,TextField} from "@mui/material";
import React from "react";

function Formpage() {
  return (
    <form>
      <Stack 
      sx={{width:'70%',
      margin:'auto',
      border: "2px solid #8080803b",
      borderRadius:2
      }}
      alignContent='center'
      >
        <Box sx={{textAlign:'center'}}><h2>Create an Account </h2></Box>
        <Box sx={{textAlign:'center'}}>Fill all the mandatory fields to Create an account . </Box>
        <Stack 
spacing={3}
sx={{
          borderRadius: 2,
          padding: 3,
          boxShadow: 2,}}
        >
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          type="text"
          placeholder="enter username.."
        />
        <TextField
          id="outlined-basic"
          label="email id..."
          variant="outlined"
          type="email"
          placeholder="enter email id.."
        /><TextField
          id="outlined-basic"
          label="phone no."
          variant="outlined"
          placeholder="enter phone no."
        />
       <Button variant="contained">Submit</Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default Formpage;
