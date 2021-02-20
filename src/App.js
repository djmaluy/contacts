import React from "react";
import { Contacts } from "./components/Contacts";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          Contacts
        </Typography>
      </Grid>
      <Contacts />
    </Container>
  );
}

export default App;
