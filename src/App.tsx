import "./App.css";
import Atanagildo from "./assets/rey_atanagildo.png";
import Ataulfo from "./assets/rey_ataulfo.png";
import Ervigio from "./assets/rey_ervigio.png";

function App() {
  const reyes = ["Atanagildo", "Ataulfo", "Ervigio"];
  const imgReyes = [Atanagildo, Ataulfo, Ervigio]
  return( 
  <>
  {reyes.map((rey, index) => {
    return(
    <div className="card" key={index}>
      <img src={imgReyes[index]} alt={rey} />
      <p>{rey}</p>
    </div>
    )
  })
  }
  </>
  );
}

export default App;
