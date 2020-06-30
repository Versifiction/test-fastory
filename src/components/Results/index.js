import React, { useEffect } from "react";
import moment from "moment";
import { useStoreState, useStoreActions } from "easy-peasy";

import Button from "../Button";

function Results() {
  const results = useStoreState((state) => state.defaultModel.results);
  const activePage = useStoreState((state) => state.defaultModel.activePage);
  const inputValue = useStoreState((state) => state.defaultModel.inputValue);
  const inWookie = useStoreState((state) => state.defaultModel.inWookie);
  const selectTypeValue = useStoreState(
    (state) => state.defaultModel.selectTypeValue
  );
  const getResults = useStoreActions(
    (actions) => actions.defaultModel.getResults
  );
  const setActivePage = useStoreActions(
    (actions) => actions.defaultModel.setActivePage
  );

  useEffect(() => {
    getResults({ selectTypeValue, inputValue, inWookie, activePage });
  }, [selectTypeValue, inputValue, inWookie, activePage, getResults]);

  return (
    <div className="Results">
      {results.count ? (
        <>
          <span>Nombre de résultats: {results.count}</span>
          <div className="row">
            {results.results.map((result) => (
              <div className="col s12 m6">
                {selectTypeValue === "planets" && (
                  <div className="card">
                    <div className="card-content">
                      <span>{result.name}</span>
                      <span className="card-line">
                        <span className="bold-desc">Population:</span>
                        {result.population}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Climat:</span>&nbsp;
                        {result.climate}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Diamètre:</span>&nbsp;
                        {result.diameter} km
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Terrain:</span>&nbsp;
                        {result.terrain}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Gravité:</span>&nbsp;
                        {result.gravity}
                      </span>
                      <a
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="bold-desc">URL:</span>
                        {result.url}
                      </a>
                    </div>
                  </div>
                )}
                {selectTypeValue === "films" && (
                  <div className="card">
                    <div className="card-content">
                      <span className="bold">{result.title}</span>
                      <span className="card-line">
                        <span className="bold-desc">Réalisateur:</span>&nbsp;
                        {result.director}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Résumé:</span>&nbsp;
                        {result.opening_crawl.substring(0, 120)}...
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Date de sortie:</span>&nbsp;
                        {moment(result.release_date).format("DD/MM/YYYY")}
                      </span>
                    </div>
                  </div>
                )}
                {selectTypeValue === "vehicles" && (
                  <div className="card">
                    <div className="card-content">
                      <span className="bold">{result.name}</span>
                      <span className="card-line">
                        <span className="bold-desc">Modèle:</span>&nbsp;
                        {result.model}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Passagers:</span>&nbsp;
                        {result.passengers}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Fabricant:</span>&nbsp;
                        {result.manufacturer}
                      </span>
                    </div>
                  </div>
                )}
                {selectTypeValue === "starships" && (
                  <div className="card">
                    <div className="card-content">
                      <span className="bold">{result.name}</span>
                      <span className="card-line">
                        <span className="bold-desc">Modèle:</span>&nbsp;
                        {result.model}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Passagers:</span>&nbsp;
                        {result.passengers}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Fabricant:</span>&nbsp;
                        {result.manufacturer}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Crée le:</span>&nbsp;
                        {moment(result.created).format("DD/MM/YYYY à HH:MM:SS")}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Édité le:</span>&nbsp;
                        {moment(result.edited).format("DD/MM/YYYY à HH:MM:SS")}
                      </span>
                    </div>
                  </div>
                )}
                {selectTypeValue === "species" && (
                  <div className="card">
                    <div className="card-content">
                      <span className="bold">{result.name}</span>
                      <span className="card-line">
                        <span className="bold-desc">Langue:</span>&nbsp;
                        {result.language}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Taille:</span>&nbsp;
                        {result.average_height}
                        cm
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Classification:</span>&nbsp;
                        {result.classification}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Espérance de vie:</span>
                        &nbsp;
                        {result.average_lifespan}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Couleur de peau:</span>
                        &nbsp;
                        {result.skin_colors}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Couleur de cheveux:</span>
                        &nbsp;
                        {result.hair_colors}
                      </span>
                    </div>
                  </div>
                )}
                {selectTypeValue === "people" && (
                  <div className="card">
                    <div className="card-content">
                      <span className="bold">{result.name}</span>
                      <span className="card-line">
                        <span className="bold-desc">Année de naissance:</span>
                        &nbsp;
                        {result.birth_year}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Poids:</span> {result.mass}
                        kg
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Sexe:</span> {result.gender}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Couleur de peau:</span>
                        &nbsp;
                        {result.skin_color}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Couleur de cheveux:</span>
                        &nbsp;
                        {result.hair_color}
                      </span>
                      <span className="card-line">
                        <span className="bold-desc">Couleur des yeux:</span>
                        &nbsp;
                        {result.eye_color}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col s12">
              <div className="arrows">
                {results.previous && (
                  <i
                    className="material-icons"
                    onClick={() => setActivePage(activePage - 1)}
                  >
                    arrow_back
                  </i>
                )}
                {results.next && (
                  <i
                    className="material-icons"
                    onClick={() => setActivePage(activePage + 1)}
                  >
                    arrow_forward
                  </i>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {selectTypeValue === "planets" && (
            <div className="card">
              <div className="card-content">
                <span>{results.name}</span>
                <span className="card-line">
                  <span className="bold-desc">Population:</span>
                  {results.population}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Climat:</span>&nbsp;
                  {results.climate}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Diamètre:</span>&nbsp;
                  {results.diameter} km
                </span>
                <span className="card-line">
                  <span className="bold-desc">Terrain:</span>&nbsp;
                  {results.terrain}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Gravité:</span>&nbsp;
                  {results.gravity}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Crée le:</span>&nbsp;
                  {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Édité le:</span>&nbsp;
                  {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
                </span>
                <a href={results.url} target="_blank" rel="noopener noreferrer">
                  <span className="bold-desc">URL:</span>
                  {results.url}
                </a>
              </div>
            </div>
          )}
          {selectTypeValue === "films" && (
            <div className="card">
              <div className="card-content">
                <span className="bold">{results.title}</span>
                <span className="card-line">
                  <span className="bold-desc">Réalisateur:</span>&nbsp;
                  {results.director}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Résumé:</span>&nbsp;
                  {results.opening_crawl}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Date de sortie:</span>&nbsp;
                  {moment(results.release_date).format("DD/MM/YYYY")}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Crée le:</span>&nbsp;
                  {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Édité le:</span>&nbsp;
                  {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
                </span>
              </div>
            </div>
          )}
          {selectTypeValue === "starships" ||
            (selectTypeValue === "vehicles" && (
              <div className="card">
                <div className="card-content">
                  <span className="bold">{results.name}</span>
                  <span className="card-line">
                    <span className="bold-desc">Modèle:</span>&nbsp;
                    {results.model}
                  </span>
                  <span className="card-line">
                    <span className="bold-desc">Passagers:</span>&nbsp;
                    {results.passengers}
                  </span>
                  <span className="card-line">
                    <span className="bold-desc">Fabricant:</span>&nbsp;
                    {results.manufacturer}
                  </span>
                  <span className="card-line">
                    <span className="bold-desc">Crée le:</span>&nbsp;
                    {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
                  </span>
                  <span className="card-line">
                    <span className="bold-desc">Édité le:</span>&nbsp;
                    {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
                  </span>
                </div>
              </div>
            ))}
          {selectTypeValue === "species" && (
            <div className="card">
              <div className="card-content">
                <span className="bold">{results.name}</span>
                <span className="card-line">
                  <span className="bold-desc">Langue:</span>&nbsp;
                  {results.language}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Taille:</span>&nbsp;
                  {results.average_height}
                  cm
                </span>
                <span className="card-line">
                  <span className="bold-desc">Classification:</span>&nbsp;
                  {results.classification}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Espérance de vie:</span>
                  &nbsp;
                  {results.average_lifespan}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Couleur de peau:</span>
                  &nbsp;
                  {results.skin_colors}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Couleur de cheveux:</span>
                  &nbsp;
                  {results.hair_colors}
                </span>
              </div>
            </div>
          )}
          {selectTypeValue === "people" && (
            <div className="card">
              <div className="card-content">
                <span className="bold">{results.name}</span>
                <span className="card-line">
                  <span className="bold-desc">Année de naissance:</span>
                  &nbsp;
                  {results.birth_year}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Poids:</span> {results.mass}
                  kg
                </span>
                <span className="card-line">
                  <span className="bold-desc">Sexe:</span> {results.gender}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Couleur de peau:</span>
                  &nbsp;
                  {results.skin_color}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Couleur de cheveux:</span>
                  &nbsp;
                  {results.hair_color}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Couleur des yeux:</span>
                  &nbsp;
                  {results.eye_color}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Crée le:</span>&nbsp;
                  {moment(results.created).format("DD/MM/YYYY à HH:MM:SS")}
                </span>
                <span className="card-line">
                  <span className="bold-desc">Édité le:</span>&nbsp;
                  {moment(results.edited).format("DD/MM/YYYY à HH:MM:SS")}
                </span>
              </div>
            </div>
          )}
        </>
      )}

      <div className="Buttons">
        <Button type="new-search" value="Faire une nouvelle recherche" />
        <Button type="logout" value="Se déconnecter" />
      </div>
    </div>
  );
}

export default Results;
