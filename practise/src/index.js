import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Rupesh', age: '20' },
      { name: 'Rupesh', age: '40' },
      { name: 'Rupesh', age: '30' }
    ],
    message: '',
    hidePersons: false
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

  togglePersons = hide => {
    this.setState({
      hidePersons: hide ? false : true
    });
  };

  render() {
    const style = {
      backgroundColor: 'button',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      textAlign: 'center'
    };
    return (
      <div align="center">
        <button style={style} onClick={() => this.ChangeName('Ruesh')}>
          Change name
        </button>
        <br /> <br />
        <button onClick={this.togglePersons.bind(this, true)} style={style}>
          Hide persons
        </button>
        <button onClick={this.togglePersons.bind(this, false)} style={style}>
          Show persons
        </button>
        {this.state.hidePersons ? (
          <div>
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
          </div>
        ) : null}
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
