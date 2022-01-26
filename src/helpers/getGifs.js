const getGifs = async (category) => {
    
    const api_key = 'olker8uXsi4QXnEirqeLJiSG5rRrhjDy';
    const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api_key}`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};

export default getGifs;