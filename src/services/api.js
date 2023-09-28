import axios from 'axios';
import { toast } from 'react-toastify';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0cb875d98efaa0ce49900e145a1636b9';

export async function fetchMovies(endPoint) {
  const url = `${BASE_URL}${endPoint}?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchSearchMovies(endPoint, query) {
  const url = `${BASE_URL}${endPoint}?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieDetails(endPoint, movieId) {
  const url = `${BASE_URL}${endPoint}/${movieId}?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieCast(endPoint, movieId) {
  const url = `${BASE_URL}${endPoint}/${movieId}/credits?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieReviews(endPoint, movieId) {
  const url = `${BASE_URL}${endPoint}/${movieId}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}
export function onFetchError() {
  toast.error(
    'Ой! Щось пішло не так! Спробуйте оновити сторінку або зробіть інший вибір!'
  );
}
