import React, { Component } from 'react';
import './App.css';
import Alert from "./components/Alert";
import Card from "./components/Card";
import Button from "./components/Button";

class App extends Component {
  handleButtonClick() {
    console.log("btn added to app was clicked")
  }
  render() {

    let alerts = [
      {
        id: 1,
        message: "Alert One",
        type: "success"
      },
      {
        id: 2,
        message: "zombies Approaching",
        type: "danger"
      }
    ];


    let message = "Hello, React!";
    return (
      // <div className="container">
      //   <Alert message={message.toUpperCase()}
      //     type="success" />
      //   <Alert message={message.toUpperCase()}
      //     type="danger" />
      // </div>

      <div className="container">
        {alerts.map(a => <Alert key = {a.id} message={a.message} type = {a.type} />)}

        <Card title="my Card" imgsrc="shore.jpg" imgalt="shorepic" width={300}>
          <p>This is my <strong>Card Text</strong></p>
          <Alert message="alert in card" />
        </Card>

        <Button caption="click me!" onClick={() => this.handleButtonClick()}/>
      </div>
    );
  }
}

export default App;
