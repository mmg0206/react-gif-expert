const GifGrid = ({category}) => {

  const getImages = async (category) =>{
    
    const url=`http://api.giphy.com/v1/gifs/search?api_key=Ls33XwmjLip5m9fo9lFfzjgpz7a8Isa8&q=${category}&limit=20`;
    const data = await fetch(url);
    console.log(data);
  }

  getImages(category);
  return (
    <>
      <h3>{category}</h3>
    </>
  )
}

export default GifGrid
