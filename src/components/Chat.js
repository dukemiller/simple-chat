import React from 'react';
import { Message } from './Message';
import { MessageView } from './MessageView';
import { MessageSubmit } from './MessageSubmit';
import { Post } from '../models/Post';

export class Chat extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            username: this.props.username,
            posts: [ ]
        };

        // var host = location.origin.replace(/^http/, 'ws')
        
        this.connection = new WebSocket('wss://just-a-simple-websocket-chat.herokuapp.com');

        this.connection.onmessage = (e) => {

            // parse post
            let {message, user} = JSON.parse(e.data);
            var post = new Post(message, user);

            // add it to array
            var array = this.state.posts;
            array.push(<Message post={post} />);
            this.setState({posts: array});
        }
    }

    sendPost(post) {
        // add only if available
        if (this.connection.readyState === 1)
            this.connection.send(JSON.stringify(post));
    }

    render() {
        return (
            <div style={{width: '800px', marginLeft: 'auto', marginRight: 'auto', padding: '8px'}} >
                <MessageView posts={this.state.posts} />
                <MessageSubmit username={this.state.username} sendPost={this.sendPost.bind(this)} />
            </div>
        );
    }
}