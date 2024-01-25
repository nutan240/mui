import { Avatar, Box, Card, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Cardpage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      console.log(res, "nutan");
    });
  }, []);

  return (
    <Box sx={{width:"85%" , margin:'auto'}}>
    <Stack spacing={1} direction={{ lg: "column" }}>
      <Grid container spacing={2} sx={{alignItems:'flex-end',
       flexGrow: 1}}>
        {data.map((item) => (
          <Grid  item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                height:360,
                width: 350,
                padding: 2,
                boxShadow: 2,
                bgcolor:'#dbdbdb99',
                display:'flex'
              }}
              variant="outlined"
            >
              <Stack spacing={1}>
                <Stack >
                  <Avatar sx={{ bgcolor: "#1976d2" }}>
                  {item.name.charAt(0)}
                  </Avatar>
                </Stack>
                <h3>Id: {item.id}</h3>
                <h3>Name: {item.name}</h3>
                <h3>Username: {item.username}</h3>
                <h3>Email: {item.email}</h3>
                <h3>Phone no.: {item.phone}</h3>
                <h3>Address: {item.address.street}</h3>
                <h3>Company: {item.company.catchPhrase}</h3>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
    </Box>
  );
}

export default Cardpage;
