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
        <h3>REACT EXERCICE</h3>
        <p className="inherit-p">
          Bienvenue sur l'application réalisée pour le test technique, lié à
          l'exercice "React Exercice" dont l'énoncé est disponible{" "}
          <a
            href="https://github.com/KrashStudio/react-exercice"
            target="_blank"
            rel="noreferrer noopener"
          >
            ici
          </a>
        </p>
        <p className="inherit-p">
          Dans un premier temps, il faut s'authentifier en rentrant les
          identifiants suivants : Luke (nom d'utilisateur) et DadSucks (mot de
          passe). Une fois identifié, les champs de recherche apparaissent.
        </p>
        <p className="inherit-p">
          Pour effectuer une recherche, il faut remplir l'ensemble des champs
          (rentrer un ID, choisir un type et le format). Le bouton "Rechercher"
          devient alors cliquable. Une fois le clic effectué, les résultats de
          recherche apparaissent. Il se peut cependant qu'un ID rentré ne
          corresponde à rien dans le type sélectionné (par exemple si on rentre
          l'ID 9 et que l'on choisit "Véhicules"), un message d'erreur apparaît
          alors.
        </p>
        <p className="inherit-p">
          Sur l'écran des résultats de recherche, on peut soit faire une
          nouvelle recherche, ou soit se déconnecter. Le premier choix renvoie
          sur l'écran des champs, et le deuxième renvoie à l'écran
          d'authentification.
        </p>
        <p className="inherit-p">Bonne navigation !</p>
      </ul>
    </div>
  );
}

export default Nav;
