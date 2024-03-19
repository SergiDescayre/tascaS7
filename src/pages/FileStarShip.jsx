import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import imgNotFound from "../assets/rd2d.jpg";

const FileStarShip = () => {
  const { data, idImage } = useSelector((state) => state.starShips);
  const [img, setImg] = useState(
    `https://starwars-visualguide.com/assets/img/starships/${idImage}.jpg`
  );
  const param = useParams();
  const starship = data.find((item) => item.name === param.name);
  console.log(starship);

  const handleError = () => {
    setImg(imgNotFound);
  };
  return (
    <>
      <div className=" w-[85%] mx-auto mt-10 h-screen">
        <span className="p-2 border-t border-b border-gray-500 block">
          STARSHIP
        </span>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div >
            <img className="rounded object-cover w-full h-full" onError={handleError} src={img} />
          </div>
          <div className="bg-gray-900  border-l-8 border-red-500 rounded h-[400px] ">
            <div className="text-lg uppercase p-3">
              <span>{starship.name}</span>
            </div>
            <div className="px-3">
              <span className="text-md">
                Lorem ipsum dolor sit amet coectetur adipisicing elit. Impedit
                non dolorum, excepturi nemo eaque molestiae rerum natus enim,
                aspernatur d
              </span>
            </div>
            <div className="grid grid-cols-2 pt-6 ps-3 ">
              <div className="self-end">
                <p className="text-md">Model: {starship.model}</p>
                <p className="text-md">Cost in credits: {starship.cost_in_credits}</p>
                <p className="text-md">Admospheric: {starship.max_atmosphering_speed}</p>
              </div>
              <div>
                <p className="text-md">Manufacturer: {starship.manufacturer}</p>
                <p className="text-md">Length: {starship.length}</p>
                <p className="text-md">Crew: {starship.crew}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileStarShip;

//https://starwars-visualguide.com/assets/img/starships/5.jpg
