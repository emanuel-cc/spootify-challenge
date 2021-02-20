import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Componentes Personalizados
import ArtistPage from '../pages/ArtistPage';
import HomePage from '../pages/HomePage';
import PlaylistCategoryPage from '../pages/PlaylistCategoryPage';

// Se encarga de gestionar las rutas de la aplicación
const App = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/category/:id" component={PlaylistCategoryPage}></Route>
            <Route exact path="/artist/:id" component={ArtistPage}></Route>
        </Switch>
    </BrowserRouter>
);

export default App;