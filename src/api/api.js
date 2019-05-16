const BASE_URL = process.env.REACT_APP_API_SERVER;

//EVENTS

// fetch all events
export async function getAllEvents() {
  const url = `${BASE_URL}/events`;
  const response = await fetch(url, { method: 'GET' });
  const json = await response.json();
  return json;
}

// fetch all races by event
export async function getRacesByEvent(eventId) {
  const url = `${BASE_URL}/events/${eventId}/races`;
  const response = await fetch(url, { method: 'GET' });
  const json = await response.json();
  return json;
}

// RACES

// fetch rider by id
export async function getRace(raceId) {
  const url = `${BASE_URL}/races/${raceId}`;
  const response = await fetch(url, { method: 'GET' });
  const json = await response.json();
  return json;
}

// fetch all races
export async function getAllRaces() {
  const url = `${BASE_URL}/races`;
  const response = await fetch(url, { method: 'GET' });
  const json = await response.json();
  return json;
}

// fetch riders by race
export async function getRidersByRace(raceId) {
  const url = `${BASE_URL}/races/${raceId}/riders`;
  const response = await fetch(url, { method: 'GET' });
  const json = await response.json();
  return json;
}

// RIDERS

// create rider
export async function createRider(rider) {
  const url = `${BASE_URL}/riders`;
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(rider),
  });
  const json = await response.json();
  return json;
}

// update rider
export async function updateRider(rider) {
  const url = `${BASE_URL}/riders/${rider.id}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(rider),
  });
  const json = await response.json();
  return json;
}

// fetch rider by id
export async function getRider(riderId) {
  const url = `${BASE_URL}/riders/${riderId}`;
  const response = await fetch(url, { method: 'GET' });
  const json = await response.json();
  return json;
}

// fetch all riders
export async function getAllRiders() {
  const url = `${BASE_URL}/riders`;
  const response = await fetch(url, { method: 'GET' });
  const json = await response.json();
  return json;
}
