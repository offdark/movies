import React from 'react';

class Print extends React.Component {
constructor(props){
    super(props);
    this.state = {name: props.name};
}
render(){
    return (
        <h1> print file {this.state.name}</h1>
    )
}

}


export default Print;