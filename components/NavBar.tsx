"use client";
import { use, useState } from "react";
import { Navbar, NavBody, NavbarButton, NavbarLogo, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from "../components/ui/resizeable-navbar";
import { navItems } from "../data/data";

export const NavBar = () => {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} className="text-l" />
        <NavbarButton children="Book a Call" />
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={false} onClick={function (): void {
                      throw new Error("Function not implemented.");
                  } } />
        </MobileNavHeader>
        <MobileNavMenu isOpen={false} onClose={() => {}}>
          <NavItems items={navItems} className="text-l" />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
