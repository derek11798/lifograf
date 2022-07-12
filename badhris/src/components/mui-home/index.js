import { bgcolor, Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../mui-appbar";
import Statistics from "../mui-statistics";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


const Home = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Grid item xs={12} sm={6} md={6} sx={{display : "flex", justifyContent : "flex-end"}}>
        {/* */}
          <Statistics />
        {/* </Box> */}
      </Grid>
    </Box>
  );
};
export default Home;
