const inistState ={

    count : 0
}

const reducer = (state = inistState , action) => {

    if(action.type == 'INCREASE') {
        return {count : state.count + 1}

    }else if (action.type == 'DECREASE') {
        return {count : state.count - 1}
    }
        
    return state;

}



export default reducer ;