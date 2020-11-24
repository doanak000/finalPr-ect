import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
import bookingReducer from "./booking.reducer";
import dependLoginReducer from "./dependLogin.reducer";
const rootReducer = combineReducers({
  // child reducer
  movie: movieReducer,
  common: commonReducer,
  booking: bookingReducer,
  dependLogin:dependLoginReducer,

});

export default rootReducer;
