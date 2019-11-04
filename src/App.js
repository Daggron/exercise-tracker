import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar.components';

function App() {
  return (
   <Router>
     <Navbar />
     {/* <Route path="/" exact component={ExerciseList} />
     <Route path="/edit/:id" component={EditExercise} />
     <Route path="/create" component={CreateExercise} />
     <Route path="/user" component={CreateUser} /> */}

   </Router>
  );
}

export default App;
