import React, { useState } from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { Showselected, AddTask, DeleteBook, RemoveBook } from './action';
import moment from 'moment';

function Rack() {
  let input1 = React.createRef(),
    input2 = React.createRef(),
    input3 = React.createRef();
  const dispatcher = useDispatch();
  let dis = useSelector(state => state);
  console.log(dis);

  //const[dum,setdum]=useState({booktitle:'',bookprice:'',bookauthor:''});
  let handle = (e) => {
    // setdum({booktitle:input1.current.value,bookprice:input2.current.value,bookauthor:input3.current.value})
    dispatcher(AddTask({task:input1.current.value, allotedto:input2.current.value,date: input3.current.value}));
    input1.current.value='';
    input2.current.value='';
    input3.current.value='';
  }


let visual=[];

 dis.map((element, index) => {
  if (element.flag === true) {
    console.log(element);
    let data=parseInt((moment(element.date).diff(moment(new Date().toLocaleString())))/86400000 );
    console.log(data);
    if(data==0){   visual.push(<fieldset style={{background:"red",color:"white"}}>
    <p>task :{element.task}<span><a href="#" onClick={() => dispatcher(RemoveBook(element.id))}>Close X</a></span></p>
    <p>allotedto :{element.allotedto}</p>
    <p>Date :{element.date}</p>
    </fieldset>
)}
    if(data==1){   visual.push(<fieldset style={{background:"yellow",color:"red"}}>
    <p>task :{element.task}<span><a href="#" onClick={() => dispatcher(RemoveBook(element.id))}>Close X</a></span></p>
    <p>allotedto :{element.allotedto}</p>
    <p>Date :{element.date}</p>
    </fieldset>
)}
    if(data>1){   visual.push(<fieldset style={{background:"green",color:"white"}}>
    <p>task :{element.task}<span><a href="#" onClick={() => dispatcher(RemoveBook(element.id))}>Close X</a></span></p>
    <p>allotedto :{element.allotedto}</p>
    <p>Date :{element.date}</p>
    </fieldset>
)}
 
  }

})




  return (<div>
     <div className="container">
    <div className="Rack">
    <h3>Tasks:</h3>
        <ul>
        {dis.map((element, index) => {

      return (<li key={element.id} onClick={() => {
        let data=parseInt((moment(element.date).diff(moment(new Date().toLocaleString())))/86400000 );
    console.log(data);
        dispatcher(Showselected(element.id))}}>
        {element.task}<ul><li  onClick={() => dispatcher(DeleteBook(element.id))}>Edit Delete</li></ul>
        </li>);
    })}
        </ul>
    </div>
    <div className="add-book">
    <h2>Add Task</h2>
    
    task:<input type="text" required  ref={input1} /><br/>
    allotedto  :<input type="text" required  ref={input2} /><br/>
    date   :<input type="date" required  ref={input3} /><br/>
    <button onClick={handle}>Submit</button>
    
    </div>
    </div>
    <div className="Usercart">
    <h1>Click on the item to add</h1>
    <fieldset className="book-display">
            <legend>Book Selected</legend>
   {visual}
 </fieldset>
    </div>
    </div>
    );
}

export default Rack;