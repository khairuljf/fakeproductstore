import uuid from 'react-uuid';

export  const addProduct = (data) =>({
       type:'ADD_PRODUCTS',
       data
});


// Remove Expense
export const detailsProduct = (data) => ({
   type:'PRODUCT_DETAILS',
    data
})

// Edit Expense 
export const deleteProduct = (id)=>({
   type:'DELETE_PRODUCT',
   id
})






