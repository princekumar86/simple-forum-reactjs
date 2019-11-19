import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthorName from './AuthorName';

class Home extends Component {
    state = {
        posts: [],
        users: [],
        error: {}
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            this.setState({posts})
        })
        .catch(error => this.setState({ error })); 
        
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
                            <Link to={`/user/${post.userId}`} className="nav-link-unstyle">
                            <p><AuthorName id={post.userId} /></p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Home;
