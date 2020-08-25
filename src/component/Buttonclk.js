import React from 'react'

function Buttonclk(props) {
	return (
			<button className={props.className}  onClick={props.onClick}>{props.input}</button>
	)
}

export default Buttonclk