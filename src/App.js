import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class App extends Component{
    constructor(){
        super()
        this.state = {
            companies:[],
            products:[]
        }
    }  

    addCategory(){
        const {companies} = this.state;
        axios.post('/api/categories')
            .then(resp => {
                companies.push(resp.data)
                this.setState({companies})
            })
            .catch(error => console.log(error))
    }

    removeCategory(id){
        axios.delete(`/api/categories/${id}`)
            .then(() => {
                let companies = this.state.companies;
                companies = companies.filter(company => {
                    return company.id !== id;
                })
                this.setState({companies})
            })
    }

    addProduct(id){
        const {products} = this.state;
        axios.post(`/api/categories/${id}/products`)
            .then((resp) => {
                console.log(resp.data)
                products.push(resp.data)
                this.setState({products})
            })
            .catch(error => console.log(error))
    }
   
    removeProduct(id){
        let {products} = this.state;
        axios.delete(`/api/products/${id}`)
            .then(() => {
                products = products.filter(product => product.id !== id)
                this.setState({products})
            })
            .catch(error => console.log(error))
    }
    componentDidMount(){
        axios.get('/api/categories')
            .then(resp => {
                this.setState({companies:resp.data})
            })
            .catch(error => console.log(error))
    }
    
   
    render(){
        const {companies} = this.state;
        const {products} = this.state;
        return (
            <div>
                <button onClick = {() => this.addCategory()} >ADDDD FAKE COMPANY</button>
                <ul>
                {
                    companies.map(company => {
                        return( 
                            <div key = {company.id}>
                                <li >{company.name} <button onClick={()=> this.addProduct(company.id)}>+</button> <button onClick={() => this.removeCategory(company.id)}>-</button></li>
                                
                                
                                { <ul>
                                    {
                                        products.filter(product => product.CategoryId === company.id).map(product => {
                                            return(
                                                <li key = {product.id}>{product.name} <button onClick={()=> this.removeProduct(product.id)}>-</button></li>
                                            )
                                        })
                                            
                                       
                                        
                                    }
                                </ul>      }
                            </div>
                        )
                    })
                }
                </ul> 
            </div>
        )
    }
}

export default App;