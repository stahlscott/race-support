import { get, post } from './api';

const BASE_URL = `${process.env.REACT_APP_API_SERVER}`;

export async function login(username, password) {
  const url = `${BASE_URL}/login`;
  console.log(url);
  const response = await post(url, { username, password });
  console.log(response);
}

export function logout() {
  const url = `${BASE_URL}/logout`;
  console.log(url);
  return get(url);
}

export async function isAuthenticated() {
  const url = `${BASE_URL}/login/test`;
  return (await get(url).login) === 'success';
}
