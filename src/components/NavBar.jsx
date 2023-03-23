import { Paper, Box, Input, InputAdornment } from "@mui/material";
import React, { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./NavBar.css";

const enterKey = 13;

export function NavBar() {
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <Box>
      <Paper className="navBar">
        <Box display="flex" alignItems="center">
          <p>Completed Compendiums</p>
          <a href="#">My Lists</a>
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
      </Paper>
    </Box>
  );
}
