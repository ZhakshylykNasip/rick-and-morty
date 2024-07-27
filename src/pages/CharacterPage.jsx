import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { FilterBar } from "../components/FilterBar";
import { Container, styled } from "@mui/material";
import { CharacterList } from "../components/character/CharacterList";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";
import { serializeObjectToQueryParams } from "../utils/helpers/general";
import { CharacterDetails } from "./CharacterDetails";

const fetchCharacters = async (search, gender) => {
  try {
    const quaryParams = serializeObjectToQueryParams({
      name: search,
      gender: gender,
    });

    const response = await fetch(
      "https://rickandmortyapi.com/api/character" + quaryParams
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
  const [searchParams] = useSearchParams();

  const gender = searchParams.get("gender") || "";

  const [searchByNameDebouce] = useDebounce(searchByName, 1000);

  useEffect(() => {
    fetchCharacters(searchByNameDebouce, gender)
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error));
  }, [searchByNameDebouce, gender]);

  const searchByNameChange = (e) => {
    setSearchByName(e.target.value);
  };

  return (
    <StyledContainer>
      <header>
        <SearchBar onChange={searchByNameChange} value={searchByName} />
        <FilterBar />
      </header>
      <main className="main">
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
