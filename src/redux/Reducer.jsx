import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetching pokemon list data
export const fetchPokemonData = createAsyncThunk(
    'pokemon/fetchPokemonData',
    async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
        const data = await response.json();
        const pokemonDetails = await Promise.all(
            data.results.map(async (poke) => {
                const pokeResponse = await fetch(poke.url);
                return pokeResponse.json();
            })
        );
        return pokemonDetails;
    }
);

// fetching pokemon detail data
export const fetchPokemonDetail = createAsyncThunk(
    'pokemon/fetchPokemonDetail',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!response.ok) throw new Error("Failed to fetch Pokémon data");

            const data = await response.json();

            // Check if the previous Pokémon exists
            const prevId = parseInt(id) - 1;
            const nextId = parseInt(id) + 1;

            let hasPrevious = false;
            let hasNext = false;

            // Check previous Pokémon existence
            if (prevId > 0) {
                const prevResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${prevId}`);
                hasPrevious = prevResponse.ok;
            }

            // Check next Pokémon existence
            const nextResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextId}`);
            hasNext = nextResponse.ok;

            return { data, hasPrevious, hasNext };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        detail: null,
        hasNext: false,
        hasPrevious: false,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPokemonData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchPokemonDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
                state.detail = action.payload.data;
                state.hasNext = action.payload.hasNext;
                state.hasPrevious = action.payload.hasPrevious;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPokemonDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default pokemonSlice.reducer;