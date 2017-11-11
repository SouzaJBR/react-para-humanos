import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            name: "João",
            likes: 0,
            isFavorite: false,
            comments: ['Olá']
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
        localStorage.setItem(this.props.storageKey, actualState);
    }

    giveLike() {
        let numLikes = this.state.likes;
        numLikes = numLikes + 1;
        const newState = {
            likes: numLikes
        }

        this.setState(newState);
        this.saveInStorage();
    }

    setFavorite() {
        let favorite = this.state.isFavorite;
        favorite = !favorite;

        this.setState({ isFavorite: favorite });
        this.saveInStorage();
    }

    newComment() {
        let comments = this.state.comments;
        const newCommentText = prompt('Digite seu comentário');
        comments.push(newCommentText);

        this.setState({ comments: comments })
        this.saveInStorage();
    }
    render() {
        let favoriteText;

        if (this.state.isFavorite) {
            favoriteText = 'REMOVER DOS FAVORITOS'
        } else {
            favoriteText = 'FAVORITO';
        }

        return (
            <Card style={{marginBottom: 30}}>
                <CardText style={{backgroundColor: '#DDDDFF'}}> 
                    <h1>{this.props.text}</h1>
                    <h2> {this.state.name}</h2>
                    <h4> {'Likes: ' + this.state.likes}</h4>

                    <FlatButton style={{marginRight: 15, backgroundColor: '#a4C639'}} label={'Like'} onClick={this.giveLike.bind(this)} />

                    <FlatButton style={{marginRight: 15, backgroundColor: '#99AAAAA'}} label={favoriteText} onClick={this.setFavorite.bind(this)} />

                    <FlatButton style={{backgroundColor: '#FFFFFF'}} label={'Comentar'} onClick={this.newComment.bind(this)} />

                    {this.state.comments.map(function (text, index) {
                        return (<h4 style={{ padding: 15, backgroundColor: 'white' }} key={index}> {text} </h4>);
                    })}
                </CardText>
            </Card>
        );
    }
}

export default Post;