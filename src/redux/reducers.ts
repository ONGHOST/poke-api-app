import {
  FETCH_POKEMON_LIST_REQUEST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILURE,
  FETCH_POKEMON_DETAILS_REQUEST,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
} from './actionTypes';

// Initial state for the pokemon list
const initialPokemonListState = {
  data: [],
  loading: false,
  error: null,
};

// Initial state for the pokemon details
const initialPokemonDetailsState = {
  data: null,
  loading: false,
  error: null,
};

export const pokemonListReducer = (state = initialPokemonListState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_POKEMON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const pokemonDetailsReducer = (state = initialPokemonDetailsState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_POKEMON_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
