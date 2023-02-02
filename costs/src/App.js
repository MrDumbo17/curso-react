import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layouts/Container';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';



function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Container customClass='min-height'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects/' element={<Projects/>} />
            <Route path='/company' element={<Company/>} />
            <Route path='/contact' element={<Contact/> }/>
            <Route path='/newproject' element={<NewProject/>} />
          </Routes>
        </Container>
      
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
