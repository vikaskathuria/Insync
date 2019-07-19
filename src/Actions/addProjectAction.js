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

export const addEmployeeProject=(project)=>({
    type:"ADD_EMPLOYEE_PROJECT",
    project
    
})
export const deleteEmployeeProject=(id)=>({
    type:"DELETE_EMPLOYEE_PROJECT",
    id
    
})