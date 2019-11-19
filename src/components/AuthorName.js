import React, { Component } from 'react'

class AuthorName extends Component {
    state = {
        user : {}
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then(res => res.json())
            .then( user => {
                
                this.setState({
                    user
            })
        })
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



