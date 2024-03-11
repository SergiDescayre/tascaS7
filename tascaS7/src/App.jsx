import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const starShips = useSelector((state) => state.starShips);
  console.log(starShips);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold underline">
             Hello world!
      </h1>
      {starShips.results.map((item) => {
        return (
  
          <div key={item.name}>
            <p>{item.name}</p>
            <img src={item.url} alt={item.url} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
