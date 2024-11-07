/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPokemonData } from "../redux/Reducer";
 
export default function Pokemon() {
  const dispatch = useDispatch();
  const { data: pokemon, loading, error } = useSelector((state) => state.pokemon);

  // const [pokemon, setPokemon] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
 
  useEffect(() => {
    dispatch(fetchPokemonData());
  }, [dispatch]);
 
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-red-500 text-center text-xl">
        Error: {error}
      </div>
    );
  }
 
  return (
    // menambahkan class container agar rapi
    <div className="container mx-auto p-4 md:pb-20 sm:pb-[150px]">
        {/* judul */}
      <h1 className="text-2xl font-bold text-center mb-4">Pokémon List</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemon.map((poke) => (
          <div key={poke.name} className="card bg-base-200 shadow-xl">
            <figure>
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                className="w-32 h-32 mx-auto my-2"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </h2>
              <Link to={`/pokemon/${poke.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
 