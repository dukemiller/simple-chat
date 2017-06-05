import React from 'react';

export class Message extends React.Component {
    
    render() {
        return (
            <div style={{margin: '8px', textAlign: "left", alignContent: "horizontal" }}>
                <span style={{fontSize: '18px', opacity: '0.3', fontWeight: 'bold'}}>
                    {this.props.post.user + ': '}
                </span>
                <span>
                    {this.props.post.message}
                </span>
            </div>
        )
    }
}
