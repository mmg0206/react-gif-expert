  // const [images, setImages] = useState([]);

  // const getImages = async () =>{
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }

  // useEffect(()=>{
  //   getImages();
  // },[]);

  
  const useFetchGifs = () => {
    
    return {
        images:[],
        isLoading: false
    }
  }
  
  export default useFetchGifs
  