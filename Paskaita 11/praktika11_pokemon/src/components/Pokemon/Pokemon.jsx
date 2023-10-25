import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState("5");
  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  async function getPokemon() {
    setIsLoading(true);
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemons}`)
      .then(({ data }) => {
        setPokemons({ ...data });
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("pokemon not found");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    console.log(pokemons);
    if (pokemons) {
      getPokemon();
    }
  }, [pokemons]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <label>Name or id: </label>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setInput(e.target.value);
            }}
          />
          {/* <button onClick={setPokemons(inputRef.current.value)}>Search</button> */}
          <br />
          Pokemon <br />
          <img src={pokemons.sprites?.front_default} alt="pokemon" />
          <p>Name: {pokemons.name}</p>
          <p>types: {pokemons.types?.map((type) => type.type.name + ". ")}</p>
          <p>height:{pokemons.height}</p>
          <p>weight: {pokemons.weight}</p>
        </div>
      )}
    </div>
  );
}
