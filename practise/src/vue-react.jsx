import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//React extended class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      element: [],
      message: ''
    };
  }
  //Event Handler
  click() {
    this.setState({
      name: 'Rupesh'
    });
  }
  //list update
  el() {
    const old = this.state.element;
    this.setState({
      element: old.concat(old.length + 1)
    });
  }

  messageChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  render() {
    let update = '';
    if (this.state.name !== this.props.name) {
      update = <p> updated Bro </p>;
    }
    const list = this.state.element.map(el => {
      let bg = el % 2 === 0 ? 'red' : 'blue';
      let css = {
        backgroundColor: bg
      };
      return (
        <li key={el} style={css}>
          {el}
        </li>
      );
    });
    return (
      <div>
        <h3> Rupesh {this.state.name}</h3>
        {update}
        <button onClick={this.click.bind(this)}>Click Me</button>
        <br />
        <button onClick={this.el.bind(this)}> Add Element</button>
        <ul>{list}</ul>
        <input
          type="text"
          value={this.state.message}
          onChange={this.messageChange.bind(this)}
        />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App name="welcome" />, document.querySelector('#root'));
registerServiceWorker();
