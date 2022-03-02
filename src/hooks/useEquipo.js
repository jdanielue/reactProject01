import {useState} from 'react'

const useEquipo = () => {

  const [jugador, setJugador] = useState([]);

  const agregarJugador = (nuevoJugador) => {
    setJugador([...jugador, nuevoJugador])
  }

  return [jugador, agregarJugador]
}

export default useEquipo