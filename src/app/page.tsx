
import { Grid } from "../../components/Grid";
import { Hero } from "../../components/Hero";
// import { Navbar, NavBody, NavbarButton, NavbarLogo, NavItems } from "../../components/ui/resizeable-navbar";
// import { navItems } from "../../data/data";
import { NavBar } from "../../components/NavBar";
import { BentoGridItem } from "../../components/ui/bento-grid";

export default function Home() {
  return (
    <section id="home">
      <NavBar />
      {/* <Navbar >
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} className="text-l"/>
        </NavBody>
      </Navbar> */}
      <Hero />
      <Grid />
    </section>
  );
}
