import React, { Component } from 'react'

class UserProfile extends Component {
    state = {
        user : {}
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => res.json())
            .then( user => {
                
                this.setState({
                    user
            })
        })
    }
    

    render() {
        return (
            <div className="user-profile">
                User 
                <hr />
                Username : <b>{this.state.user.username} </b><br/>
                Full name : <b>{this.state.user.name} </b><br/>
                Email : <b>{this.state.user.email} </b><br/>
                Website : <b>{this.state.user.website} </b><br/><br/>
                Company details : <br/>
                <b>{ Object.keys(this.state.user).length>0 && this.state.user.company.name } </b><br/>
                <b>{ Object.keys(this.state.user).length>0 && this.state.user.company.catchPhrase } </b><br/>
                <b>{ Object.keys(this.state.user).length>0 && this.state.user.company.bs } </b><br/>
            </div>
        )
    }
}

export default  UserProfile;
