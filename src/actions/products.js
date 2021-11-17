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
export const editExpense = (id, update)=>({
   type:'EDIT_EXPENSE',
   id,
   update
})






