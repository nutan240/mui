import { Avatar, Box, Button, TextField, Checkbox, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

function Loginpage() {
  return (
    <Box sx={{ marginTop: 20 }}>
      <Stack
        spacing={3}
        sx={{
          width: "40%",
          m: "auto",
          border: "2px solid #8080803b",
          borderRadius: 2,
          padding: 3,
          boxShadow: 2,
        }}
      >
        <Stack 
        alignItems="center"
        >
          <Avatar sx={{bgcolor:'#1976d2'}}>
            <LockOutlinedIcon />
          </Avatar>
        </Stack>

        <Box sx={{color:'#dbdbdb'}}><h2>sign in...</h2></Box>

        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          placeholder="enter username.."
        />
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          placeholder="enter password"
          type="password"
        />

        <FormControlLabel
          control={<Checkbox name="gilad" />}
          label="Show password"
        />
        <Button variant="contained">Login</Button>
      </Stack>
    </Box>
  );
}

export default Loginpage;
