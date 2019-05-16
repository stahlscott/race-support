const BASE_URL = process.env.REACT_APP_API_SERVER;

// fetch all events
export async function getAllEvents() {
  const url = `${BASE_URL}/events`;
  const response = await fetch(url, { method: 'GET' });
  return await response.json();
}

// fetch all races by event
export async function getRacesByEvent(eventId) {
  const url = `${BASE_URL}/events/${eventId}/races`;
  const response = await fetch(url, { method: 'GET' });
  return await response.json();
}

// fetch riders by race
export async function getRidersByRace(raceId) {
  const url = `${BASE_URL}/races/${raceId}/riders`;
  const response = await fetch(url, { method: 'GET' });
  return await response.json();
}

// create rider
export async function createRider(rider) {
  const url = `${BASE_URL}/riders`;
  const response = await fetch(url, { method: 'POST' });
  return await response.json();
}

// update rider
export async function updateRider(rider) {
  const url = `${BASE_URL}/riders/${rider.id}`;
  const response = await fetch(url, { method: 'POST' });
  return await response.json();
}

// fetch rider by id
export async function getRider(riderId) {
  const url = `${BASE_URL}/riders/${riderId}`;
  const response = await fetch(url, { method: 'GET' });
  return await response.json();
}
