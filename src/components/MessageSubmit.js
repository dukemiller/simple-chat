import React from 'react';
import {Post} from '../models/Post';

export class MessageSubmit extends React.Component {

    constructor(props) {
        super(props);
        this.sendPost = this.props.sendPost;
        this.state = {
            username: this.props.username,
            text: "",
        }
    }

    submit(event) {
        event.preventDefault();
        if (this.state.text.length > 0) {
            this.sendPost(new Post(this.state.text, this.state.username));
            this.setState({text: ""});
        }
        return false;
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.submit.bind(this)} style={{display: "flex", margin: '16px'}}>
                <input value={this.state.text} 
                       onChange={this.handleChange.bind(this)} 
                       type="text" 
                       style={{flex: "7", height: "25px"}} 
                />
                <input type='submit' style={{flex: "1", marginLeft: "10px"}} value='Post' />
            </form>
        );
    }
}