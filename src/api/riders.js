import { get, post } from './api';

const BASE_URL = `${process.env.REACT_APP_API_SERVER}/riders`;

export async function createRider(rider) {
  return post(BASE_URL, rider);
}

export async function updateRider(rider) {
  const url = `${BASE_URL}/${rider.id}`;
  return post(url, rider);
}

export async function getRider(riderId) {
  const url = `${BASE_URL}/${riderId}`;
  return get(url);
}

export async function getAllRiders() {
  return get(BASE_URL);
}
