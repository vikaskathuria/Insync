const initialState={
    projectList:[]
}
export const addProjectReducer=(state=initialState,action)=>{
    switch (action.type){
        case "ADD_PROJECT":
        return{
            ...state,
            projectList:action.project
        }
       case "EMAIL_ADDRESS":
       return{
           
       }

        default:
        return state
    }
}

