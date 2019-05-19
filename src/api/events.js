import { get, authGet } from './api';

const BASE_URL = `${process.env.REACT_APP_API_SERVER}/events`;

export async function getAllEvents() {
  const url = `${BASE_URL}`;
  return authGet(url);
}

export async function getRacesByEvent(eventId) {
  const url = `${BASE_URL}/${eventId}/races`;
  return get(url);
}

export async function setEventActive(eventId) {
  const url = `${BASE_URL}/${eventId}/active`;
  return authGet(url);
}

export async function syncToBikeReg(eventId) {
  console.log('syncToBikeReg not yet implemented');
}
