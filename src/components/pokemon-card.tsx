import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';

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

    // pour affecter des couleurs différentes selon le type de pokemon
    const formatType = (type: string): string => {
        let color: string;

        switch (type) {
            case 'Feu':
                color = 'red lighten-1';
                break;
            case 'Eau':
                color = 'blue lighten-1';
                break;
            case 'Plante':
                color = 'green lighten-1';
                break;
            case 'Insecte':
                color = 'brown lighten-1';
                break;
            case 'Normal':
                color = 'grey lighten-3';
                break;
            case 'Vol':
                color = 'blue lighten-3';
                break;
            case 'Poison':
                color = 'deep-purple accent-1';
                break;
            case 'Fée':
                color = 'pink lighten-4';
                break;
            case 'Psy':
                color = 'deep-purple darken-2';
                break;
            case 'Electrik':
                color = 'lime accent-1';
                break;
            case 'Combat':
                color = 'deep-orange';
                break;
            default:
                color = 'grey';
                break;
        }

        return `chip ${color}`;
    }

    // en applicant cette méthode, la propriété created deviendra une propriété calculée
    const formatDate = (date: Date): string => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
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