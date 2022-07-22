import { Avatar, Box, Grid, Typography } from "@mui/material"
import React from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
    },
avathar: {height : "210px", width : "210px" /*,mt : "10px", mb : "50px", ml : "175px"*/}
})

const About =()=>{
    return(
        <ThemeProvider theme={theme}>
        <Grid container>
            {/* <Grid item xs={12} sm={12} md={12} sx={{bgcolor : "#8699DA", display : "flex"}}> */}
                {/* <Box sx={{bgcolor : "#8699DA"}}> */}
                    <Grid item xs={12} sm={4} md={4} sx={{bgcolor : "#8699DA"}}>
                        <Box sx={{margin : "2%  20%"}}>
                        <Avatar sx={{height : 210, width : 210}} />
                        <Typography sx={{color : "#FFFFFF", fontSize : "32px"}}>manish malhoti</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} sx={{bgcolor : "#8699DA"}}>
                        hello
                    </Grid>

                {/* </Box> */}
            {/* </Grid> */}
        </Grid>
        </ThemeProvider>
    )

}

export default About