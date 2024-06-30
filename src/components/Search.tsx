import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { productsRoute } from "../routes/productsRoute";

export default function Search() {
  const navigate = useNavigate({ from: productsRoute.fullPath });
  const { search } = productsRoute.useSearch();
  const [searchValue, setSearchValue] = useState(search ?? "");

  async function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
    await navigate({ search: { search: event.target.value || undefined } });
  }

  return (
    <TextField
      label="Search"
      size="small"
      type="search"
      variant="filled"
      value={searchValue}
      onChange={onSearchChange}
    />
  );
}
