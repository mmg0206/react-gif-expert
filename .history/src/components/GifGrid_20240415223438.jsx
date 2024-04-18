const GifGrid = ({category}) => {

  const getGifs = async (category) =>{
    
    const url=`http://api.giphy.com/v1/gifs/search?api_key=Ls33XwmjLip5m9fo9lFfzjgpz7a8Isa8&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(gifs)
  }

  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}

export default GifGrid
