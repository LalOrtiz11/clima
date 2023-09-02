import logo from './logo.svg';
import './App.css';
import Counter from './counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initCount={52}/>
      </header>
    </div>
  );
}

export default App;
