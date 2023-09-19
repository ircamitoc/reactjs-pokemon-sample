import "./Topbar.css";
import pokeball from "../images/pokeball.png";
import pokeballColor from "../images/pokeballColor.png";

function Topbar() {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeballColor}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            ></img>
            <p>649</p>
          </div>
        </div>
      </div>
      <p style={{ color: "white" }}>A -&gt; Z</p>
    </div>
  );
}

export default Topbar;
