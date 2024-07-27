import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CharacterItem = ({ image, name, gender, status, id }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/characters/${id}`);
  };

  return (
    <Card sx={{ width: 250, cursor: "pointer" }} onClick={navigateHandler}>
      <CardMedia sx={{ height: 200 }} image={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          Gender: {gender}
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          Status: {status}
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          Episodes: ???
        </Typography>
      </CardContent>
    </Card>
  );
};
