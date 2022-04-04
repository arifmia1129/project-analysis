import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Dashboard></Dashboard>
      <Reviews></Reviews>

    </div>
  );
}

export default App;
