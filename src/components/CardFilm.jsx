
const CardFilm = ({film}) => {
  const extractNumber = (url) => {
    return url.slice(33).slice(0, -1)
  }
  return (
      <div className="rounded-md overflow-hidden bg-gray-900">
        <img className="border-b-4 border-blue-500 w-[100%]" src={`https://starwars-visualguide.com/assets/img/films/${extractNumber(film.url)}.jpg`} alt={film.title}></img>
        <div className='p-3 text-center'>
        <span className="uppercase block">{film.title}</span>
        <span className="text-gray-400">Episode {film.episode_id}</span>
        </div>
      </div>
  )
}

export default CardFilm
