import { useEffect, useState } from "react";
import "./PokeList.css";

function Pokelist() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );
    const data = await res.json();

    const newPokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        return res.json();
      })
    );

    // Combine the newPokemons array with the existing allPokemons array
    setAllPokemons((currentList) => [...currentList, ...newPokemons]);
  };

  useEffect(() => {
    getAllPokemons();
  }, []); // No dependencies in the array

  useEffect(() => {
    // Log the updated allPokemons when it changes
    console.log(allPokemons);
  }, [allPokemons]);

  return (
    <div>{/* You can map through 'allPokemons' here to display them */}</div>
  );
}

export default Pokelist;
