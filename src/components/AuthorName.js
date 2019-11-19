import React, { Component } from 'react'

class AuthorName extends Component {
    state = {
        user : {},
        error: ''
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then(res => res.json())
            .then( user => {
                this.setState({ user })
            })
            .catch(error => this.setState({ error })); 
    }
    render() {
        return (
            <span className="author-name">
                {this.state.user.username} | {this.state.user.email}
            </span>
        )
    }
}

export default AuthorName;



