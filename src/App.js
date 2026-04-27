import burgerman from './burgerman.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: '50px'}}>🍔</h1>
        <h2> Hi, burgerman!</h2>
        <img src={burgerman} className="App-logo" alt="burgerman" />
        <p>
          this is burgerman WoRLd !
        </p>
        <button style={{padding: '10px 20px', fontSize: '20px',cursor: 'pointer'}}>주문하기</button>
      </header>
    </div>
  );
}

export default App;
