import { Container, TextField, Typography, styled } from "@mui/material";
import React from "react";

export const SearchBar = ({ onChange, value }) => {
  return (
    <Container>
      <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
        Search Character:
      </Typography>
      <TextField
        placeholder="Search character by name... "
        fullWidth
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};
