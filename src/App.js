import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <Router>
      		<div>
        		<nav>
          			<h3>
              	  <Link to="/ShoppingList">Make a Shopping List</Link>
                </h3>
                <h3>
              	  <Link to="/App">Back to Homepage</Link>
                </h3>
        		</nav>

        		<Routes>
          			<Route path="/ShoppingList" element={<ShoppingList />} />
        		</Routes>
      		</div>
    	</Router>

      </header>
    </div>
    </>
  );
}

export default App;
