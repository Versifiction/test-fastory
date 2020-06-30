import React from "react";

function Nav(props) {
  return (
    <div className="Nav">
      <nav>
        <div data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">error_outline</i>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>INFOS</li>
      </ul>
    </div>
  );
}

export default Nav;
