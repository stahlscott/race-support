import { get } from './api';

const BASE_URL = `${process.env.REACT_APP_API_SERVER}/events`;

export async function getAllEvents() {
  const url = `${BASE_URL}`;
  return get(url);
}

export async function getRacesByEvent(eventId) {
  const url = `${BASE_URL}/${eventId}/races`;
  return get(url);
}

export async function setActiveEvent(eventId) {
  console.log('setActiveEvent not yet implemented');
}

export async function syncToBikeReg(eventId) {
  console.log('syncToBikeReg not yet implemented');
}
