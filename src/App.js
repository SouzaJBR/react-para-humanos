import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {

  constructor(){
    super();
    this.state = {
      posts: [
        'Olá Humanos',
        'Sou outro post'
      ]
    }
  }

  componentDidMount() {
    let state = localStorage.getItem(this.props.storageKey);
    state = JSON.parse(state);
    this.setState(state);
  }

  saveInStorage() {
    let actualState = this.state;
    actualState = JSON.stringify(actualState);
    localStorage.setItem("appState", actualState);
  }

  createNewPost()
  {
    let post = prompt('Digite o texto do novo post');
    let state = this.state;

    state.posts.push(post);
    this.setState(state);

    this.saveInStorage();
  }

  render() {
   
    console.log(this.state.posts);

    return (
      <MuiThemeProvider>
        <div style={{padding: 30, backgroundColor:'#DDDDDD'}}>
          {this.state.posts.map((post, index) => {
            return <Post storageKey={'post' + index} text={post} />;
          })}

          <FlatButton label={'Criar Post'} style={{backgroundColor: '#AAAADD'}} onClick={this.createNewPost.bind(this)} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;