import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const a = links.map((anchor) => (
    <a key={anchor} href={`#${anchor}`}>
      about
    </a>
  ));

  return <nav>{a}</nav>;
}

export default NavBar;
