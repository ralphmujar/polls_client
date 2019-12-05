import React from 'react'

let sayHi = () => {}

let Greet = (props) => {
    return (<div> 
                <p> Hello {props.name} </p>
                <button> greet </button>
            </div>)
}

export default Greet
