import React from 'react';
import './Pokecard.css';

export default function Pokecard(props) {
  const id = props.id;
  const styles = {
    textDecoration: 'underline',
    textAlign: 'left',
  };
  let padToThree = (number) =>
    number <= 999 ? `00${number}`.slice(-3) : number;
  const typeText = props.types
    .map(
      (type) =>
        type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1) + ' /'
    )
    .join(' ');
  return (
    <div className={'pokecard ' + props.types[0].type.name}>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padToThree(
          id
        )}.png`}
        alt={`${props.name}`}
      />
      <h3>Name: {props.name}</h3>
      <h3>Height: {props.height}</h3>
      <h3>Weight: {props.weight}</h3>
      <h3>Base Experience: {props.exp}</h3>
      <h3>Type: {typeText.slice(0, -1)} </h3>
      <h3 style={styles}>Attacks:</h3>
      <ol>
        {props.attacks.map((attack, index) => (
          <h3 key={index}>
            <li>
              {attack.ability.name.charAt(0).toUpperCase() +
                attack.ability.name.slice(1)}
            </li>
          </h3>
        ))}
      </ol>
    </div>
  );
}
