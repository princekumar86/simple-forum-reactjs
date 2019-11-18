import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        posts: [],
        users: [],
        author: {}
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            this.setState({posts})
            console.log(posts)
        });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            this.setState({users})
            console.log(users)
        });
    }
    author(id) {
        const author = this.state.users.filter(user => user.id === id )

    }
    render() {
        return (
            <div className="container">
                All Posts
                <hr/>
                {this.state.posts.map( post => {
                    return (
                        <div key={post.id}>
                            <Link to={`/post/${post.id}`} className="nav-link-unstyle"><h3>{post.title}</h3></Link>
                            <Link to={`/user/${post.userId}`} className="nav-link-unstyle"><p>{ post.userId }</p></Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Home;
