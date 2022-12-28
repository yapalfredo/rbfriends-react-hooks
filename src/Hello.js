import React, { Component } from "react";


//Old way for writing
// class Hello extends Component {
//     render(){
//         return (
//             <div>
//                 <h1>Hello World</h1>
//                 {/* <p>Welcome to React!</p> */}

//                 {/* displaying props from inde */}
//                 <p>{this.props.greeting}</p>
//             </div>
//         );
//     }
// } 


//new way of writing
const Hello = (props) => {
    return (
        <div>
            <h1>Hello World</h1>
            {/* <p>Welcome to React!</p> */}

            {/* displaying props from inde */}
            <p>{props.greeting}</p>
        </div>
    );
} 

export default Hello;