import React, { Component } from 'react'

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            searchResult: [],
            enteredKeyword: '',
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            this.setState({users})
        })
        .catch(error => this.setState({ error })); 
    }
    handleChange(e) {
        this.setState({
            enteredKeyword : e.target.value
        })
        let searchResult;
        if(e.target.value!==''){
            searchResult = this.state.users.filter(user=>{
                return user.name.includes(e.target.value);
            })
        } else {
            searchResult = [];
        }
        this.setState({
            searchResult
        })
    }

    render() {
        return (
            <div>
                <input type="text" 
                onChange={this.handleChange} 
                placeholder="search user" 
                className="search-input" 
                value={this.state.enteredKeyword} 
                />
                <br/>
                { this.state.searchResult.map( user => {
                return <h3 key={user.id}>{user.name}</h3>
                })}
            </div>
        )
    }
}

export default SearchUser;
