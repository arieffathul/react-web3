import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const data = await response.json();
 
        // menangkap data pokemon
        const pokemonDatas = await Promise.all(
          data.results.map(async (poke) => {
            const pokeResponse = await fetch(poke.url);
            return pokeResponse.json();
          })
        );
 
        setPokemon(pokemonDatas);
        // jika sudah dapat data maka loading false
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
 
    // menangkap data pokemon
    fetchData();
  }, []);
 
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-red-500 text-center text-xl">
        Error: {error.message}
      </div>
    );
  }
 
  return (
    // menambahkan class container agar rapi
    <div className="container mx-auto p-4">
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
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} B
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
 
 