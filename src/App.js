import './App.css';
import Message from './components/Message';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Lorem ipsum and hello!" />
        <Message text="Lorem ipsum and welcome!" />
        <CommentsList />
      </header>
    </div>
  );
}

export default App;
