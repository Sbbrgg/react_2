// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js'
import Header from './components/Header.js';
import data from './db.json'
import Article from './components/Article.js';

function App(props) {
  let db = data.people;

  return (
    <div className="App">
      <Header/>
      <Nav navigation={props.navigation} />
      <Article db={db}/>
    </div>
  );
}

export default App;
