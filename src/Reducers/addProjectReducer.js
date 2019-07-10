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
        case 'DELETE_ITEM':
        return{
            ...state,
            projectList:state.projectList.filter(v=>v._id!==action.id)
        }
    //    case "Edit_ITEM":
    //    return{
    //        ...state,
    //        projectList:state.projectList,
           
    //    }

        default:
        return state
    }
}

