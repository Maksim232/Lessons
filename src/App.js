
import './App.css';
import { Button } from './components/Button/Button';
import { Message } from './components/Message/Message';
import React, { useRef, useState } from "react";
import { Form } from './components/Form';
import { MessageList } from './components/MessageList/MessageList';
const messageLabel = "Hello, person";

export const AUTHORS = {
  HUMAN: "dude",
  BOT: "bot",
};

function App() {

  const [messageList, setMessageList] = useState([]);

  const inputRef = useRef();
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = (text) => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleClick2 = (text) => {
    setCounter2(counter2 + counter);
    console.log(counter2);
  };

  const handleAddMessage = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN };
    setMessageList((prewMessageList) => [...prewMessageList, newMessage]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onButtonClick={handleClick} anyProp={counter} />
        <Message title={messageLabel} onemoreProp={123} />

        <Form onSubmit={handleAddMessage} ></Form>

        <MessageList messages={messageList} />
      </header>
    </div>
  );
}

export default App;

export class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      counter2: 0,
    };
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button onButtonClick={this.handleClick} anyProp={this.state.counter} />
        </header>
      </div>
    );
  }
}