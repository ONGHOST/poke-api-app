import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Define the types for API responses
interface PokemonListResponse {
  results: { name: string; url: string }[];
}

interface PokemonDetailsResponse {
  name: string;
  url: number;

}

// Fetch a list of Pokémon
export const fetchPokemonList = async (offset: number, limit: number): Promise<PokemonListResponse> => {
  try {
    // const offset = (page - 1) * limit;
    const response = await axios.get(`${BASE_URL}pokemon`, {
      params: {
        offset,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching Pokémon list');
  }
};

// // Fetch more data
// const fetchMoreData = async () => {
//   try {
//     const newPage = currentPage + 1; // Increment the page number
//     const newData = await fetchPokemonList(newPage, itemsPerPage);
//     setData([...data, ...newData.results]);
//     setCurrentPage(newPage); // Update the current page
//   } catch (error) {
//     // Handle error
//   }
// };

// Fetch details of a specific Pokémon by name
export const fetchPokemonDetails = async (name: string): Promise<PokemonDetailsResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching Pokémon details');
  }
};
