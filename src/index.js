import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import List from './list';
import axios from 'axios';


// class Main extends Component{
//     constructor(){
//         super()
//         this.state = {

//         }
//     }
//     componentDidMOunt(){
//         axios.get('/api/companies')
//         .then((resp) => resp.data)
//         //set state under
        
//     }       
//     render(){
//         return (
//             <div>
//                 <h1>Acme Categories and Products FAKERR</h1>
//                 <div>
//                 <form>
//                 <button >CLICK HERE FOR STUFF</button>
//                 <App />
//                 </form>
//             </div>
//             </div>
            
//           )
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'))