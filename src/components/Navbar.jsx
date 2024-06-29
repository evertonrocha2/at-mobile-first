import { useState } from "react";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "./Avatar";


export default function Navbar(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="static" className="bg-gray-900">
      <Toolbar className="flex justify-around items-center flex-col md:flex-row p-4">
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileMenu}
          className="block md:hidden"
        >
          <MenuIcon />
        </IconButton>
        <div
          className={`flex ${
            mobileMenuOpen ? "block" : "hidden"
          } md:flex-row flex flex-col items-center justify-center md:gap-4 md:items-center gap-8`}
        >
          <IconButton
            size="large"
            color="inherit"
            aria-label="home"
            component={Link}
            to="/"
            className="block md:hidden"
          >
            <HomeRoundedIcon />
          </IconButton>
          <Link to="/listas" className="text-white font-bold">
            LISTA
          </Link>
          <Link to="/formulario" className="text-white font-bold">
            FORMULÁRIO
          </Link>
          <Button
            variant="contained"
            className="bg-white px-4 py-2 flex items-center"
            onClick={props.logout}
          >
            <Link to="/login" className="text-white font-bold">
              Logout
            </Link>
          </Button>
          <Avatar />
        </div>
      </Toolbar>
    </AppBar>
  );
}
