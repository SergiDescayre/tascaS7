import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Pilots from "../components/Pilots";
import Films from "../components/Films";
import CardStarShip from "../components/CardStarShip";
const FileStarShip = () => {
  const { data} = useSelector((state) => state.starShips);

  const param = useParams();

  //resupero informació de la nau pel su nom
  const starship = data.find((item) => item.name === param.name);

  return (
    <>
      <CardStarShip starship = {starship} />
      <Pilots starship={starship} />
      <Films starship={starship}/>
    </>
  );
};

export default FileStarShip;

//https://starwars-visualguide.com/assets/img/starships/5.jpg
