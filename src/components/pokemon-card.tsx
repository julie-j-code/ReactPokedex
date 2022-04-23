import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatType from "../helpers/format-type";
import formatDate from '../helpers/format-date'; 

type Props = {
    pokemon: Pokemon,
    // une Props faculative ci-dessous
    borderColor?: string
};

//   la valeur donnée à borderColor est valeur  par défaut. si component parent n'indique rien
const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = "#009683" }) => {

    // c'est tordu mais juste pour tester on ajoute un état pour stocker la couleur de la bordure ! 
    // on dissocie ainsi la couleur d'entrée de la props de la couleur de bordure
    // étant donné qu'elle bouge en fonction des interactions de l'utilisateur !
    const [color, setColor] = useState<string>();
    const showColor = () => {
        setColor(borderColor)
    }
    const hideColor = () => {
        setColor("#f5f5f5")
    }


    return (
        <div className="col s6 m4" onMouseEnter={showColor} onMouseLeave={hideColor}>
            <div className="card horizontal" style={{ borderColor: color }}>
                <div className="card-image" >
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>Créé le {formatDate(pokemon.created)}</small></p>
                        {/* <p><small>{pokemon.created.toString()}</small></p> */}
                        <p>{pokemon.types.map(type => {
                            return <span key={type} className={formatType(type)}>{type}</span>
                        })}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;