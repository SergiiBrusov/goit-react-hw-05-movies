export const searchList = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f0f2066a0c712f14855aeae6be3905f3&query=${query}`
  );

  if (!response.ok) {
    throw new Error('some troubles...');
  }

  const data = await response.json();
  return data;
};
