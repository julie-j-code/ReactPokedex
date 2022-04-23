import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemons-list';
import PokemonDetail from './pages/pokemon-detail';

    
const App: FunctionComponent = () => {
 
    return (
      <Router>
        <div>
        <nav> 
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">Pokédex</Link>
          </div> 
        </nav>
        <Switch>
        <Route exact path="/" component={PokemonsList} />
        <Route exact path="/pokemons" component={PokemonsList} />
        <Route exact path="/pokemon/:id" component={PokemonDetail} />
       </Switch>
        </div>
      </Router>
    );
  }
   
  export default App;