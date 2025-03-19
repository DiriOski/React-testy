
//import './App.css';
import Menu from './menu';
import Stokpa from './footer';
import Baner from './baner';
import Esklep from './esklep';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Karty from './karty';
import Onas from './onas';
import Okazje from './okazje';
import Pomoc from './pomoc';
import Regulamin from './regulamin';
import Licytacje from './licytacje';
import Logowanie from './logowanie';
import Koszyk from './koszyk';
import Rejestracja from './rejestracja';

function App() {
  return (
    <Router>
        <div className="App">
             <Menu/>

        <div className='Zawartosc'>
            <Switch>
                <Route exact path="/">
                     <Baner/>
                </Route>
                <Route path="/esklep">
                     <Esklep />
                </Route>
                <Route path="/karty">
                     <Karty />
                </Route>
                <Route path="/onas">
                     <Onas />
                </Route>
                <Route path="/okazje">
                     <Okazje />
                </Route>
                <Route path="/pomoc">
                     <Pomoc />
                </Route>
                <Route path="/regulamin">
                     <Regulamin />
                </Route>
                <Route path="/licytacje">
                     <Licytacje />
                </Route>
                <Route path="/logowanie">
                     <Logowanie />
                </Route>
                <Route path="/koszyk">
                     <Koszyk />
                </Route>
                <Route path="/rejestracja">
                     <Rejestracja/>
                </Route>
            </Switch>
        </div>

            <Stokpa/>
        </div>
    </Router>
  );
}

export default App;
