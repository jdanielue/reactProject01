import React, {useState} from "react";
import useEquipo from "./hooks/useEquipo";

function CrearEquipo() {
  const [nombre, setNombre] = useState("")
  const [jugador, agregarJugador] = useEquipo();
  return (
    <div>
      <h3>Crear equipo</h3>
      <h4>Agregar nombre de equipo</h4>
      <input type="text"></input>
      <h4>Agregar jugador</h4>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
      <button onClick={() => agregarJugador(nombre)}>+</button>
      <div>
      <button>Agregar Equipo</button>
      </div>
      <ul>
        {jugador.map(juga => (
        <li>
          {juga}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default CrearEquipo;