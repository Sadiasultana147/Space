import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter >

        <Navigation></Navigation>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
             
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
