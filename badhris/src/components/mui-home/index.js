import { bgcolor, Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../mui-appbar";
import Statistics from "../mui-statistics";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { authTokenAction } from "../../redux/actions";
import { useParams, useNavigate, useMatch } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authToken) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getUserSummary();
  }, []);

  const getUserSummary = () => {
    const requestOptions = {
      headers: {
        "UserId": `${props.userId}`,
        "token": `${props.authToken}`,
      }
    };
    fetch("https://lifograf.com/lg_api/getUsrSummary", requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.error) {
          const responseMessage = responseJSON.message.split("-");
          console.log(responseMessage[0]);
        } else {
          
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {props.authToken && (
        <Box>
          <ResponsiveAppBar />
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            {/* */}
            <Statistics />
            {/* </Box> */}
          </Grid>
        </Box>
      )}
    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    authToken: state.commonState.authToken,
    userId: state.commonState.userId,
  };
};

export default connect(mapStateToProp, { authTokenAction })(Home);
