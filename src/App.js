import { Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main.js';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import './styles/basic.css';

import './App.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Menu />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
