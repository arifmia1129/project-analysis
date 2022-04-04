import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Dashboard></Dashboard>
      <Reviews></Reviews>
      <NotFound></NotFound>
      <Blogs></Blogs>
      <About></About>
    </div>
  );
}

export default App;
