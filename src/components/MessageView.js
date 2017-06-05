import React from 'react';

export class MessageView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
    }

    renderMessage(message, key) {
        return (
            <div style={{margin: '16px'}} key={key}>
                {message}
            </div>
        );
    }

    getLastMessages(amount = 5) {
        var totalposts = this.state.posts;
        let posts = totalposts.slice(Math.max(0, totalposts.length - amount), totalposts.length);
        let i = 0;
        return posts.map(post => this.renderMessage(post, i++));
    }

    render() {
        return (
            <div>
                { this.getLastMessages() }
            </div>
        );
    }
}

