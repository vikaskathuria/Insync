const initialState={
    projectList:[
        {
            projectName:'Insync',
            clientName:'',
            description:'Design UI for Insync and learn figma shortcuts'
        }
    ]
}
export const addProjectReducer=(state=initialState,action)=>{
    switch (action.type){
        case "ADD_PROJECT":
        return{
            ...state,
            projectList:[...state.projectList,action.project]
        }
       case "EMAIL_ADDRESS":
       return{
           
       }

        default:
        return state
    }
}

