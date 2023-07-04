import { combineReducers } from "redux";
import userReducers from "./reducer";

const Rootreducer = combineReducers({
    users: userReducers
}) 



export default Rootreducer;