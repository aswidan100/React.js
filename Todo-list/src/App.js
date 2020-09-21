import React, { Component } from 'react';
import ListIteams from './Componentes/ListItems';
import AddItems from './Componentes/AddItems'



class App extends Component{

  state = {
    items : [
      {id:1 , name:"ahmed" , age:23},
      {id:2 , name:"amir" , age:25},
      {id:3 , name:"ali" , age:24}
    ]
  }

  deleteitems = (id) => {
      let items = this.state.items.filter(item =>{
        return item.id !== id
      })
      this.setState({items})
  }
  
  additems = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    return(
          <div>
            <ListIteams mar={this.state.items} deleteitems={this.deleteitems} />
            <AddItems additems={this.additems} />
          </div>
          )
  }
}

export default App;
