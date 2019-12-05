import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ls from 'local-storage'

class Nav extends Component {

    flush = () => {
        ls.remove('token')
        window.location.pathname='/'
    }

    render() {
        return (
        <div>
            <nav>
                <ul>
                  <Link to='/'> <li> Home </li> </Link>
                    { ls.get('token') ?
                        <li onClick={this.flush}> Logout </li> :
                        <Link to='/'> Login </Link>
                    }
                </ul>
            </nav>
        </div>)
    }

}

export default Nav
