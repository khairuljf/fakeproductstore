
// Expenses Reducer 
const productReducerDefaultState  = {
    products:[],
    product:[]
}


const productReducer = (state= productReducerDefaultState, action)=>{

    switch(action.type){
        case 'ADD_PRODUCTS':
            return {
                ...state, products: action.data
            }

        case 'PRODUCT_DETAILS':

            return {
                ...state, product: action.data
            }

        case 'DELETE_PRODUCT':

            return state.products.filter(({id})=> id !==action.id)

        default:
            return state;
    }
}

export default  productReducer;