export const getGifs = async(category) => { // Nunca poner funciones dentro de un functional component, ya que se vuelven a renderizar multiples veces
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WSzNZsKxXbJrfg7T51XaQk6woXgyXBE2&q=${category}&limit=10`;
    const resp = await fetch(url)
    const{data} = await resp.json();
  
    const gifs= data.map(img => (
      {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    )) // Si se ponen parentesis para regresar objetos no es necesario poner return

    return gifs;
    
  }