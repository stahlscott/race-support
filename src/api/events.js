import { get } from './api';

const BASE_URL = `${process.env.REACT_APP_API_SERVER}/events`;

// fetch all events
export async function getAllEvents() {
  const url = `${BASE_URL}`;
  return get(url);
}

// fetch all races by event
export async function getRacesByEvent(eventId) {
  const url = `${BASE_URL}/${eventId}/races`;
  return get(url);
}
