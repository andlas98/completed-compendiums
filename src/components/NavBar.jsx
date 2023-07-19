import { Box, IconButton, Input, InputAdornment, Menu, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, Avatar} from "@mui/material";
import "./NavBar.css";

const enterKey = 13;

export function NavBar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  var open = Boolean(anchorEl)
  const toggleAccountMenuPopup = (elem) =>{
    setAnchorEl(elem.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <Box class="navBar">
      <Link href="#" id="navbar-logo">Completed Compendiums</Link>
      <Link href="#">My Lists</Link>
      <Box>
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
        <IconButton aria-label="Open Account Menu" src="/broken-image.jpg" onClick={toggleAccountMenuPopup}>
          <AccountCircleOutlinedIcon />
        </IconButton>
        <Menu 
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorEl={anchorEl}>
          <MenuItem onClick={handleClose}>
            View Account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Log Out
          </MenuItem>
        </Menu>`
      </Box>

    </Box>
  );
}
