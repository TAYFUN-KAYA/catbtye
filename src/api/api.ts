export const api = () => {
  return fetch(`https://dummyjson.com/users`)
    .then((res) => res.json())
    .then((response) => {
      if (!Array.isArray(response) && Object.keys(response).length === 0) {
        throw new Error('Empty Response');
      }

      return response;
    });
};