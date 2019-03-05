import React, { Component } from 'react';
import axios from 'axios';

// stateless component 

const List = (props) => {
    const product = props.product;


    return (
        <ul>
            {product}
        </ul>
    )

}


// class List extends Component{
//     constructor(props){
//         super()
//         this.state = {
//             //companies:[]
//             products:[]
//         }
//     }  
    
//     render(){
//         console.log(this.props.product)
//         let { products } = this.state
//         products.push(this.props.product)
//         this.setState({products});
//         return (
//             <div>
//                 <ul>
//                 {
//                     products.map(product => {
//                         return <li>{product.name}</li>
//                     })
//                 } 
//                 </ul>
//             </div>
//         )
//     }
// }

export default List;