import React from 'react';
import Option from './Option';

const Options = (props)=>{
     return (
        <div>
        {props.options.length==0 && <p>Please Enter a value</p>}
        {!props.options.length==0 && <button onClick={props.removeOptions}>Remove All</button>}
        {
            props.options.map((option) => 
            <Option key={option} 
            optionText={option} 
            deleteSingleItem={props.deleteSingleItem}/>)
        }
        </div>
    );
};

export default Options;