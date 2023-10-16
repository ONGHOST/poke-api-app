import {
  FETCH_POKEMON_LIST_REQUEST,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_LIST_FAILURE,
  FETCH_POKEMON_DETAILS_REQUEST,
  FETCH_POKEMON_DETAILS_SUCCESS,
  FETCH_POKEMON_DETAILS_FAILURE,
} from './actionTypes';

export const fetchPokemonListRequest = (offset: number, limit: number) => ({
  type: FETCH_POKEMON_LIST_REQUEST,
  payload: { offset, limit },
});

export const fetchPokemonListSuccess = (data: any) => ({
  type: FETCH_POKEMON_LIST_SUCCESS,
  payload: data,
});

export const fetchPokemonListFailure = (error: string) => ({
  type: FETCH_POKEMON_LIST_FAILURE,
  payload: error,
});

export const fetchPokemonDetailsRequest = (name: string) => ({
  type: FETCH_POKEMON_DETAILS_REQUEST,
  payload: { name },
});

export const fetchPokemonDetailsSuccess = (data: any) => ({
  type: FETCH_POKEMON_DETAILS_SUCCESS,
  payload: data,
});

export const fetchPokemonDetailsFailure = (error: string) => ({
  type: FETCH_POKEMON_DETAILS_FAILURE,
  payload: error,
});
