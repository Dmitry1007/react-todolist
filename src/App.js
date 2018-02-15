import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/AddTodo/';
import actions from './actions/';
import logo from './logo.svg';
import './App.css';

export const App = ({ submitTodo }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <h1>Todo List</h1>
    <AddTodo submitTodo={submitTodo}/>
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
