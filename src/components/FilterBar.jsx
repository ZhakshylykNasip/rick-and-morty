import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "../utils/constants/general";
import { useSearchParams } from "react-router-dom";

export const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const genderValueChangedHandler = (e) => {
    searchParams.set("gender", e.target.value);
    setSearchParams(searchParams);
  };

  const genderValue = searchParams.get("gender") || "";

  const resetSearchParamsHandler = () => {
    searchParams.delete("gender");
    setSearchParams(searchParams);
  };

  return (
    <WrapperFilterBar>
      <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
        Filter by:
      </Typography>

      <Container>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <StyledRadioGroup
            onChange={genderValueChangedHandler}
            value={genderValue}
          >
            {GENDER_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                label={option.label}
                control={<Radio />}
              />
            ))}
          </StyledRadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Status</FormLabel>
          <StyledRadioGroup>
            {STATUS_OPTIONS.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                label={option.label}
                control={<Radio />}
              />
            ))}
          </StyledRadioGroup>
        </FormControl>
      </Container>

      <Button variant="outlined" onClick={resetSearchParamsHandler}>
        Clear all
      </Button>
    </WrapperFilterBar>
  );
};

const Container = styled("div")(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    "& > .form": {
      border: "1px solid #d4e1dd",
      padding: "0.5rem",
      borderRadius: "1rem",
      flex: "1",
    },
  };
});

const StyledRadioGroup = styled(RadioGroup)(() => {
  return {
    flexDirection: "row",
  };
});

const WrapperFilterBar = styled("div")(() => {
  return {
    padding: "2rem",
  };
});
