import "./Bottombar.css";

function Bottombar() {
  return (
    <div className="bottom">
      <div className="bottom-btn">
        <p className="bg-circle-white">A</p>
        <p>See details</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">X</p>
        <p>Habitat</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">Y</p>
        <p>Sort</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">+</p>
        <p>See evaluation</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">B</p>
        <p>Back</p>
      </div>
    </div>
  );
}

export default Bottombar;
