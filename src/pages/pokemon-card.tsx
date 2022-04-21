import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';


type Props = {
    pokemon: Pokemon,
  };

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {



    return (
        <div className="col s6 m4">
            <div className="card horizontal">
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;