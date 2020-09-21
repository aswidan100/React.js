import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase , decrase } from './Actions/action';



class App extends Component {
 
  render(){
    console.log(this.props)
    return(     
    <div>
      <button onClick={this.props.increase}> + </button>
      <div> {this.props.count} </div>
      <button onClick={this.props.decrease}> - </button>

    </div>
    );
  }
}



function mapStateToProps (state) {
      return{
        count : state.count

      }
}
 

function mapDispatchToProps (dispatch) {
  return{
    increase : () => dispatch ( increase () ) ,
    decrease : () => dispatch ( decrase () )
  }
}

export default connect (mapStateToProps , mapDispatchToProps) (App);