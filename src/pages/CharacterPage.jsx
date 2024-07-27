import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { FilterBar } from "../components/FilterBar";
import { Container, styled } from "@mui/material";
import { CharacterList } from "../components/character/CharacterList";
import { useDebounce } from "use-debounce";

const fetchCharacters = async (search) => {
  try {
    const searchParams = search ? "?name=" + search : "";
    const response = await fetch(
      "https://rickandmortyapi.com/api/character" + searchParams
    );
    const { results } = await response.json();
    return results;
  } catch (error) {
    throw new Error("Something went wrong!!!");
  }
};

export const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  const [searchByNameDebouce] = useDebounce(searchByName, 1000);

  useEffect(() => {
    fetchCharacters(searchByNameDebouce)
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  }, [searchByNameDebouce]);

  const searchByNameChange = (e) => {
    setSearchByName(e.target.value);
  };

  return (
    <StyledContainer>
      <header>
        <SearchBar onChange={searchByNameChange} value={searchByName} />
        <FilterBar />
      </header>
      <main>
        <CharacterList characters={characters} />
      </main>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)(() => {
  return {
    padding: "1rem",
    background: "aliceblue",
  };
});
