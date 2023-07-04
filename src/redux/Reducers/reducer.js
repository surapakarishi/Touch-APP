const initialState = {
    data: [],
    user:{},
}

const userReducers = (state = initialState, action)=>{
    switch(action.type){
        case "REGISTER_USER":
            return{
                ...state,
                data:action.payload
            }
        case "LOGIN_USER":
            return{
                ...state,
                data:action.payload,
               
            } 
        case "USER_FEED":
            return{
               ...state,
               data:
               action.payload
               
            }   
        default:
            return state;
    }
};

export default userReducers;