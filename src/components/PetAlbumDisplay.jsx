import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import MoodBadIcon from '@mui/icons-material/MoodBad';

const centeredStyle ={
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  alignSelf: "center",
  padding: 40
}

const theme = createTheme({
  typography: {
    // fontFamily: ['"Segoe UI Emoji"',].join(','),
    // fontFamily: "Shadows Into Light",

  },
});

export default function Album(props) {
  // console.log("testing page props", props.data.data[4].attributes.descriptionText);

  function truncate(input) {
    if (input === undefined) {
      return "To be updated!";
    } else if (input.length > 200) {
      return input.substring(0, 200) + "...";
    }
    return input;
  }
  return (
    <div>
      {props.data.data !== undefined ? (
        <ThemeProvider theme={theme}>
          <main>
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="md">
                <Typography
                  component="h2"
                  variant="h3"
                  align="center"
                  color="text.primary"
                >
                  Your special dogs!
                </Typography>
              </Container>
            </Box>
            <Container sx={{ py: 0, }} maxWidth="lg">
              <Grid container spacing={5}>
                {props.data.data.map((e, i) => (
                  <Grid item key={e.id} xs={10} sm={6} md={3}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          pt: "10%",
                          
                        }}
                        image={e.attributes.pictureThumbnailUrl}
                        alt=""
                      />
                      <CardContent sx={{ flexGrow: 10 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {e.attributes.name}
                        </Typography>
                        <Typography>
                          {truncate(e.attributes?.descriptionText)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          to={`/findpets/${e.attributes.name}/${e.id}/${i}/${props.id}`}
                        >
                          <Button size="small">View</Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
      ) : (
        <>
        <h4 style={centeredStyle}>
        <MoodBadIcon sx= {{p: 1, justifyContent: "center",}}/>
          Sorry! We are unable to find pets from this pet rescue... Try another
          centre!
        </h4>
        </>
      )}
    </div>
  );
}
