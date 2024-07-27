import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CharacterDetails = () => {
  const { characterId } = useParams();
  const [oneCharacter, setOneCharacter] = useState({});
  const navigate = useNavigate();

  const getOneCharacter = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/" + characterId
      );
      const data = await response.json();
      setOneCharacter(data);
    } catch (error) {}
  };

  useEffect(() => {
    getOneCharacter();
  }, []);

  const navigateHandler = () => {
    navigate("/characters");
  };

  return (
    <div>
      <Button variant="contained" onClick={navigateHandler}>
        home page
      </Button>
      <div>
        <h1>{oneCharacter.name}</h1>
        <img src={oneCharacter.image} alt={oneCharacter.name} />
        <h2>
          {oneCharacter.status} || {oneCharacter.gender}{" "}
        </h2>
      </div>
      <div>
        <h1>episode</h1>
        {oneCharacter?.episode?.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};
