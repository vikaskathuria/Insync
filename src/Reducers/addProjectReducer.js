const initialState={
    projectList:[],

employeeProjectList:[
       {   id:0,
           projectName:"Insync",
        clientName:"",
        description: "Design UI for Insync and learn figma shortcuts"}
    ]
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
       case "ADD_EMPLOYEE_PROJECT":
       return{
           ...state,
           employeeProjectList:[...state.employeeProjectList,action.project]
           
       }
       case "DELETE_EMPLOYEE_PROJECT":
       return{
           ...state,
           employeeProjectList:state.employeeProjectList.filter(v=>v.id!==action.id)
           
       }


        default:
        return state
    }
}

