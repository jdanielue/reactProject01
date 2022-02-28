import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Categoria(params) {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function Home() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Cotejos</h2>
      <h3>
        <Link to={`${url}/crearequipo`}>Crear Equipo</Link>
      </h3>
      <h3>
        <Link to={`${url}/canchas`}>Buscar Canchas</Link>
      </h3>

      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:topicId`}>
          <Categoria />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
