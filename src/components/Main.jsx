import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import ToolBar from '@mui/material/Toolbar'


const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#a5fafa',
      },
    },
  });

function Main() {
    return (
        <>
            {/* <p>This is going to be the homepage with an img</p>
            <Link to="/FindPets" >click me to find pets</Link> */}
        <ToolBar />
        <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: 700 }}>
        <CssBaseline />
        <Grid  className="picture"
          item
          xs={false}
          sm={9}
          md={9}
          sx={{
            backgroundImage: 'url(https://thumbs.dreamstime.com/b/banner-hide-happy-dog-puppy-winking-one-eye-smiling-colored-blue-backgorund-closed-eyes-201151108.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundHeight: 80,
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={3} md={3} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h4" variant="h6">
            “An animal’s eyes have the power to speak a great language.” Martin Buber, German Philosopher
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 5 }}>
            <Link to="/FindPets" style={{ textDecoration: 'none' }} >
              <Button  
                color="secondary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                click me to find pets
              </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>



        </>

    )
}

export default Main
