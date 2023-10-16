
import { put, takeLatest, all } from 'redux-saga/effects';
import { fetchPokemonList, fetchPokemonDetails } from '../services/api';

import {
  fetchPokemonListRequest,
    fetchPokemonListSuccess,
    fetchPokemonListFailure,
    fetchPokemonDetailsRequest,
    fetchPokemonDetailsSuccess,
    fetchPokemonDetailsFailure,
} from './actions';

function* fetchPokemonListSaga(action) {
  try {
    const { offset, limit } = action.payload;
    const response = yield fetchPokemonList(offset, limit);
    yield put(fetchPokemonListSuccess(response.results));
  } catch (error) {
    yield put(fetchPokemonListFailure(error.message));
  }
}

function* fetchPokemonDetailsSaga(action) {
  try {
    const { name } = action.payload;
    const response = yield fetchPokemonDetails(name);
    yield put(fetchPokemonDetailsSuccess(response));
  } catch (error) {
    yield put(fetchPokemonDetailsFailure(error.message));
  }
}

function* watchPokemonListRequest() {
  yield takeLatest(fetchPokemonListRequest, fetchPokemonListSaga);
}

function* watchPokemonDetailsRequest() {
  yield takeLatest(fetchPokemonDetailsRequest, fetchPokemonDetailsSaga);
}

export default function* rootSaga() {
  yield all([watchPokemonListRequest(), watchPokemonDetailsRequest()]);
}
