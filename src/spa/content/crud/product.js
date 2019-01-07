import React from 'react';

class Product extends React.Component {

    constructor(props){
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(){
        this.props.deleteMe(this.props.id)
    }
    
    render() { 
        return (  
           
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.desc}</td>
                    <td>{this.props.up}</td>
                    <td>{this.props.down}</td>
                    <td>
                        <button onClick={this.deleteProduct}>Delete</button>
                    </td>
                </tr>
                
           

        );
    }
}
 
export default Product;