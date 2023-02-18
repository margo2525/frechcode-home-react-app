import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import Footer from './components/footer/Footer';
import Main from './components/main/Main';

import Navbar from './components/navbar/Navbar';

import Home from './pades/Home';
import Projects from './pades/Projects';




import './styles/main.css';

function App() {
  return (
    <div className="App">



      <Navbar />
      <Projects />
      <Home />
      <Main />



      <Footer />


    </div>
  );
}

export default App;
