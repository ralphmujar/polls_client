import React, {Component} from 'react'
import ls from 'local-storage'

class Home extends Component {

    constructor(props) {
        super()
        this.state = {
            username : '',
            password : '',
            token : ''
        }
    }




    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state

        fetch('http://localhost:8000/polls/login/', {  
            method: 'POST',  
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(collection)
            body: JSON.stringify({
                    'username' : data.username,
                    'password' : data.password
                })
        })
        //.then((res) => res.json() )
        //.then((res) => { this.setState({ token: res.token}) })
        //.then((res) => { this.setState({ token: res }) })
        .then((res) => {
            if (!res.ok) {
                res.json().then(res => alert(res.error) )
            } else {
                return res.json()

            }
        })
        .then(res => JSON.stringify(res.token))
        .then(str => (
            ls.set('token', str),
            window.location.pathname = '/polls'

        ))
        //.then( window.location.pathname = '/message' )
        .catch((err) => console.warn(err) );
    }


    handleOnchangeUname = (e) => {
        this.setState({
            username : e.target.value
        })
    }

    handleOnchangePwd = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    render() {
        return (
        <div>

        <form onSubmit={ this.handleSubmit }>
            <div>
            <input type='text' name='username'
                value={this.state.username} placeholder='username'
                onChange={this.handleOnchangeUname}/>
            </div>

            <div>
            <input type='password' name='password'
                value={this.state.password} placeholder='password'
                onChange={this.handleOnchangePwd}/>
            </div>
            
            <input type='submit' value='Login' />
        </form>

        <div> { this.state.token } </div>

        </div>)
    }

}

export default Home
