import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        
      };
     
   
handleIncrement=product=>{
  console.log(product);
 this.setState({count:this.state.count+1});
}
 
    render() {

      return (
        <React.Fragment>
          <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
          <button onClick={()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
          
        </React.Fragment>
        );
       
    }
    getBadgeClasses() {
        let classes = 'badge m2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatcount(){
        const {count}=this.state;
        return count===0 ? <h1>Zero</h1>:count;

    }
}
 
export default Counter;