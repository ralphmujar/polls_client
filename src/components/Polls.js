import React, {Component} from 'react'
import ls from 'local-storage'
import Card from './Card'

class Polls extends Component {

    constructor(props) {
      super()
      this.state = {
          polls : [],
      }
    }
    
    fetchPolls = () => {

        fetch('http://localhost:8000/polls/', {
            headers : {
                'Authorization' : 'Token '+ls.get('token').slice(1, -1),
                'Accept' : 'application/json'
            }
        })
        .then( res => res.json() )
        .then( res => this.setState({ polls : res }) )
    
    
    }


    componentWillMount() {
        if (ls.get('token')) {
            this.fetchPolls()
        } else {
            window.location.pathname = '/'
        }
    }


    render() {
        return (
        <div>
        { this.state.polls.length ? 
            this.state.polls.map( (poll) => <Card key={poll.id} question={poll.question} />)
            : <div> 0 </div>
        }
        </div>)
    }

}

export default Polls
