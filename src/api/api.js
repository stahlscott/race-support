const username = process.env.REACT_APP_BACKEND_USERNAME;
const password = process.env.REACT_APP_BACKEND_PASSWORD;
const basicAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

export async function get(url) {
  const response = await fetch(url, { method: 'GET' });
  const json = response && response.ok ? await response.json() : {};
  return json;
}

export async function post(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(payload),
  });
  const json = response && response.ok ? await response.json() : {};
  return json;
}

export async function authGet(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: basicAuth,
    }),
  });
  const json = response && response.ok ? await response.json() : {};
  return json;
}

export async function authPost(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      Authorization: basicAuth,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(payload),
  });
  const json = response && response.ok ? await response.json() : {};
  return json;
}
