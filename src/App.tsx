import "./App.css";
import Atanagildo from "./assets/rey_atanagildo.png";
import Ataulfo from "./assets/rey_ataulfo.png";
import Ervigio from "./assets/rey_ervigio.png";
import Incognito from "./assets/rey_incognito.png";

function App() {
  const reyes = ["Atanagildo", "Ataulfo", "Ervigio"];
  const imgReyes = [Atanagildo, Ataulfo, Ervigio];
  const cambioRey = (e: unknown) => {
    if (
      e.target.src.includes("ervigio") ||
      e.target.src.includes("ataulfo") ||
      e.target.src.includes("atanagildo")
    ) {
      e.target.src = Incognito;
      e.target.parentNode.style.backgroundColor = "#fff";
      e.target.nextSibling.style.color = "#000";
    } else {
      e.target.style.visibility = "hidden";
    }
  };
  const cambioParrafo = (e) =>{
    if (e.target.outerText.includes("Ervigio") || e.target.outerText.includes("Atanagildo") || e.target.outerText.includes("Ataulfo")) {
      e.target.innerHTML = "Visto"
    }else{
      e.target.style.visibility = "hidden"
    }
    
}
  return (
    <>
      {reyes.map((rey, index) => {
        return (
          <div className="card" key={index}>
            <img onClick={cambioRey} src={imgReyes[index]} alt={rey} />
            <p onClick={cambioParrafo} className="parrafor">{rey}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
