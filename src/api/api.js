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
