import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemons-list';
import PokemonDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';

    
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
        <Route exact path="/pokemon/edit/:id" component={PokemonEdit} />
       </Switch>
        </div>
      </Router>
    );
  }
   
  export default App;