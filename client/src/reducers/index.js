import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
// import projectsReducer from "./projectsReducer";
import todosReducer from "./todosReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  todos: todosReducer
  //   projects: projectsReducer,
  //   tasks: tasksReducer
});
