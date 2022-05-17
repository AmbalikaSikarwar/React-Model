import Posts from './components/posts';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  const posts = [{"id": 1, "name": "test1"}, {"id": 2, "name": "test2"}]
  const name= "testApp"
  return (
    <div className="App">
    <BrowserRouter>
       <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
         
        </ul>
      
      </nav>
      </BrowserRouter>
      <Posts posts={posts} name={name}/>
      
    </div>
  );
}

export default App;