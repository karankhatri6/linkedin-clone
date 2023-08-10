import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='home' element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
