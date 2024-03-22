import { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { fetchFilms } from '../features/films/filmsThunk'
import CardFilm from './CardFilm'
import ImageNotFound from './ImageNotFound'

const Films = ({starship}) => {
    const dispatch = useDispatch()
    const {data,isLoading} = useSelector(state => state.films)
    
  useEffect(()=> {
    dispatch(fetchFilms(starship.films))
  },[])
 
  if(isLoading){
    return <div>Carregant...</div>
  }else{
    return (
      <div className=" w-[85%] mx-auto my-10">
        <span className="p-2 border-t border-b border-gray-500 block">
          FILMS
        </span>
        <div className='mt-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {data.length > 0 ? data.map(film => <CardFilm key={film.title} film={film} />)
          : <ImageNotFound title="films"/>
        }
        </div>
      </div>
    )

  }

}

export default Films
