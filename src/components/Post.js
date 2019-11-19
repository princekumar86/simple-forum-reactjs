import React, { Component } from 'react'

export default class Post extends Component {
    state = {
        post: [],
        comments: [],
        author: {},
        error: {}
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(res => res.json())
            .then( post => {
                console.log(post);
                this.setState({
                    post
            })
            // nested fetch
            fetch(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
                .then(res => res.json())
                .then( author => {
                    this.setState({
                        author
                    })
            })
            // nested fetch end
        })
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}/comments`)
            .then(res => res.json())
            .then( comments => {
                this.setState({
                    comments
            })
        })
        .catch(error => this.setState({ error })); 
        
    }
    render() {
        return (
            <div className="container individual-post"> 
                <hr />
                <h3>{this.state.post.title}</h3>
                <span className="author"> post by : {this.state.author.username} </span>
                <p className="full-post-body">{this.state.post.body} </p><br/>
                post comments <br/>
                {this.state.comments.map( comment => {
                    return(
                            <li key={comment.id}>
                                <span className="comment-subject">{comment.name}</span><br/>
                                <span className="comment-body">{comment.body}</span><br/>
                                <span className="comment-email">{comment.email}</span>
                            </li>
                    )
                })}
            </div>
        )
    }
}
