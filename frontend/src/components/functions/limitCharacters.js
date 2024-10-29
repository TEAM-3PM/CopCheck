export const limitCharacters = (str, limit) => {
  return str.length > limit ? `${str.slice(0, limit)}...` : str;
};
