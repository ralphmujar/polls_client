import React, {Component} from 'react'

class Clock extends Component {

    constructor(props) {
        super()
        this.state = {date : new Date()}
    }

    tick = () => {
        this.setState({date : new Date()})
    }

    componentDidMount() {
        setInterval(this.tick, 1000)
    }

    render() {
        return (<div>
            <p> {this.state.date.toLocaleTimeString()} </p>
        </div>)
    }

}

export default Clock
