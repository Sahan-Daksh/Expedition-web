"use client";

import { Button, Navbar, NavbarCollapse} from "flowbite-react";
import Link from "next/link";
import "./Navbar.css";

export function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="./img/logo.png" className="mr-3 h-6 sm:h-16" alt="ISACA Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 ml-2">
        <Button>Register for IEEEXtreme</Button>
        <Navbar.Toggle />
      </div>
      <div className="navbar-link-group">
        <NavbarCollapse>
        <Link href="#"  className="navbar-link">Home</Link>
        <Link href="#" className="navbar-link">About</Link>
        <Link href="#"  className="navbar-link">Timeline</Link>
        <Link href="#"  className="navbar-link">Partners</Link>
        <Link href="#"  className="navbar-link">FAQ</Link>
        <Link href="#"  className="navbar-link">Contact</Link>
        </NavbarCollapse>
        </div>
    </Navbar>
  );
}
