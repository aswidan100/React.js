import React from 'react';



const ListIteams =(props) => {
    const {mar , deleteitems } = props;
    let length = mar.length;
    const ListIteams = length ? (
        mar.map(item => {
            return(
                <div key={item.id}> 
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={()=>deleteitems(item.id)}>&times;</span>
                </div>
            )  
        })
    )   : (
        
        <div>Keda 7elw 3dy 3lina bokra!!!!!!!!</div>
    )
    return(
        <div className='listitems'>
            <span>Name</span>
            <span>Age</span>
            <span>Action</span>
            {ListIteams}
        </div>
    )
}


export default ListIteams 