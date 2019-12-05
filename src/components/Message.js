import React, {Component} from 'react'

class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'message' : 'hi'
        }
    }

    sayHi() {
        this.setState({
            'message': 'Goodbye !'
        })
    
    }

    render() {
        return (<div>
            <p> {this.state.message} </p>
            <button onClick={() => this.sayHi()}>Greet</button>
        </div>)
    }

}

export default Message
