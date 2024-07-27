import { Box, styled } from "@mui/material";
import { CharacterItem } from "./CharacterItem";

export const CharacterList = ({ characters = [] }) => {
  return (
    <StyledBox>
      {characters.map((character) => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "10px",
  };
});
