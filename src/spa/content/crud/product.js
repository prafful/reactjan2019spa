import React from 'react';

class Product extends React.Component {
    
    render() { 
        return (  
           
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.desc}</td>
                    <td>{this.props.up}</td>
                    <td>{this.props.down}</td>
                </tr>
                
           

        );
    }
}
 
export default Product;