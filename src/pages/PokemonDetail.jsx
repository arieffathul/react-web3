/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../redux/Reducer";

export default function PokemonDetail() {
    const { id } = useParams();  // Get the Pokémon ID from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [pokemon, setPokemon] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [hasPrevious, setHasPrevious] = useState(false);
    // const [hasNext, setHasNext] = useState(false);

    const { detail: pokemon, loading, error, hasPrevious, hasNext } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemonDetail(id));
    }, [dispatch, id]);


    // Navigate to the next or previous Pokémon
    const nextPokemon = () => {
        const nextId = parseInt(id) + 1;
        navigate(`/pokemon/${nextId}`);
    };

    const previousPokemon = () => {
        const previousId = parseInt(id) - 1;
        navigate(`/pokemon/${previousId}`);
    };

    if (loading) return <div className="text-center text-xl">Loading...</div>;
    if (error) return <div className="text-red-500 text-center text-xl">Error: {error}</div>;
    if (!pokemon) return <div className="text-center text-xl">No Pokémon data available</div>; // Add this line for better handling
    return (
        <div className="bg-gradient-to-b from-gray-800 to-black md:pb-[100px] sm:pb-[150px] min-h-screen flex flex-col items-center text-white font-sans">
            <header className="text-center py-4">
                <h1 className="text-3xl font-bold text-blue-300">Pokédex</h1>
            </header>

            <div className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">

                <div className="text-center">
                    <p className="text-lg font-bold">#{pokemon.id.toString().padStart(3, '0')}</p>
                    <h2 className="text-4xl font-bold text-blue-200">
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </h2>
                    <div className="w-48 h-48 mx-auto mt-4 relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            className="relative z-10 w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
                    <h3 className="text-xl font-semibold mb-4">Details</h3>

                    <div className="mb-4">
                        <h4 className="font-semibold">Type</h4>
                        <div className="flex space-x-2 mt-2">
                            {pokemon.types.map((typeInfo) => (
                                <span
                                    key={typeInfo.type.name}
                                    className="px-2 py-1 rounded-full text-sm font-semibold"
                                    style={{
                                        backgroundColor: '#A8A878'
                                    }}
                                >
                                    {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p><strong>Height:</strong> {pokemon.height / 10} m</p>
                        <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
                        <p><strong>Ability:</strong> {pokemon.abilities[0]?.ability.name}</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 px-6 py-1 mx-auto rounded-lg shadow-lg w-full max-w-lg">
                <h3 className="text-xl font-semibold mb-4">Statistic</h3>
                {pokemon.stats.map((stat) => (
                    <div key={stat.stat.name} className="mb-4 flex justify-between items-center">
                        <h4 className="font-semibold">{stat.stat.name}</h4>

                        <span
                            className="px-2 py-1 rounded-full text-sm font-semibold"
                            style={{
                                backgroundColor: '#A8A878',
                            }}
                        >
                            {stat.base_stat}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex justify-between gap-5 mt-4">
                {hasPrevious && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={previousPokemon}>
                        Previous
                    </button>
                )}
                {hasNext && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextPokemon}>
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
