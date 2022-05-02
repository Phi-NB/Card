const url = 'https://fakestoreapi.com/products'

export const getData = () => {
  return fetch(url)
          .then(response => response.json())
}  