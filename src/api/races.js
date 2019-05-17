import { get } from './api';

const BASE_URL = `${process.env.REACT_APP_API_SERVER}/races`;

export async function getRace(raceId) {
  const url = `${BASE_URL}/${raceId}`;
  return get(url);
}

export async function getAllRaces() {
  const url = `${BASE_URL}`;
  return get(url);
}

export async function getRidersByRace(raceId) {
  const url = `${BASE_URL}/${raceId}/riders`;
  return get(url);
}
