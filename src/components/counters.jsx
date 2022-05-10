import React, { Component } from 'react';
import Counter from './counter';

class  Counters extends Component {
    state = { 
        counters : [
            {id:0, value:0},
            {id:1, value:1},
            {id:2, value:2}
        ]
     } ;


     

    render() { 
        
        return (
            <div>
                {this.state.counters.map(counter => 
                <Counter 
                key={counter.id} 
               
                value={counter.value} >
                    <h3>Counter # {counter.id}</h3>
                </Counter>
                )}
            </div>
        );
    }
}
 
export default Counters ;