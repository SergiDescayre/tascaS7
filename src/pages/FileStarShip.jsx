import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import imgNotFound from "../assets/rd2d.jpg";
import Pilots from "../components/Pilots";
import Films from "../components/Films";
const FileStarShip = () => {
  const { data, idImage } = useSelector((state) => state.starShips);
  const [img, setImg] = useState(
    `https://starwars-visualguide.com/assets/img/starships/${idImage}.jpg`
  );
  const param = useParams();

  //resupero informació de la nau pel su nom
  const starship = data.find((item) => item.name === param.name);

  const handleError = () => {
    setImg(imgNotFound);
  };
  return (
    <>
      <div className=" w-[85%] mx-auto mt-10">
        <span className="p-2 border-t border-b border-gray-500 block">
          STARSHIP
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div >
            <img className="rounded object-cover w-full h-full" onError={handleError} src={img} />
          </div>
          <div className=" grid-cols-1 justify-between bg-gray-900  border-l-8 border-red-500 rounded min-h-[400px]  ">
            <div className="text-lg uppercase p-3">
              <span>{starship.name}</span>
            </div>
            <div className="px-3">
              <span className="">
                Lorem ipsum dolor sit amet coectetur adipisicing elit. Impedit
                non dolorum, excepturi nemo eaque molestiae rerum natus enim,
                aspernatur d
              </span>
            </div>
            <div className="grid grid-cols-1 pt-6 px-3 ">
              <div className="self-end">
                <p>Model: {starship.model}</p>
                <p>Cost in credits: {starship.cost_in_credits}</p>
                <p>Admospheric: {starship.max_atmosphering_speed}</p>
              </div>
              <div>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Length: {starship.length}</p>
                <p>Crew: {starship.crew}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pilots starship={starship} />
      <Films starship={starship}/>
    </>
  );
};

export default FileStarShip;

//https://starwars-visualguide.com/assets/img/starships/5.jpg
