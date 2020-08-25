import React from 'react'

const Inputtake = React.forwardRef((props, ref) => (
		<input type={props.type} id={props.id} className={props.className} id={props.id} placeholder = {props.placeholder} onChange={props.onChange} ref={ref} onKeyPress={props.onKeyPress} value={props.value} />

));


export default Inputtake