export const fetchMovies = async (query) => {
  const encodedQuery = encodeURIComponent(query);
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodedQuery}`,
  );
  const data = await response.json();
  return data.docs;
};

export const fetchRandomDogImage = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
};
