import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
export const GifGrid = ({category}) => {

  const {images,isLoading} = useFetchGifs(category);


//Abajo implementaremos un custoum hook para aplicar DRY(dont reapeat yourself)
  /* const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    //console.log(images);
  }
  useEffect(() => {
    getImages();
  },[])
   */
  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && (<h1> Cargando </h1>)
    }
    <div className="card-grid">
      {images.map((image) => 
        /* (<li key={id}> {title}</li>) */
        <GifItem
         key={image.id}
         {...image} // Esparce todas las props del padre al hijo
         /> 
      )}
    </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}