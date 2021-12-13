import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { Message } from './components/Message/Message';
const messageLabel = "Hello, person";
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Learn React</p>
        <Button />
        <Message title={messageLabel} onemoreProp={123} />
      </header>
    </div>
  );
}

export default App;
