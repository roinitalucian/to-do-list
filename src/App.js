import React from 'react';
import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import ToDoList from './containers/ToDoList/ToDoList';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <ToDoList />
    
      </Layout>
    </div>
  );
}

export default App;
