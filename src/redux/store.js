import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import rootReducer from "./reducers/index"; // index 생략해도 index 파일은 자동으로 읽어옴

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
