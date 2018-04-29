import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Rupesh', age: '20' },
      { name: 'Rupesh', age: '40' },
      { name: 'Rupesh', age: '30' }
    ],
    message: ''
  };
  ChangeName = () => {
    this.setState({
      persons: [
        { name: 'changed', age: '20' },
        { name: 'jay', age: '20' },
        { name: 'jay', age: '20' }
      ]
    });
  };

  ChangeMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.ChangeName('Ruesh')}>Change name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.ChangeName}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          coding
        </Person>
        <h1> React </h1>
        <h1> {this.state.message}</h1>
        <input
          type="text"
          name="lab"
          onChange={this.ChangeMessage}
          value={this.message}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
