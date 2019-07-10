export const addProject=(project)=>({
    type:"ADD_PROJECT",
    project
    
})
export const deleteProject=(id)=>({
    type:'DELETE_ITEM',
    id
})
export const editProject=(id)=>({
    type:'Edit_ITEM',
    id
})

export const emailAddress=(email)=>({
    type:"EMAIL_ADDRESS",
    email

})