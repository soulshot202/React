import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState("2");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemons}`)
      .then(({ data }) => {
        setPokemons({ ...data });
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [pokemons]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <label>Name or id: </label>
          <input type="text" onChange={(e) => setPokemons(e.target.value)} />
          {/* <button onClick={setPokemons(inputRef.current.value)}>Search</button> */}
          <br />
          Pokemon
          <img src={pokemons.sprites.front_default} alt="pokemon" />
          <p>Name: {pokemons.name}</p>
          <p>types: {pokemons.types.map((type) => type.type.name + ". ")}</p>
          <p>height:{pokemons.height}</p>
          <p>weight: {pokemons.weight}</p>
        </div>
      )}
    </div>
  );
}
