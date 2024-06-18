import './App.css';
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Lorem ipsum and hello!" />
        <Message text="Lorem ipsum and welcome!" />
      </header>
    </div>
  );
}

export default App;
