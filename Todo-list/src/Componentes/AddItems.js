import React, { Component} from 'react';



class Add extends Component {
    state = {
        name : '',
        age : ''
    } 

    handelchange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handelsubmit = (e) => {
        e.preventDefault(); 
            if(e.target.name.value === ''){
            return false
            }else {
            this.props.additems(this.state)
            this.setState({
            name : '',
            age : ''
         })
      }
    }
    render(){
        return(

            <div>
                <form onSubmit={this.handelsubmit}>
                    <input type="text" placeholder="Enter Your Name....."  id="name"  onChange={this.handelchange} value={this.state.name}/>
                    <input type="number" placeholder="Enter Yor Age...."  id="age"  onChange={this.handelchange} value={this.state.age}/>
                    <input type="Submit" value="Add"/>
                </form>
            </div>
        )
    }
}


export default Add