import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New note
      </Typography>

      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
