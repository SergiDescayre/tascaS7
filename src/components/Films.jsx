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
      <div className=" w-[85%] mx-auto mt-10">
        <span className="p-2 border-t border-b border-gray-500 block">
          FILMS
        </span>
        {data.length > 0 ? data.map(film => <CardFilm key={film.title} film={film} />)
          : <ImageNotFound title="films"/>
        }
      </div>
    )

  }

}

export default Films
