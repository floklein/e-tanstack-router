import { TextField } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { ProductsRoute } from "./Products";

export default function Search() {
  const navigate = ProductsRoute.useNavigate();
  const { search } = ProductsRoute.useSearch();

  const [searchValue, setSearchValue] = useState(search ?? "");
  const navigateDebounce = useRef<ReturnType<typeof setTimeout>>();

  async function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
    clearTimeout(navigateDebounce.current);
    navigateDebounce.current = setTimeout(() => {
      navigate({ search: { search: event.target.value || undefined } });
    }, 200);
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
