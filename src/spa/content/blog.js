import React from 'react';
import axios from "axios";
import Product from './crud/product';



class Blog extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }

        this.getProducts = this.getProducts.bind(this)
        this.deleteCurrentProduct = this.deleteCurrentProduct.bind(this)
    }
    

    componentWillMount(){
        this.getProducts()
    }

    getProducts(){
        axios.get('http://localhost:3000/products')
            .then((response)=>{
                console.log(response.data)
                this.setState({products: response.data})
            })
    }

    deleteCurrentProduct(id){
        console.log(id)
        axios.delete("http://localhost:3000/products/" + id)
            .then((response)=>{
                console.log(response)
                this.getProducts()
            })
    }

    displayProducts(){
        return this.state.products.map((p)=>{
            return (
                <Product
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    up={p.upvote}
                    down={p.downvote}
                    desc={p.description}
                    deleteMe={this.deleteCurrentProduct}
                ></Product>
            )
        })
    }

    render() { 
        return (
            <div>  
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>+</th>
                                <th>-</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayProducts()}                        
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


 
export default Blog;