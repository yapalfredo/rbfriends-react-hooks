import React from "react";

//The props hold the children of Scroll
const Scroll = (props) =>{
    return ( 
        <div style={{overflowY: 'scroll', border: '1px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
}


export default Scroll;