import React, { useState, useEffect } from "react";
import moment from "moment";
import { useStoreState } from "easy-peasy";

import Button from "../Button";

function Results() {
  const results = useStoreState((state) => state.defaultModel.results);
  const inWookie = useStoreState((state) => state.defaultModel.inWookie);
  const selectTypeValue = useStoreState(
    (state) => state.defaultModel.selectTypeValue
  );
  const [wookieKeys, setWookieKeys] = useState();
  const [wookieValues, setWookieValues] = useState();

  useEffect(() => {
    setWookieKeys(Object.keys(results));
    setWookieValues(Object.values(results));
    console.log("keys ", wookieKeys);
    console.log("values ", wookieValues);
  }, [results]);

  return (
    <div className="Results">
      {inWookie && (
        <>
          {wookieKeys &&
            wookieKeys.map((w, index) => (
              <p>
                <span className="bold-desc">{w}</span>: {wookieValues[index]}
              </p>
            ))}
          {/* <p className="bold">{results.whrascwo}</p>
          <p>
            <span className="bold-desc">acwoahrracao:</span>{" "}
            {results.acwoahrracao}
          </p>
          <p>
            <span className="bold-desc">scracc:</span> {results.scracc}
          </p>
          <p>
            <span className="bold-desc">acraahrc_oaooanoorc:</span>{" "}
            {results.acraahrc_oaooanoorc}
          </p> */}
        </>
      )}
      {selectTypeValue === "planets" && !inWookie && (
        <>
          <p className="bold">{results.name}</p>
          <p>
            <span className="bold-desc">Population:</span> {results.population}
          </p>
          <p>
            <span className="bold-desc">Climat:</span> {results.climate}
          </p>
          <p>
            <span className="bold-desc">Diamètre:</span> {results.diameter} km
          </p>
          <p>
            <span className="bold-desc">Terrain:</span> {results.terrain}
          </p>
          <p>
            <span className="bold-desc">Gravité:</span> {results.gravity}
          </p>
          <p>
            <span className="bold-desc">Crée le:</span>{" "}
            {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
          <p>
            <span className="bold-desc">Édité le:</span>{" "}
            {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
          <p>
            <span className="bold-desc">URL:</span>{" "}
            <a href={results.url} target="_blank" rel="noopener noreferrer">
              {results.url}
            </a>
          </p>
        </>
      )}
      {selectTypeValue === "films" && !inWookie && (
        <>
          <p className="bold">{results.title}</p>
          <p>
            <span className="bold-desc">Réalisateur:</span> {results.director}
          </p>
          <p>
            <span className="bold-desc">Résumé:</span> {results.opening_crawl}
          </p>
          <p>
            <span className="bold-desc">Date de sortie:</span>{" "}
            {moment(results.release_date).format("DD/MM/YYYY")}
          </p>
          <p>
            <span className="bold-desc">Crée le:</span>{" "}
            {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
          <p>
            <span className="bold-desc">Édité le:</span>{" "}
            {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
        </>
      )}
      {(selectTypeValue === "starships" || selectTypeValue === "vehicles") &&
        !inWookie && (
          <>
            <p className="bold">{results.name}</p>
            <p>
              <span className="bold-desc">Modèle:</span> {results.model}
            </p>
            <p>
              <span className="bold-desc">Passagers:</span> {results.passengers}
            </p>
            <p>
              <span className="bold-desc">Fabricant:</span>{" "}
              {results.manufacturer}
            </p>
            <p>
              <span className="bold-desc">Crée le:</span>{" "}
              {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
            </p>
            <p>
              <span className="bold-desc">Édité le:</span>{" "}
              {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
            </p>
          </>
        )}
      {selectTypeValue === "species" && !inWookie && (
        <>
          <p className="bold">{results.name}</p>
          <p>
            <span className="bold-desc">Langue:</span> {results.language}
          </p>
          <p>
            <span className="bold-desc">Taille:</span> {results.average_height}
            cm
          </p>
          <p>
            <span className="bold-desc">Classification:</span>{" "}
            {results.classification}
          </p>
          <p>
            <span className="bold-desc">Espérance de vie:</span>{" "}
            {results.average_lifespan}
          </p>
          <p>
            <span className="bold-desc">Couleur de peau:</span>{" "}
            {results.skin_colors}
          </p>
          <p>
            <span className="bold-desc">Couleur de cheveux:</span>{" "}
            {results.hair_colors}
          </p>
          <p>
            <span className="bold-desc">Couleur des yeux:</span>{" "}
            {results.eye_colors}
          </p>
          <p>
            <span className="bold-desc">Date de sortie:</span>{" "}
            {moment(results.release_date).format("DD/MM/YYYY")}
          </p>
          <p>
            <span className="bold-desc">Crée le:</span>{" "}
            {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
          <p>
            <span className="bold-desc">Édité le:</span>{" "}
            {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
        </>
      )}
      {selectTypeValue === "people" && !inWookie && (
        <>
          <p className="bold">{results.name}</p>
          <p>
            <span className="bold-desc">Année de naissance:</span>{" "}
            {results.birth_year}
          </p>
          <p>
            <span className="bold-desc">Poids:</span> {results.mass}kg
          </p>
          <p>
            <span className="bold-desc">Sexe:</span> {results.gender}
          </p>
          <p>
            <span className="bold-desc">Couleur des yeux:</span>{" "}
            {results.eye_color}
          </p>
          <p>
            <span className="bold-desc">Couleur de peau:</span>{" "}
            {results.skin_color}
          </p>
          <p>
            <span className="bold-desc">Couleur de cheveux:</span>{" "}
            {results.hair_color}
          </p>
          <p>
            <span className="bold-desc">Couleur des yeux:</span>{" "}
            {results.eye_color}
          </p>
          <p>
            <span className="bold-desc">Crée le:</span>{" "}
            {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
          <p>
            <span className="bold-desc">Édité le:</span>{" "}
            {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
          </p>
        </>
      )}
      <div className="Buttons">
        {" "}
        <Button type="new-search" value="Faire une nouvelle recherche" />
        <Button type="logout" value="Se déconnecter" />
      </div>
    </div>
  );
}

export default Results;
