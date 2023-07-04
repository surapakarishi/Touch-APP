import { legacy_createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";
import Rootreducer from "./Reducers/Rootreducer";

const  store = legacy_createStore(Rootreducer,applyMiddleware(reduxThunk))

export default store;