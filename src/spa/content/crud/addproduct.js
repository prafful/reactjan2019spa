import React from 'react';
import axios from "axios";

class AddProduct extends React.Component {

    constructor(props){
        super(props)
        this.state = {
        
            name:"",
            description:"",
            upvote:0,
            downvote:0
        }

       
        this.getName = this.getName.bind(this)
        this.getDesc = this.getDesc.bind(this)
        this.getUp = this.getUp.bind(this)
        this.getDown = this.getDown.bind(this)
        this.addProduct = this.addProduct.bind(this)
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
                this.props.history.push('/blog')
            })
        this.setState({ name:"",
                        description:"",
                        upvote:0,
                        downvote:0
                    })
        console.log(this.props.history)
       

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
                <h4>Add Product form:</h4>
                <div>
                    Name: <input type="text" onChange={this.getName} value={this.state.name}></input> <br></br>
                    Description: <input type="text" onChange={this.getDesc} value={this.state.description} ></input> <br></br>
                    Upvote: <input type="number" onChange={this.getUp} value={this.state.upvote}></input><br></br>
                    Downvote: <input type="number" onChange={this.getDown} value={this.state.downvote}></input><br></br>
                    <button onClick={this.addProduct}>Add</button>
                </div>
            </div>
         );
    }
}
 
export default AddProduct;