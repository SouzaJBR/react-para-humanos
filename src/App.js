import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
   
    return (
      <MuiThemeProvider>
        <div style={{padding: 30, backgroundColor:'#DDDDDD'}}>
          <Post storageKey={'post1'} text={'Olá Humanos'}/>
          <Post storageKey={'post2'} text={'Sou outro post'}/>
        </div>        
      </MuiThemeProvider>
    )
  }
}

export default App;