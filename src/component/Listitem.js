import React,{useState} from 'react'
import Inputtake from './Inputtake';

const Listitem = (props) => {

	// useEffect(() => {
	// })
	const [list1, listitem1] = useState([]);
	// listitem1(props.item);
	// console.log(list1);
	var handledelete = (x) => {
		console.log("clicked");
		var z = Object.values(x);
		z.map(x => {
		console.log(props.item.indexOf(x))
		var index = props.item.indexOf(x)
		listitem1(props.item.splice(index,1)); 
		});
	}

	var handleedit = (x) => {
		console.log("edit");
		var z = Object.values(x);
		z.map(x => {
		console.log(props.item.indexOf(x))
		var index = props.item.indexOf(x)
		listitem1(props.item[index] = "hi harshiv")
		});
	}

	console.log(props.item);
	return (
		<div>
		{
				props.item.map(x => <li key={x}> {x} <i className="fa fa-trash" style={{marginRight:"20px", cursor:"pointer"}} aria-hidden="true" onClick={() => handledelete({x})}></i><i className="far fa-edit" style={{marginRight:"20px" , cursor:"pointer"}} onClick={() => handleedit({x})}></i><Inputtake id="checkbox" className="form-control123"  type="checkbox" id="inputcheck" /></li>)
		}
		</div>
	)

}

export default Listitem