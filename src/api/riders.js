import { authPost, authGet } from './api';

const BASE_URL = `${process.env.REACT_APP_API_SERVER}/riders`;

export async function createRider(rider) {
  return authPost(BASE_URL, rider);
}

export async function updateRider(rider) {
  const url = `${BASE_URL}/${rider.id}`;
  return authPost(url, rider);
}

export async function getRider(riderId) {
  const url = `${BASE_URL}/${riderId}`;
  return authGet(url);
}

export async function getAllRiders() {
  return authGet(BASE_URL);
}
