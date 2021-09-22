import './App.css';
import {Router} from '@reach/router';
import Main from './view/Main';
import OneAuthor from './view/OneAuthor';
import UpdateAuthor from './components/UpdateAuthor';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path = "/"/>
        <OneAuthor path = "/author/:_id"/>
        <UpdateAuthor path = "/author/edit/:_id"/>
      </Router>
    </div>
  );
}

export default App;
