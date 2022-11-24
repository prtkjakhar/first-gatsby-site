import React, { useState } from 'react';
import axios from 'axios';
import Pokecard from './Pokecard';
import './Pokedex.css';

export default function Pokedex() {
  const [pokemon, setPokemon] = useState('');
  const [name, setName] = useState('Ditto');
  const [exp, setExp] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [id, setId] = useState();
  const [types, setTypes] = useState([]);
  const [attack, setAttack] = useState([]);
  const [showResult, setshowResult] = useState(false);

  async function fetchData() {
    let result = '';
    if (pokemon === '') return alert('Please write a name for searching.');
    try {
      result = await axios(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
      );
    } catch (err) {
      return alert(
        `Could not find ${pokemon}, Please recheck for spelling error.`
      );
    }
    console.log(result);
    let pokeName =
      result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1);
    setName(pokeName);
    setExp(result.data.base_experience);
    setHeight(result.data.height);
    setWeight(result.data.weight);
    setId(result.data.id);
    setTypes(result.data.types);
    setAttack(result.data.abilities);
    setshowResult(true);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') return fetchData();
  };

  return (
    <div className="pokedex">
      <h1 className="heading">POKEDEX</h1>
      <h3>Write name of any pokemon.</h3>
      <div className="form">
        <input
          type="text"
          placeholder="Name of Pokemon"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
          onKeyPress={handleKeyDown}
        />
        <button onClick={() => fetchData()}>Search</button>
      </div>
      {showResult ? (
        <Pokecard
          name={name}
          exp={exp}
          id={id}
          height={height}
          weight={weight}
          types={types}
          attacks={attack}
        />
      ) : null}
      <div className="footer">
        <p>
          Made by{' '}
          <a
            className="footer-links"
            href="https://www.linkedin.com/in/prateek-jakhar-a64a04197/"
          >
            {' '}
            Prateek Jakhar
          </a>{' '}
          with{' '}
          <a className="footer-links" href="https://pokeapi.co/">
            Poke Api
          </a>
        </p>
      </div>
    </div>
  );
}
