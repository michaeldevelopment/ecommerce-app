import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavLinksMap from "./NavLinksMap";
import NavLinksMenuHamburguer from "./NavLinksMenuHamburguer";

const HamburguerMenuContainer = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setShowMenu(!showMenu)}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      <Offcanvas
        show={showMenu}
        onHide={setShowMenu}
        backdrop="static"
        placement={"start"}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <NavLinksMenuHamburguer setShowMenu={setShowMenu} />
      </Offcanvas>
    </>
  );
};

export default HamburguerMenuContainer;
