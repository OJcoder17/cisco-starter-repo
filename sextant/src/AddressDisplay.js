import React, { Component } from 'react'; 



class AddressFetch extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            url: props.url,
            ipAddress: null
        };
    
} 

componentDidMount() {
    fetch(this.state.url)
        .then(response => response.json())
        .then(data => this.setState({ ipAddress: data.ip }));
}

render() {
    return (
        <span className="AddressFetch">
            {this.state.ipAddress}
        </span>
    );
}
}


export default AddressFetch;