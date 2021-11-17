
// Expenses Reducer 
const productReducerDefaultState  = {
    products:[],
    product:[]
}


const productReducer = (state= productReducerDefaultState, action)=>{
    console.log('Action',action)
    switch(action.type){
        case 'ADD_PRODUCTS':
            return {
                ...state, products: action.data
            }

        case 'PRODUCT_DETAILS':

            return {
                ...state, product: action.data
            }

            return state.filter(({id})=> id !==action.id)

        default:
            return state;
    }
}

export default  productReducer;