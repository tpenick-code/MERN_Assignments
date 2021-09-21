import './App.css';
import {Router} from '@reach/router';
import Main from './view/Main';
import OneProduct from './view/OneProduct';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path = "/"/>
        <OneProduct path = "/product/:_id"/>
        <UpdateProduct path = "/product/edit/:_id"/>
      </Router>
    </div>
  );
}

export default App;
