// src/redux/sagas.test.ts

import { call, put } from 'redux-saga/effects';
import { fetchPokemonListSaga, fetchPokemonDetailsSaga } from '../redux/sagas';
import { 
  fetchPokemonListRequest,
  fetchPokemonListSuccess,
  fetchPokemonListFailure,
  fetchPokemonDetailsRequest,
  fetchPokemonDetailsSuccess,
  fetchPokemonDetailsFailure,
} from '../redux/actions';
import { fetchPokemonList, fetchPokemonDetails } from '../services/api';

describe('fetchPokemonListSaga', () => {
  const action = { payload: { offset: 0, limit: 10 } };

  it('should fetch the Pokemon list successfully', () => {
    const generator = fetchPokemonListSaga(action);

    expect(generator.next().value).toEqual(call(fetchPokemonList, action.payload.offset, action.payload.limit));
    const response = { results: ['pokemon1', 'pokemon2'] };
    expect(generator.next(response).value).toEqual(put(fetchPokemonListSuccess(response.results)));
    expect(generator.next().done).toBe(true);
  });

  it('should handle errors when fetching the Pokemon list', () => {
    const generator = fetchPokemonListSaga(action);

    expect(generator.next().value).toEqual(call(fetchPokemonList, action.payload.offset, action.payload.limit));
    const error = new Error('Error fetching Pokémon list');
    expect(generator.throw(error).value).toEqual(put(fetchPokemonListFailure(error.message)));
    expect(generator.next().done).toBe(true);
  });
});

describe('fetchPokemonDetailsSaga', () => {
  const action = { payload: { name: 'bulbasaur' } };

  it('should fetch the Pokemon details successfully', () => {
    const generator = fetchPokemonDetailsSaga(action);

    expect(generator.next().value).toEqual(call(fetchPokemonDetails, action.payload.name));
    const response = { name: 'bulbasaur', height: 7, weight: 69 };
    expect(generator.next(response).value).toEqual(put(fetchPokemonDetailsSuccess(response)));
    expect(generator.next().done).toBe(true);
  });

  it('should handle errors when fetching the Pokemon details', () => {
    const generator = fetchPokemonDetailsSaga(action);

    expect(generator.next().value).toEqual(call(fetchPokemonDetails, action.payload.name));
    const error = new Error('Error fetching Pokémon details');
    expect(generator.throw(error).value).toEqual(put(fetchPokemonDetailsFailure(error.message)));
    expect(generator.next().done).toBe(true);
  });
});
