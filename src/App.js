import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { Fragment, useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() =>{
    props.getUserAuth();
  },[]);

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

const mapStateToProps = (state) => {
  return{};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
