// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Header from './components/Header.js';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Nav navigation={props.navigation} />
    </div>
  );
}

export default App;
