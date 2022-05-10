import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:this.props.value,
        imageUrl: "https://picsum.photos/200",
        tags:['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5']
    };

    styles = {
        fontSize : 20,
        fontWeight :'bold'
    };

    handleIncrement = () => {
        console.log('Increment Clicked');
        this.setState({count :this.state.count + 1 });
    };

    handleDecrement =()=> {
        this.setState({count :this.state.count - 1 });
    };

    
    render() { 
        console.log(this.props);
              return (
        <div>
            
            <img src={this.state.imageUrl} alt="ab"/><br/>
            {this.props.children};
            <button onClick={this.handleDecrement} className='btn btn-danger btn-sm'>Decrement</button>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement} 
            className='btn btn-success btn-sm'>Increment</button>
            
            </div>
                );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount (){
        const {count} = this.state;
        return count ===0 ? 'Zero' : count;
    }
}
 export default Counter;