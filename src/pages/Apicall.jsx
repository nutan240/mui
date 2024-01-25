import React, { useState ,useEffect } from "react";
import { Box, Button, Grid, Stack, Card, Avatar ,CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/Apislice";

function Apicall() {
  const[loading , setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.api);
  console.log(state, "dfghjkl");
  const handleFetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    dispatch(fetchData());
  };
  
  return (
    <Box>
      <Stack>
        <Button
          sx={{ width: "20%", margin: "auto" }}
          onClick={handleFetchData}
          variant="contained"
        >
          Fetch data
        </Button>
        <Box sx={{textAlign:'center'}}> { loading &&<CircularProgress />}</Box>
       

      </Stack>
      <Box sx={{ width: "85%", margin: "auto" }}>
        <Stack spacing={1} direction={{ lg: "column" }}>
          <Grid
            container
            spacing={2}
            sx={{ alignItems: "flex-end", flexGrow: 1 }}
          >
            {state.data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    height: 360,
                    width: 350,
                    padding: 2,
                    boxShadow: 2,
                    bgcolor: "#dbdbdb99",
                    display: "flex",
                  }}
                  variant="outlined"
                >
                  <Stack spacing={1}>
                    <Stack>
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
    </Box>
  );
}

export default Apicall;
