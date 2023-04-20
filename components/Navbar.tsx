import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";
import Image from "next/image";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <img className="logo" src="/logo.jpg" alt="logo" />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" href={"/"}>
              Home
            </Link>
            <Link href={"/contact"} className="navbar-item">
              Contact
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <Link href={"/about"} className="navbar-item">
                  About
                </Link>
                <Link href={"/programs"} className="navbar-item">
                  Programs
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className=" mx-2 px-2 bg-none">
                  <Badge badgeContent={3} color="error">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      variant="text"
                      className="hover:bg-transparent p-2 -mx-4"
                    >
                      <NotificationsIcon className="text-blue-500 bg-none" />
                    </Button>
                  </Badge>
                </a>
                <Link
                  className="button bg-teal-500 text-white font-light hover:text-white hover:bg-blue-600"
                  href="/login"
                >
                  <strong>Login</strong>
                </Link>
                <Link
                  className="button bg-blue-500 text-white font-light hover:text-white hover:bg-blue-600"
                  href="/result"
                >
                  <strong>See result</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} className="">
          <Link href={"/specific_announcement"}>New Scholarship Program</Link>
        </MenuItem>
        <Divider light />

        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider light />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
