import React from 'react';
import axios from "axios";
import Product from './crud/product';



class Blog extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[],
            name:"",
            description:"",
            upvote:0,
            downvote:0
        }

        this.getProducts = this.getProducts.bind(this)
        this.deleteCurrentProduct = this.deleteCurrentProduct.bind(this)
        this.getName = this.getName.bind(this)
        this.getDesc = this.getDesc.bind(this)
        this.getUp = this.getUp.bind(this)
        this.getDown = this.getDown.bind(this)
        this.addProduct = this.addProduct.bind(this)
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

    addProduct(){
        console.log("addProduct called!!!!  ")
        var jsonproduct = {
            "name":this.state.name,
            "upvote": this.state.upvote,
            "downvote": this.state.downvote,
            "description":this.state.description
        }
        console.log(jsonproduct)
        axios.post("http://localhost:3000/products", jsonproduct)
            .then((rd)=>{
                console.log(rd)
                this.getProducts()
            })
        this.setState({ name:"",
                        description:"",
                        upvote:0,
                        downvote:0
                    })

        console.log(this.props.match)            

            
    }

    getName(event){
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }

    getDesc(event){
        console.log(event.target.value)
        this.setState({description: event.target.value})
    }

    getUp(event){
        console.log(event.target.value)
        this.setState({upvote: event.target.value})
    }

    getDown(event){
        console.log(event.target.value)
        this.setState({downvote: event.target.value})
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
                    <hr></hr>
                    <br></br>
                    <div>
                        Name: <input type="text" onChange={this.getName} value={this.state.name}></input> <br></br>
                        Description: <input type="text" onChange={this.getDesc} value={this.state.description} ></input> <br></br>
                        Upvote: <input type="number" onChange={this.getUp} value={this.state.upvote}></input><br></br>
                        Downvote: <input type="number" onChange={this.getDown} value={this.state.downvote}></input><br></br>
                        <button onClick={this.addProduct}>Add</button>
                </div>
                </div>
            </div>
        );
    }
}


 
export default Blog;