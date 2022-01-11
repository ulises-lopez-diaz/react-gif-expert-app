import React, {  Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])

    const { data:images, loading } = useFetchGifs(category);

    console.log(loading);
    console.log(images);
    // // se ejecuta cada que la categoria cambie si es que sucede
    // // espera a recibir los objetos de las tarjetas con id, title, img
    // // despues se procesa la promesa y se setean las imagenes
    // // images[{id, title, url},{id, title, url} .......]

    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category]);

    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Nt2WPWkc1baxoAZ5Zo96EIRlJ5ZlPNxV`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();

    //     const gifs = data.map(img => {
    //         return{
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url

    //         }
    //     })
    //     //console.log(gifs)

    //     setImages( gifs )
        
    // }   

    //getGifs();


    // retorna el grid con las tarjetas que contienen los gifs
    // de la categoria recibida

    // images[{id, title, url},{id, title, url} .......]
    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                    {
                        images.map(img => ( 
                                <GifGridItem 
                                    key={img.id}
                                    {...img}
                                />
                        ))
                    }
            </div>
        </Fragment>
        
    )
}
