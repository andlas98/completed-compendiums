import { Paper, Box, Input, InputAdornment } from "@mui/material";
import React, { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "@mui/material";
import "./NavBar.css";

const enterKey = 13;

export function NavBar() {
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
      <Box class="navBar" >
        <Link href="#">Completed Compendiums</Link>
        <Link href="#">My Lists</Link>
        <Input
          variant="outlined"
          onKeyDown={(e) => {
            if (e.keyCode == enterKey) {
              setSearchQuery(e.target.value);
            }
          }}
          placeholder="Search..."
          endAdornment={
            <InputAdornment position="end">
              <SearchOutlinedIcon />
            </InputAdornment>
          }
        />
      </Box>
  );
}
